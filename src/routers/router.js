import Vue from 'vue'
// 加载组件
import Heroes from '../views/heroes/List.vue'
import Weapons from '../views/weapons/List.vue'
import Equips from '../views/equips/List.vue'
import AddHeroes from '../views/heroes/Add.vue'
import HeroEdit from '../views/heroes/Edit.vue'
// 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { "name": "home", path: "/", redirect: { name: 'heroes' } },
    { "name": "heroes", path: "/heroes", component: Heroes },
    { "name": "weapons", path: "/weapons", component: Weapons },
    { "name": "equips", path: "/equips", component: Equips },
    { "name": "addhero", path: "/heroes/add", component: AddHeroes },
    { "name": "edit", path: "/heroes/edit/:id", component: HeroEdit }
  ]
})
export default router;
