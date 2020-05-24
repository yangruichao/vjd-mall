const path = require('path')// 引入path模块
function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = {
  publicPath: './',
  filenameHashing: false,
  outputDir: path.join(process.env.VUE_APP_WEB_DIR),
  devServer: {
    port: 8686,
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: config => {

  },
  // 项目别名 =>
  chainWebpack: config => {

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .tap(options => {
            // 修改它的选项...
            options.fallback.options.name = 'images/[name].[ext]?'; //去除图片hash
            options.limit = 1024; //这是字节(Byte)限制，1KB = 1024Byte ,当图片的大小小于 1KB ,则会被转为 base64格式，打包进js文件，大于1KB,则会被打包进 img 文件夹，供链接请求获取。
            return options
        });
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('utils', resolve('./src/utils'))
      .end()
  }
}
