// const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const { override } = require('customize-cra')

function customPlugins (config, env) {
  config.module.rules.push({
    test: /\.bpmn$/,
    use: 'raw-loader'
  })
  config.plugins.push(new DashboardPlugin({ port: 3302 }))
  console.log(config, 555)
  return config
}

module.exports = override(
  customPlugins
)
