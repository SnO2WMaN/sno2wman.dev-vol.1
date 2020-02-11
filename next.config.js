module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['babel-loader', 'react-svg-loader'],
    })
    return config
  },
}
