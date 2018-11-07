import request from '@/utils/request'

export function getData(delivery_id) {
  return request({
    url: '/v1.2/Gdtdelivery/deliveryInfo/'+delivery_id,
    method: 'get'
  })
}