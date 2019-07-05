import axios from 'axios'
import store from '../../store'
// const server = axios.create({
//     baseURL: process.env.NODE_ENV === 'production' ? '/v1' : '/api/v1',
//     timeout: 2000,  // 超时
// })
const debug = process.env.NODE_ENV === 'production'
axios.interceptors.request.use((config) => {
    try {
        if (!debug) {
            config.url = '/api' + config.url
        }

        return config;
    } catch (error) {
        console.log(error);

    }
}, (error) => {
    return Promise.reject(error);
});

// axios.interceptors.response.use(
//     response => {
//         return response
//     },
//     error => {
//         if (error.response) {
//             if (error.response.status == 401) {
//                 loadings('加载中', 1)
//                 store.dispatch('clearToken')
//                 store.dispatch('clearDoctor')
//                 localStorage.clear(); //
//                 // if (router.history.current === 'AddPatient') {
//                 router.currentRoute.path !== '/login' && router.replace({ path: '/login' })
//                 // }

//             }
//         }
//         return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//     })


// 默认请求成功状态
export default (url, type = 'post',params) => {
    // return params => {
        return axios[type](url, type == 'get' ? { params } : params).then(res => {
            const { status, data } = res;
            // 正确状态处理
            if (status == 200) {
                return res;
            } else if (data.code == 20001) {  // token过期或者未登录
                window.location.href = '/#/login'
            } else if (data.code == 10002) {    // 接口其他提示信息
                toast(data.msg)
                return data
            }
            // 错误物理请求处理
        }).catch(err => {
            toast('服务器超时')
            return Promise.reject(err)   // 返回接口返回的错误信息
        })
    // }
}
