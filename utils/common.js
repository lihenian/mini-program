// 获取昨天日期
export function getYesterday () {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if ( month == 1) {
    if (day == 1) {
      return `${year - 1}-12-31`
    }
  } else {
    if (day == 1) {
      if ([1,3,5,7,8,10,12].includes(month - 1)) {
        month = month - 1 > 9 ? month -1 : `0${month - 1}`
        return `${year}-${month}-31`
      } else {
        month = month - 1 > 9 ? month - 1 : `0${month - 1}`
        return `${year}-${month}-30`
      }
    } else {
      month = month > 9 ? month : `0${month}`
      day = day - 1 > 9 ? day - 1 : `0${day - 1}`
      return `${year}-${month}-${day}`
    }
  }
}