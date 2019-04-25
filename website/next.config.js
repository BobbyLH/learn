module.exports = {
  exportPathMap: function () {
    return {
      '/main': { page: '/main' }
    }
  },
  webpack: (config, { dev, isServer, defaultLoaders }) => {
    config.plugins = config.plugins.filter(
      (plugin) => (plugin.constructor.name !== 'UglifyJsPlugin')
    )
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    )

    if (dev) {
      return config
    }

    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  }
}