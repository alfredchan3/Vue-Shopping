import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home')
const City = () => import('@/views/City')

Router.prototype.animate = 0     // 定义路由跳转动画
Vue.use(Router)

/**
 * requireAuth 该页面登录了就不让进去
 * keepAlive  需要缓存的页面
 */
const router = new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/home' },                 // 首页
    { path: '/home', name: 'home', component: Home, meta: { keepAlive: true } }, // 首页
    { path: '*', redirect: '/home' }, // 首页
    { path: '/city', component: City, name: 'City' },   // 城市选择
  ]
})

// 设置title
const TITLE = {
  Home: '首页',
  Category: '商品分类',
  ShoppingCart: '购物车',
  Details: '商品详情',
  My: '个人中心',
  MyOrder: '我的订单',
  Collection: '我的收藏',
  Browse: '浏览历史',
  Evaluate: '评价中心',
  Aevaluated: '查看评价',
  Rate: '评价商品',
  Address: '地址列表',
  AddressEdit: '地址编辑',
  Login: '注册登录',
  City: '城市选择',
  ShoppingPayMent: '订单结算',
}

/*router.beforeEach((to, from, next) => {
  document.title = TITLE[to.name]
  // 如果已经登录了就不让进这个页面
  if (Store.state.userName && to.meta.requireAuth === false) {
    next({ path: '/home' })
  } else {
    next()
  }
  next()
})*/

export default router
