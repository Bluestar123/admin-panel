import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

// 请求拦截(必须放在配置axios前面)
http.interceptors.request.use(config => {
  console.log('请求拦截')
  // config.headers['X-Token'] = 'token'
  return config
}, error => {
  // 请求错误回调
  console.log(error) // for debug
})
// 响应拦截(必须放在配置axios前面)
http.interceptors.response.use(response => {
  console.log('响应拦截')
  return response
}, error => {
  console.log(error)
})

export default http
