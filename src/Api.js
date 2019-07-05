import axios from 'js/axios'
// 所有接口的api封装
export default class Api {
    /**
     * 首页(Home)所有接口
     * recommend            首页的默认数据
     * search               搜索 参数： value：搜索关键词
     * keeplogin            保持登录
     */
    static recommend() {
        return axios('/recommend', 'get')
    }

    static search(value, page = 1) {
        return axios('/search', 'post', {
            value,
            page
        })
    }

    static keeplogin() {
        return axios('/keeplogin')
    }
    // ===============================================================================================================
    /**
     * 分类页面(Category)所有接口
     * category 分类查询  参数id：默认分类的id
     */
    static category(id) {
        return axios(`/classification?mallSubId=${id}`, 'get')
    }

    // ===============================================================================================================
    /**
     * 购物车(ShoppingCart)所有接口
     * getCard      查询获取购物车数据
     * editCart     购物车加减商品      参数 ： 数量  商品id 价格
     * deleteShop   购物车商品删除      参数 id：需要删除的商品id
     */
    static getCard() {
        return axios(`/getCard`)
    }

    static editCart(count, id, mallPrice) {
        return axios('/editCart', 'post', {
            count,
            id,
            mallPrice
        })
    }

    static deleteShop(id) {
        return axios('/deleteShop', 'post', id)
    }

    // ===============================================================================================================
    /**
     * 购物车支付页面(ShoppingPayMent)所有接口
     * placeOrder 提交订单 参数：address:收货地址,tel:电话，orderId：所有商品的id，totalPrice：总价格,idDirect:用来判断是购物车结算还是直接购买,count:商品数量
     */
    static placeOrder({ ...args }) {
        return axios('/order', 'post', args)
    }

    // ===============================================================================================================
    /**
     * 商品详情页面(Details)所有接口
     * goodOne          请求单个商品详情,        参数： id:商品的id,page: 商品评论的页码
     * collection       收藏单个商品            参数：  goods:商品的详情信息
     * cancelCollection 取消收藏单个商品        参数：  id:商品的id
     * isCollection     查询商品是否已收藏      参数：  id:商品的id
     * addShop          加入购物车             参数：  id:商品的id
     */
    static goodOne(id, page = 1) {
        return axios(`/goods/one?id=${id}&page=${page}`, 'get')
    }

    static collection(goods) {
        return axios('/collection', 'post', goods)
    }

    static cancelCollection(id) {
        return axios('/cancelCollection', 'post', { id })
    }

    static isCollection(id) {
        return axios(`/isCollection`, 'post',{ id })
    }

    static addShop(id) {
        return axios(`/addShop`, 'post',{ id })
    }
    // ===============================================================================================================

    /**
     * 会员中心(My)所有接口
     * loginOut 退出登录
     * user     获取用户信息
     * saveUser 修改保存用户信息
     * getOrderNum 查询用户订单数量
     * comment  商品评论
     */
    static loginOut() {
        return axios(`/loginOut`)
    }

    static user() {
        return axios(`/queryUser`)
    }

    static saveUser({ ...args }) {
        return axios(`/saveUser`, 'post', args)
    }

    static getOrderNum() {
        return axios(`/myOrder/orderNum`, 'get')
    }

    static comment({ ...args }) {
        return axios(`/goodsOne/comment`, 'post',args)
    }
    // ===============================================================================================================
    /**
     * 用户相关(user文件夹下)所有接口
     * getAverify           获取登录注册默认验证码
     * replaceVerify        更换验证码
     * getAddress           查询用户收货地址 
     * getDefaultAddress    查询默认收货地址
     * setDefaultAddress    设置默认收货地址    参数：id：地址id
     * postAddress          增加收货地址        参数：name:用户名,tel:电话，address:详情地址，isDefault：是否默认
            *                                province：省，city：市，county：区，addressDetail：详情地址，
            *                                areaCode：地区代码，id：修改地址时候要传id
     * deleteAddress        删除地址            参数： id：地址id
     * getCollection        查询我的收藏    参数：page，页码，默认第一页
     * register             注册            参数：nickname，用户名 password：密码，verify:验证码
     * login                登录
     * codeMsg              短信验证码      参数： sms 4位验证码
     * getMyOrder           订单查询        参数：evaluate：用来判断是不是查询订单，默认false
     * alreadyEvaluated     查询已评价      参数： page：页面
     * tobeEvaluated        查询待评价      参数： page：页面
     * evaluateOne          查询单条评论    参数： id：商品id，_id：数据库的那条id
     */
    static getAverify() {
        // return process.env.NODE_ENV === 'production' ? `/v1/verify?mt=${Math.random()}` : `/api/v1/verify?mt=${Math.random()}`
        return process.env.NODE_ENV === 'production' ? `/verify?mt=${Math.random()}` : `/api/verify?mt=${Math.random()}`
    }

    static getAddress() {
        return axios(`/getAddress`, 'get')
    }

    static getDefaultAddress() {
        return axios(`/getDefaultAddress`, 'get')
    }

    static setDefaultAddress(id) {
        return axios(`/setDefaultAddress`, 'post', { id })
    }

    static postAddress({ ...args }) {
        return axios(`/address`, 'post',args)
    }

    static deleteAddress(id) {
        return axios('/deleteAddress', 'post', {
            id
        })
    }

    static getCollection(page = 1) {
        return axios(`/collection/list`, 'get', {
            params: { page }
        })
    }

    static register(nickname, password, verify, sms) {
        return axios('/register', 'post', {
            nickname,
            password,
            verify,
            sms
        })
    }

    static login(nickname, password, verify, ) {
        return axios('/login', 'post', {
            nickname,
            password,
            verify
        })
    }

    static codeMsg(phone) {
        return axios('/sendCodeMsg', 'post',{
            phone
        })
    }

    static getMyOrder() {
        return axios(`/myOrder`, 'get')
    }

    static alreadyEvaluated(page = 1) {
        return axios('/alreadyEvaluated', 'get',{
            params: { page }
        })
    }

    static tobeEvaluated(page = 1) {
        return axios('/tobeEvaluated', 'get',{
            params: { page }
        })
    }

    static evaluateOne(_id) {
        return axios('/evaluateOne', 'post', {
            _id
        })
    }
}