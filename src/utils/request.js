//require('es6-promise').polyfill();
import axios from 'axios'
import store from '../store'
import Vue from 'vue'
import { Dialog,Toast } from 'vant';
Vue.use(Dialog);
Vue.use(Toast);

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
 // timeout: 1000, // 请求超时时间
  withCredentials:true
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

service.defaults.transformRequest = [function (data) {
  // Do whatever you want to transform the data
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret.slice(0,-1)
}],
// request拦截器
// service.interceptors.request.use(config => {
//   if (store.getters.token) {
//     config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//   }
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * state非1则为错误
  */
    const res = response.data
    if (res.state !== 1) {
      // 0错误 -1登录失效
      if ( res.state === -1) {
        /*console.log('你已被登出，可以取消继续留在该页面，或者重新登录')*/
        Dialog.confirm({
            title: '确定登出',
            message: '你已被登出，可以取消继续留在该页面，或者重新登录'
        }).then(() => {
          // store.dispatch('FedLogOut').then(() => {   //请求登出的接口
          //    location.reload()// 为了重新实例化vue-router对象 避免bug
          // })
        }).catch(() => {
          // on cancel
        });
      }
      return response.data
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Toast(res.msg);
    return Promise.reject(error)
  }
)

export default service
