import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home')
const Category = () => import('@/views/Category')
const City = () => import('@/views/City')
const ShoppingCart = () => import('@/views/ShoppingCart')
const My = () => import('@/views/My')
const Details = () => import('@/views/Details')
const Login = () => import('@/views/Login')
const Browse = () => import('@/views/Browse')
const Collection = () => import('@/views/Collection')
const MyOrder = () => import('@/views/MyOrder')
const Address = () => import('@/views/Address')
const AddressEdit = () => import('@/views/AddressEdit')
import store from '../store'
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
    { path: '/home', name: 'Home', component: Home, meta: { keepAlive: true } }, // 首页
    { path: '/category', name: 'Category', component: Category, meta: { keepAlive: true } },// tab分类
    { path: '/shoppingCart', name: 'ShoppingCart', component: ShoppingCart },// tab购物车
    { path: '*', redirect: '/home' }, // 首页
    { path: '/my', name: 'My', component: My },         // 个人中心
    { path: '/city', component: City, name: 'City' },   // 城市选择
    { path: '/details', name: 'Details', component: Details, props: (route) => ({ id: route.query.id }), meta: { keepAlive: true } },      // 商品详情
    { path: '/login', name: 'Login', component: Login, meta: { requireAuth: false} }, // 登入
    { path: '/browse', name: 'Browse', component: Browse },      // 我的浏览记录
    { path: '/collection', name: 'Collection', component: Collection },// 我的收藏
    { path: '/order', component: MyOrder, name: 'MyOrder' },     // 我的订单
    { path: '/address', name: 'Address', component: Address }, // 地址
    { path: '/addressEdit', name: 'AddressEdit', component: AddressEdit }, // 新增和编辑地址
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

router.beforeEach((to, from, next) => {
  document.title = TITLE[to.name]
  // if (to.meta.requireAuth === false) { 
  //     /* 
  //       从Vuex拿出token码，说明已登陆
  //     */
  //     if (store.state.token) {
  //         next({path: '/home',})
  //     } else {
  //         next() 
  //     }
  // } else { 
  //     next();
  // }
   // 如果已经登录了就不让进这个页面
   if (store.state.userName && to.meta.requireAuth === false) {
      next({ path: '/home' })
  } else {
      next()
  }
  
})

export default router
