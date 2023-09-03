import request from '@/utils/request'

export const getLifeData = (data) => {
  return request({
    url: '/getLifeData',
    method: 'get',
    params: data
  })
}
