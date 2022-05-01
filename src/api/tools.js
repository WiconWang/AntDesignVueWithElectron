
import request from '../utils/request'
import qs from 'qs'

// 查询数据
export function getTTSResult(data) {
  return request({
    url: '/aliyun/tts',
    method: 'post',
    data: qs.stringify(data)
  })
}
