import Vue from 'vue'
import App from './App.vue'
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
// 导入自定义样式
import './assets/css/index.css'

// 加载组件
import Heroes from './views/Heroes.vue'
import Weapons from './views/Weapons.vue'
import Equips from './views/Equips.vue'
// 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { "name": "home", path: "/", component: Heroes },
    { "name": "heroes", path: "/heroes", component: Heroes },
    { "name": "weapons", path: "/weapons", component: Weapons },
    { "name": "equips", path: "/equips", component: Equips }
  ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
