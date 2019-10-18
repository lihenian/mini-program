import * as echarts from '../../ec-canvas/echarts';
import { statistics, ageAndSex, professionAndPercent, monthActivity, getNewlyRegUserYearData } from '../../api/user'
import dateTools from '../../utils/date-tools';
const app = getApp();

// 饼图setOption
function pieSetOption (chart, seriesData = [], legendData = []) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      right: '8%',
      itemGap: 20,
      data: legendData,
      textStyle: {
        color: 'rgba(102,102,102,1)'
      }
    },
    color: ['#5B85FB', '#F9E64C', '#F5BA60', '#E86D50', '#B0EF49'],
    series: [
      {
        type: 'pie',
        radius: ['45%', '75%'],
        center: ['35%', '50%'],
        data: seriesData,
        label: {
          normal: {
            formatter: '{v|{d}%}',
            rich: {}
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: '20',
            },
            rich: {}
          },
        },
      }
    ]
  };
  chart.setOption(option)
}
 
//  柱状图setOption
function barSetOption (chart, seriesData = [], legendData = []) {
  var option = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {   //绘图区调整
      x: 60,  //左留白
      y: 30,   //上留白
      x2: 10,  //右留白
      y2: 70  //下留白
    },
    xAxis: [
      {
        type: 'category',
        data: legendData,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#B5B7BF'
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 14,
            color: '#B5B7BF'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人数',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#B5B7BF'
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 14,
            color: '#B5B7BF'
          }
        }
      }
    ],
    series: [
      {
        name: '人数',
        type: 'bar',
        barWidth: '14',
        data: seriesData,
        itemStyle: {
          normal: {
            barBorderRadius: [50, 50, 0, 0],
            barWidth: 2,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#2970FF' },
                { offset: 1, color: '#81A2FF' }
              ]
            )
          }
        }
      }
    ]
  };
  chart.setOption(option)
}

// 折线图setOption
function lineSetOption (params = {}) {
  const { chart, lengendData, seriesLeftData, seriesRightData } = params
  var option = {
    xAxis: {
      type: 'category',
      boundaryGap : false,
      data: lengendData,
      axisLine: {
        lineStyle: {
          color: '#B5B7BF'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 15,
          color: '#B5B7BF'
        }
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {   //绘图区调整
      x: 60,  //左留白
      y: 30,   //上留白
      x2: 45,  //右留白
      y2: 70  //下留白
    },
    yAxis: [
      {
        name: '用户数',
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#B5B7BF'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 15,
            color: '#B5B7BF'
          }
        }
      },
      {
        name: '活跃度',
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#B5B7BF'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} %',
          textStyle: {
            fontSize: 15,
            color: '#B5B7BF'
          }
        }
      }
    ],
    color: ['#3D7CFF', '#F5BA60'],
    series: [
      {
        name: '月活数',
        data: seriesLeftData,
        type: 'line',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#3D7CFF' },
              { offset: 1, color: '#FFFFFF' }
            ]
          )
        },
        markPoint: {
          symbol: 'none'
        }
      },
      {
        name: '月活率',
        data: seriesRightData,
        type: 'line',
        yAxisIndex: 1,
        animation: false,
        lineStyle: {
          width: 1
        }
      }
    ]
  };
 
  chart.setOption(option);
}
 
Page({
  data: {
    ecpie: {
      lazyLoad: true
    },
    ecbar: {
      lazyLoad: true
    },
    ecline: {
      lazyLoad: true
    },
    // 用户统计
    statistics: {
      downloadNum: 0, // 下载用户数
      registerNum: 0, // 注册用户数
      activation: 0 // 平均月活
    },
    // 性别比例和年龄分布
    ageAndSex: {
      male: 0,
      female: 0,
      underTwenty: 0,
      underThirty: 0,
      underForty: 0,
      underFifty: 0,
      underSixty: 0,
      others: 0
    },
    userNum: 0,
    aveLive: 0,
    year: dateTools.currentYear()
  },
  onShow () {
    var value = wx.getStorageSync('hasLogin')
    if (!value) {
      wx.redirectTo({
        url: '/pages/login/index'
      })
    }
    this.statistics()
    this.ageAndSex()
    this.professionAndPercent()
    this.getNewlyRegUserYearData()
    this.monthActivity()
  },
  // 用户统计
  statistics () {
    statistics().then(res => {
      console.log('用户统计', res)
      this.setData({
        statistics: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  },
  // 年龄分布和性别比例
  ageAndSex () {
    ageAndSex().then(res => {
      console.log('年龄分布', res)
      this.setData({
        ageAndSex: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  },
 
  // 饼图获取数据
  professionAndPercent () {
    professionAndPercent().then(res => {
      console.log('饼图', res)
      this.pieInit(res)
      this.setData({
        professionAndPercent: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  },
  // 饼图延时加载
  pieInit (res) {
    this.pieComponent = this.selectComponent('#mychart-dom-pie')
    this.pieComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width,
        height
      })
      const seriesData = [];
      const legendData = [];
      res.data.forEach(item => {
        seriesData.push({
          name: item.profession,
          value: item.percent
        })
        legendData.push(item.profession)
      })
      pieSetOption(chart, seriesData, legendData)
      return chart
    });
  },
 
  // 柱状图数据加载
  getNewlyRegUserYearData () {
    getNewlyRegUserYearData().then(res => {
      console.log('柱状图', res)
      this.setData({
        userNum: res.data.totalNum
      })
      this.barInit(res)
    }).catch(err => {
      console.log(err)
    })
  },
  //柱状图延时加载
  barInit (res) {
    this.barComponent = this.selectComponent('#mychart-dom-bar')
    this.barComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width,
        height
      })
      const a = 12 - dateTools.currentMonthNum()
      const seriesData = res.data.series[0].data.splice(0, 12 - a)
      const lengendData = res.data.xAxis[0].data.splice(0, 12 - a)
      barSetOption(chart, seriesData, lengendData)
      return chart
    })
  },

  // 折线图数据加载
  monthActivity () {
    monthActivity().then(res => {
      console.log('折线图', res)
      this.lineInit(res)
      this.setData({
        aveLive: res.data.averageRateStr + '%'
      })
    }).catch(err => {
      console.log(err)
    })
  },
  // 折线图延时加载
  lineInit (res) {
    this.lineComponent = this.selectComponent('#mychart-dom-line')
    this.lineComponent.init((canvas,width, height) => {
      const chart = echarts.init(canvas, null, {
        width,
        height
      })
      lineSetOption({
        lengendData: res.data.xAxis[0].data,
        seriesLeftData: res.data.series[0].data,
        seriesRightData: res.data.series[1].data,
        chart,
      })
      return chart
    })
  }

});