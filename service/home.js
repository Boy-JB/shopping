import request from './network'

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}