import axios from 'axios'
const server = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/v1' : '/api/v1',
    timeout: 2000,  // 超时
    headers: {}
})
// respone拦截器
// server.interceptors.response.use(
//     response => {
//         const res = response.data
//         if (res.code === ERR_OK) {  // 统一处理
//             return res // 直接返回数据
//         } else {
//             Vue.prototype.$toast(res.msg)
//             return Promise.reject(res)
//         }
//     },
//     error => {
//         Vue.prototype.$toast('网络错误')
//         return Promise.reject(error)
//     }
// )
// window.addEventListener('unhandledrejection', event => event.preventDefault())
export default server