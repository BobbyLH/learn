module.exports = {
  plugins: [
    require('postcss-cssnext')({
      warnForDuplicates: false
    }),
    require('postcss-modules')({
      generateScopedName: '[name]_[local]_[hash:base64:5]]'
    }),
    require('cssnano')({
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }),
    require('autoprefixer')({
      browsers: [
        'last 5 versions',
        'firefox >= 20',
        'chrome >= 34',
        'safari >= 6',
        'opera >= 12.1',
        'ios >= 6',
        'android >= 4.4',
        'ie >= 8'
      ]
    })
  ]
}
