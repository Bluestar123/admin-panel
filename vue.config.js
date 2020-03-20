module.exports = {
  publicPath: './',
  outputDir: 'dist',
  // 放置静态资源的目录
  assetsDir: 'static',
  // html 的输出路径
  indexPath: 'index.html',
  // 文件名哈希
  filenameHashing: true,
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: true,
  // 是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  // babel-loader 默认会跳过 node_modules 依赖。
  transpileDependencies: [],
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://douban.uieee.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
