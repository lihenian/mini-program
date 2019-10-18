import request from '../utils/request'
import requestFormData from '../utils/request'
import dateTools from '../utils/date-tools'
export function interactStatistics () {
  return request.get('screen/article/interactStatistics', {})
}

export function queryModuleChannelHotForApplet (stime, etime) {
  let url = 'datadetail/channelrank/listMp'
  let params = {}
  params.stime = stime
  params.etime = etime
  params.topNum = 10
  params._search = false
  params.page = -1
  params.sidx = 1
  params.order = 'asc'
  params.sidxQuery = 'read_rank'
  return request.get(url, params)
}

//圈子热度分析
export function queryModuleChannelHotForAppletModule3 (stime, etime) {
  stime = '?stime=' + stime
  etime = '&etime=' + etime
  let url = 'datadetail/groupsubjectrank/listForApplet' + stime + etime + '&topNum=10&limit=-1&page=1&sidxQuery=comment_rank'
  return request.get(url, {})
}

// 热门新闻top10
export function listTopTenNews (stime, etime) {
  stime = '?stime=' + stime
  etime = '&etime=' + etime
  let url = 'datadetail/articlerank/listForApplet' + stime + etime + '&topNum=10&limit=-1&page=1'
  return request.get(url, {})
}

// 圈子热议话题top10
export function listTopTenCoterie () {
  let url = 'screen/coterie/hotRank'
  return request.get(url, {})
}

export function queryModuleChannelHot (stime, etime) {
  let url = 'datadetail/streetrank/listMP'
  let params = {}
  params.stime = stime
  params.etime = etime
  params.topNum = 30
  params._search = false
  params.page = -1
  params.sidx = 1
  params.order = 'asc'
  params.sidxQuery = 'read_rank'
  return request.get(url, params)
}