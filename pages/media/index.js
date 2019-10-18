import { listTopTenNews, listTopTenCoterie } from '../../api/media'
const dateTools = require('../../utils/date-tools')
Page({
  data: {
    lastMonthName: '', //上个月
    // 热门新闻热议列表
    hotNewsTopicList: [],
    circleHotTopicList: []
  },
  // 生命周期函数-监听页面显示
  onShow () {
    this.initTopTenNews()
    this.initTopTenNewstwo()
  },
  // 生命周期函数-监听页面隐藏
  onHide: () => {

  },
  initTopTenNews: function () {
    let lastMonth = dateTools.getLastMonth()
    this.setData({
      lastMonthName: lastMonth[0]
    })
    listTopTenNews(lastMonth[1], lastMonth[2]).then(res => {
      console.log('热门新闻热议', res)
      this.setData({
        hotNewsTopicList: res.page.list
      })
    }).catch(err => {
      console.log(err)
    })
  },
  initTopTenNewstwo: function () {
    listTopTenCoterie().then(res => {
      console.log('圈子热议话题', res)
      this.setData({
        circleHotTopicList: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }
})