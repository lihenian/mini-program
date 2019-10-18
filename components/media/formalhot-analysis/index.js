import { queryModuleChannelHot } from '../../../api/media'
import dateTools from '../../../utils/date-tools'
Component({
  data: {
    formalHotList: [],
    maxAmount: 0,
    lastMonth: dateTools.getLastMonth()[0]
  },
  pageLifetimes: {
    show () {
      this.queryModuleChannelHot()
    }
  },
  methods: {
    queryModuleChannelHot () {
      let lastMonth = dateTools.getLastMonth()
      console.log(lastMonth)
      queryModuleChannelHot(lastMonth[1], lastMonth[1]).then(res => {
        console.log('街道数量', res)
        let list = []
        res.page.list.forEach(item => {
          list.push({
            name: item.streetName,
            num: item.readRank,
            id: item.streetId
          })
        })
        list = list.sort((a,b) =>Number.parseInt(b.num)-Number.parseInt(a.num))
        const max = list[0].num
        this.setData({
          formalHotList: list,
          maxAmount: max
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
})