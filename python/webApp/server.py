import web

render = web.template.render('templates/')

urls = (
  # '/', 'index',
  '/(.*)', 'index'
)

class index:
  def GET(self, name):
    # data = web.input(name=None)
    # return render.index('Good Morning ' + data.name)
    return render.index('Good Morning ' + name)

if __name__ == '__main__':
  app = web.application(urls, globals())
  app.run()