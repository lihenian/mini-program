import request from '../utils/request'
import requestFormData from '../utils/request'
import dateTools from '../utils/date-tools'
// 大屏中心统计数据
export function statistics () {
  return request.get('screen/center/statistics', {})
}
//用户性别、年龄占比
export function ageAndSex () {
  return request.get('screen/user/ageAndSex', {})
}
//用户职业及占比
export function professionAndPercent () {
  return request.get('screen/user/professionAndPercent', {})
}
//月活分析 http://218.201.110.228:8300/oas-admin/user/usermonthacivity/listForApplet?limit=12&page=1&order=asc
export function monthActivity () {
  return request.get('user/usermonthacivity/listForApplet?limit=12&page=1&order=asc', {})
}
//新增注册用户  user/newlyreguseryear/getNewlyRegUserYearData
export function getNewlyRegUserYearData () {
  return requestFormData.postFormData('user/newlyreguseryear/getNewlyRegUserYearData', { year: dateTools.getLastMonth()[4], userType: '0' })
}