import { interactStatistics } from '../../../api/media'

Component({
  // 私有数据，可用于模板渲染
  data: {
    interactStatisticsData: {
      commentNum: '',
      shareNum: '',
      approveNum: ''
    }
  },
  lifetimes: {
    attached: function () {

    },
    detached: function () {

    }
  },
  pageLifetimes: {
    show () {
      this.interactStatistics()
    },
  },
  methods: {
    interactStatistics () {
      interactStatistics().then(res => {
        this.setData({
          interactStatisticsData: res.data
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
})

