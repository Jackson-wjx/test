import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,          //引入路由
  store,
  render: h => h(App)                //ES6箭头函数
}).$mount('#app')
// render:function(createElement) {
//   return createElement(App)
// }

//render: h=>h(app)  虚拟dom渲染到app中