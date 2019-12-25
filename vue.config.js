const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
let cssExtract = false,
  webpackMinimize = false;
if (process.env.NODE_ENV === "production") {
  cssExtract = {
    filename: "style/[name].[hash:8].css",
    chunkFilename: "style/[name].[hash:8].css"
  };
  webpackMinimize = true;
}

module.exports = {
  configureWebpack: {
    // 缓存dll,优化编译速度
    plugins: [new HardSourceWebpackPlugin()]
  },
  chainWebpack(config) {
    // 最小化代码 使用TerserPlugin
    config.optimization.minimize(webpackMinimize);
    // 公共资源提取，
    // vendors提取的是第三方公共库(满足提取规则的node_modules里面的且页面引入的)，这些文件会打到dist/js/chunk-vendors.js里面37831ms24927ms
    // 提取规则是每个页面都引入的才会打到chunk-vendors.js里面(如vue.js)
    // 控制条件是minChunks字段，所以该字段的值是当前activity/src/projects里面的html的个数
    // common提取的应该是除了vendors提取后，剩余的满足条件的公共静态模块
    // 我们的项目不需要common，所以将common置为{}，覆盖默认common配置
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: "chunk-vendors",
          minChunks: 2,
          test: /node_modules/,
          priority: -10,
          chunks: "initial"
        },
        common: {}
      }
    });
    // 别名配置
    config.resolve.alias
      .set("@alpha", resolve("src/ModulesAlpha"))
      .set("@beta", resolve("src/ModulesBeta"));
  },
  // 样式编译配置 用于样式隔离
  css: {
    extract: cssExtract
  },
  pages: {
    // 多页应用的配置
    index: {
      // page 的入口
      entry: "src/ModulesAlpha/main.js",
      // 模板来源
      template: "public/ModulesAlpha.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Multipage ModulesAlpha",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    Beta: {
      entry: "src/ModulesBeta/main.js",
      template: "public/AlphaModules.html",
      filename: "beta.html",
      title: "beta title"
      // chunks: ["chunks-beta"]
    }
  }
};
