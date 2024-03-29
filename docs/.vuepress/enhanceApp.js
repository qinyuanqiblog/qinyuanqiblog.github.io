
// import vue from 'vue/dist/vue.esm.browser'
import Element from 'element-ui';
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(Element);
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
}
