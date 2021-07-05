// Allow code coverage for component testing
// https://github.com/cypress-io/cypress/issues/16798#issuecomment-855846332
const injectDevServer = require('@cypress/react/plugins/react-scripts')
const findReactScriptsWebpackConfig = require('@cypress/react/plugins/react-scripts/findReactScriptsWebpackConfig')
const { startDevServer } = require('@cypress/webpack-dev-server')
const codeCoverageTask = require('@cypress/code-coverage/task')

module.exports = (on, config) => {
  codeCoverageTask(on, config)

  if (config.testingType === 'component') {
    injectDevServer(on, config)

    const webpackConfig = findReactScriptsWebpackConfig(config, {
      webpackConfigPath: 'react-scripts/config/webpack.config',
    })
    const rules = webpackConfig.module.rules.find((rule) => !!rule.oneOf).oneOf
    const babelRule = rules.find((rule) => /babel-loader/.test(rule.loader))

    babelRule.options.plugins.push(require.resolve('babel-plugin-istanbul'))

    on('dev-server:start', (options) => {
      return startDevServer({ options, webpackConfig });
    })
  }

  return config
}
