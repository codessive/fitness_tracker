const { environment } = require('@rails/webpacker')
const webpack = require('webapck')
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['Popper.js','default']
  })
)

module.exports = environment
