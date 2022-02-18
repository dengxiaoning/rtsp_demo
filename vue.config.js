const path = require('path')

function resolvePath(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: 'rtspdemo',
  productionSourceMap: false,
  configureWebpack: {
    name: 'vxg',
    resolve: {
      alias: {
        '@': resolvePath('src'),
      }
    },
  }
};