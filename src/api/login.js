import request from '@/utils/request'

export const doLogin = (data) => {
  return request({
    url: '/login',
    method: 'post',
    params: data
  })
}
