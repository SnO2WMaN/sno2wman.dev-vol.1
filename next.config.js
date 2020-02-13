const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['babel-loader', 'react-svg-loader'],
    })
    return config
  },
})
