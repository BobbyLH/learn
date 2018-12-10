const path = require('path')
const fs = require('fs')
const md5 = require('md5')
const crypto = require('crypto')
const Koa = require('koa')
const PassThrough = require('stream').PassThrough

const log = console.log
const app = new Koa()

app.use(async (ctx, next) => {
  const reqPath = ctx.request.path
  const {page} = ctx.request.query

  if (reqPath !== '/favicon.ico') {
    log(`------------[Request Start]: path is ${reqPath}------------`)
    if (reqPath === '/') {
      ctx.filePath = `resource/index.html`
    } else if (reqPath.search(/\.jpg/) !== -1) {
      ctx.filePath = `resource${reqPath}`
    } else if (page) {
      ctx.filePath = `resource/${page}.html`
    } else {
      ctx.filePath = `resource/index1.html`
    }
  } else return false

  next()
})

// 404 error
app.use(async (ctx, next) => {
  const filePath = ctx.filePath
  if (!fs.existsSync(filePath)) {
    ctx.status = 404
    ctx.set({ 'Content-Type': 'text/html' })
    ctx.body = '<h1>404 Not Found</h1>'
    return
  }

  next()
})

// set Content-Type
app.use(async (ctx, next) => {
  const EXT_MIME_TYPES = {
    default: 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'text/json',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpg',
    '.png': 'image/png'
  }

  const filePath = ctx.filePath
  const mimeType = EXT_MIME_TYPES[path.extname(filePath)] || EXT_MIME_TYPES['default']

  log('mime_type', mimeType)

  ctx.set('Content-Type', mimeType)

  next()
})

// set cache
app.use(async (ctx, next) => {
  // pathname
  const reqPath = ctx.request.path
  // query
  const {api} = ctx.request.query
  // file state
  const stat = fs.statSync(ctx.filePath)
  // file modify time
  const mtime = stat.mtime
  // stream
  const stream = fs.readFileSync(ctx.filePath)
  // md5 compile tag
  const mtag = md5(stream)
  // crpto tag
  const hash = crypto.createHash('md5')
  const ctag = hash.update(stream).digest('hex')
  // match tag
  const matchTag = ctx.get('If-None-Match')
  // get last modify
  const getLastMod = ctx.get('If-Modified-Since')
  // expire time
  const expireTime = time => new Date(new Date().setTime(new Date().getTime() + time || 20000))
  // set last modify
  const setLastMod = new Date(mtime).toGMTString()

  log('getLastMod:', getLastMod, '\n', 'setLastMod:', setLastMod, '\n', 'mtime:', mtime, '\n', 'matchTag:', matchTag, '\n', 'mtag:', mtag, '\n', 'ctag:', ctag)

  if (matchTag) {
    // etag 缓存判断
    if (matchTag === mtag) {
      ctx.status = 304
      log('304 ETag 生效')
      return
    }
  } else if (getLastMod) {
    // last-modified缓存
    if (getLastMod === setLastMod) {
      ctx.status = 304
      log('304 Last-Modified 生效')
      return
    }
  }

  const cacheSet = {
    '/expire': [{field: 'Expires', value: expireTime(20000)}],
    '/maxage': [{field: 'Cache-Control', value: 'max-age=30'}],
    '/maxage-expire': [{field: 'Cache-Control', value: 'max-age=10'}, {field: 'Expires', value: expireTime(1000000)}],
    '/nostore': [{field: 'Cache-Control', value: 'no-store'}],
    '/lastmodify': [{field: 'Last-Modified', value: setLastMod}],
    '/lastmodify-maxage': [{field: 'Last-Modified', value: setLastMod}, {field: 'Cache-Control', value: 'max-age=316000000'}],
    '/etag': [{field: 'ETag', value: mtag}],
    '/etag-lastmodify': [{field: 'ETag', value: mtag}, {field: 'Last-Modified', value: setLastMod}],
    '/etag-maxage': [{field: 'ETag', value: mtag}, {field: 'Cache-Control', value: 'max-age=86400'}],
    '/etag-nocache': [{field: 'ETag', value: mtag}, {field: 'Cache-Control', value: 'no-cache'}],
    '/mustrevalidate': [{field: 'Cache-Control', value: 'max-age=30,must-revalidate'}]
  }

  const caches = cacheSet[reqPath] || (api && cacheSet[api])
  // set caches
  if (caches) {
    for (let i = 0; i < caches.length; i++) {
      const {field, value} = caches[i]
      ctx.set(field, value)
      log('set cache is:', caches[i])
    }
  } else {
    ctx.set('Cache-Control', 'no-cache')
  }

  next()
})

// 返回文件内容
app.use(async (ctx, next) => {
  const filePath = ctx.filePath

  const resStream = fs.createReadStream(filePath)
  ctx.status = 200
  ctx.body = resStream.pipe(PassThrough())
  log('------------[Request End]------------')
})

// 错误处理
app.on('error', err => {
  console.log('[Server Error]', err)
})

app.listen(8288, () => log('[Server start at port]: http://localhost:8288'))
