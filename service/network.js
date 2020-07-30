import {
  baseURL
} from './config'

export default function(optios) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + optios.url,
      method: optios.method || 'get', 
      data: optios.data || {},
      success: resolve,
      fail: reject
    })
  })
}