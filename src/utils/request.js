import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_PROXY, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    config.headers['Accept'] = 'application/json'
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
service.interceptors.response.use(response => {
  return response.data
}, error => {
  if (error.response) {
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data)
  }
})
export default service
