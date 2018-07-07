import Vue from 'vue'
import App from './App.vue'
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
// 导入自定义样式
import './assets/css/index.css'
// 导入路由
import router from './routers/router'

// 导入axios组件
import axios from '../plugins/MyAxios'

Vue.use(axios)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
