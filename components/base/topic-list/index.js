Component({
  data: {
    list: []
  },
  properties: {
    dataList: {
      type: Array,
      value: []
    },
    itemName: {
      type: String,
      value: 'name'
    },
    itemNum: {
      type: String,
      value: 'num'
    },
    title: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    attached () {

    },
    detached () {

    }
  },
  pageLifetimes: {
    show () {

    }
  },
  observers: {
    dataList (dataList) {
      if (dataList.length > 0) {
        const list = []
        dataList.forEach((item, index) => {
          list.push({
            name: item[this.data.itemName],
            num: item[this.data.itemNum],
            id: index + 1
          })
        })
        this.setData({
          list
        })
      }
    }
  }
})