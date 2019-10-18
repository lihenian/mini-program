const currentYear = () => {
  var date = new Date()
  return date.getFullYear() + '年'
}

const currentMonth = () => {
  var date = new Date()
  return date.getMonth() + 1 + '月'
}
const currentMonthNum = () => {
  var date = new Date()
  return date.getMonth() + 1
}
const currentYearMonthWithBar = () => {
  var date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return [year, month].map(formatNumber).join('-')
}

const currentYearMonthWithWord = () => {
  var date = new Date()
  const year = date.getFullYear() + '年'
  const month = date.getMonth() + 1 + '月'
  return year + month
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 上个月的第一天
const firstDayAtLastMonth = () => {
  var nowdays = new Date()
  var year = nowdays.getFullYear()
  var month = nowdays.getMonth()
  if (month == 0) {
    month = 12
    year = year - 1
  }
  if (month < 10) {
    month = '0' + month
  }
  return year + '-' + month + '-' + '01'
}

//上个月的最后一天
const lastDayAtLastMonth = () => {
  var nowdays = new Date()
  var year = nowdays.getFullYear()
  var month = nowdays.getMonth()
  if (month == 0) {
    month = 12
    year = year - 1
  }
  var myDate = new Date(year, month, 0)
  if (month < 10) {
    month = '0' + month
  }
  return year + '-' + month + '-' + myDate.getDate()
}

// 获取上个月，如上月为2019年9月，返回的数组为['2019年09月','2019-09-01','2019-09-30','2019-09']
const getLastMonth = () => {
  var nowdays = new Date()
  var year = nowdays.getFullYear()
  var month = nowdays.getMonth()
  if (month == 0) {
    month = 12
    year = year - 1
  }
  var myDate = new Date(year, month, 0)
  if (month < 10) {
    month = '0' + month
  }
  return [
    year + '年' + month + '月',
    year + '-' + month + '-' + '01',
    year + '-' + month + '-' + myDate.getDate(),
    year + '-' + month,
    year
  ]
}

module.exports = {
  currentYear: currentYear,
  currentMonth: currentMonth,
  currentMonthNum: currentMonthNum,
  currentYearMonthWithBar: currentYearMonthWithBar,
  currentYearMonthWithWord: currentYearMonthWithWord,
  firstDayAtLastMonth: firstDayAtLastMonth,
  lastDayAtLastMonth: lastDayAtLastMonth,
  getLastMonth: getLastMonth
}
