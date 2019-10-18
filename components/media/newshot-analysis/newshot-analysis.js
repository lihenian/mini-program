import * as echarts from '../../../ec-canvas/echarts';
import dateTools from '../../../utils/date-tools';

import {
  queryModuleChannelHotForAppletModule3
} from '../../../api/media'

var chart = null;
function _initChartBar (canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    color: ['#3398DB'],
    grid: {   //绘图区调整
      x: 10,  //左留白
      y: 30,   //上留白
      x2: 10,  //右留白
      y2: 70  //下留白
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    xAxis: [
      {
        type: 'category',

        data: [
          '市北萌娃',
          '市北萌娃',
          '市北萌娃',
          '市北萌娃',
          '市北萌娃',
          '市北萌娃',
          '市北萌娃',
          '市北萌娃',
          '市北萌娃',
          '市北萌娃'
        ],
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 70,
          color: '#333333',
          rich: {},
          interval: 0
        },
        axisLine: {
          lineStyle: {
            color: '#E9E9E9'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: false,
        axisLine: { show: false },     //坐标轴
        splitLine: {
          show: true
        }
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 14,
        data: [],
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

  chart.setOption(option);
  return chart;
}

Component({
  // 私有数据，可用于模板渲染
  data: {
    ecbar: {
      onInit: _initChartBar
    },
    lastMonth: dateTools.getLastMonth()[0]
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
      var that = this;
      setTimeout(function () {
        that.queryModuleChannelHotForAppletModule3()
      }, 1000)
    },
    hide: function () {
      // 页面被隐藏
    },
  },
  methods: {
    queryModuleChannelHotForAppletModule3: function () {
      let lastMonth = dateTools.getLastMonth()
      queryModuleChannelHotForAppletModule3(lastMonth[1], lastMonth[1]).then(res => {
        let yAxisOriganData = []
        let seriesOriganData = []
        let pageList = res.page.list
        console.log(pageList)
        pageList.forEach((item, index, arr) => {
          yAxisOriganData.push(item.subjectName)
          seriesOriganData.push(item.commentRank)
        });
        let options = chart.getOption()
        options.xAxis[0].data = yAxisOriganData;
        options.series[0].data = seriesOriganData;

        chart.setOption(options, true);
      }).catch(err => {
        console.log(err)
      })
    }
  }
})