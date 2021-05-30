module.exports = {
  pwa: {
    name: 'Twitter Post Generator',
    themeColor: '#1da1f2'
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Twitter Post Generator'
      return args
    })
  }
}