import axios from 'axios'
import Cookie from 'js-cookie'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000
})

request.interceptors.request.use(
  (config) => {
    config.headers.token = Cookie.get('token')
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return res?.data
    }
    return Promise.reject()
  },
  function (error) {
    /* 无网络、超时、被取消 */
    return Promise.reject(error)
  }
)

export default request
