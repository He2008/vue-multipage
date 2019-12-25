# Vue 多页脚手架

主要引入 Vue,Vue-router,Vuex,Element-ui,echarts 等全局资源.

在 SPA 的基础上增加了多页功能,这样能在组件复用的基础上又能更好的隔离不同模块(可以解决某些全局样式的污染问题).

使用 SCSS 作为 CSS 预处理器.

使用 echarts 时注意使用异步加载.

开发使用 Eslint 和 prettier 进行代码风格格式化


## 目录说明

- `/src` 开发代码 
  - `{name}Modules` 模块目录(每个模块都可以是单独的一个SPA,也可以只是一个Vue实例页面,比如说活动页面等)
    - `/components` 通用视图组件(呈现组件)只负责 UI 展示和交互
    - `/store` Vuex 保存 app 状态与业务逻辑
    - `/views`当前模块业务模块,通常对应页面和单独的业务组件
    - `/assets` 当前模块静态资源(图片\音乐等)
    - `/styles` 模块样式
    - `/router` 相关路由文件
    - `/services` http,websocket 等接口服务
    - `/main.js` 模块入口文件
    - `/app.vue` 根实例
  - `/assets` 静态文件
  - `/utils` 工具函数
  - `/plugins` 跨模块公用插件(可以是Vue components/CSS 插件..)
  - `/scss` 公用的SCSS(函数/extend/)
- `public` 多页的HTML模板和不经过 webpack 的静态文件(包括某些静态页面\图标等)

## 建议

- 开发前请阅读 [Vue 风格指南](https://vue.docschina.org/v2/style-guide/) 本项目基本遵守 A,B 级规则
- 请勿上传 IDE 工程文件,如有必要请及时修改 `.gitignore`
- Vue 组件的样式作用域推荐使用 [CSS Module](https://vue-loader-v14.vuejs.org/zh-cn/features/css-modules.html) 进行控制
