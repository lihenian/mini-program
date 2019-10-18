import request from '../utils/request'
import dateTools from '../utils/date-tools'
import { getYesterday } from '../utils/common'

export function categoryAndPercent () {
  return request.get('screen/event/categoryAndPercent', {})
}

export function categoryAndPercentByID (typeId) {
  return request.get('screen/event/categoryAndPercentByID?typeId=' + typeId, {})
}

export function reportAnalysis () {
  const yeaterday = getYesterday()
  return request.get('screen/event/reportAnalysis/' + yeaterday, {})
}

export function hotRank () {
  return request.get('screen/event/hotRank', {})
}

export function getEventYearDataCopy () {
  return request.post('event/eventanalysisyear/getEventYearDataCopy', {
    'year': dateTools.getLastMonth()[4]
  })
}