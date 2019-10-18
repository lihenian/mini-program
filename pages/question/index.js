import { hotRank } from '../../api/question'

Page({
  data: {
    hotEventList: []
  },
  // 生命周期函数-监听页面显示
  onShow () {
    this.hotRank()
  },
  hotRank () {
    hotRank().then(res => {
      console.log('热议事件', res)
      this.setData({
        hotEventList: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }
})