import request from '../utils/request'
// 大屏中心统计数据
export function login (loginDto) {
  return request.post('oasappletuser/appletuser/register', loginDto)
}