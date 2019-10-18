import * as echarts from '../../../ec-canvas/echarts';
import dateTools from '../../../utils/date-tools';

import {
  queryModuleChannelHotForApplet
} from '../../../api/media'

var chart = null;
function _initChartBar(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  let option = {
    grid: { //绘图区调整
      x: 60, //左留白
      y: 0, //上留白
      x2: 70, //右留白
      y2: 0 //下留白
    },
    xAxis: [{
      show: false,
      type: 'value',
      boundaryGap: [0, 0],
      position: 'top',
      max: 630230
    }],
    yAxis: [{
      type: 'category',
      data: [],
      axisLine: {
        show: false
      }, //坐标轴
      axisTick: [{ //坐标轴小标记
        show: false
      }],
      // offset: 40,
      axisLabel: {
        textStyle: {  
          color: '#666666'
        },
        interval: 0,
        fontSize: 12,
        rich: {}
        // formatter:function(val){
        //   return val.split("").join("\n");
        // }
      }
    }],
    series: [{
      name: '',
      type: 'bar',
      tooltip: {
        show: false
      },
      barWidth: 14, //柱宽度
      data: [],
      label: {
        show: true, //显示文本
        position: ['106%', '0'], //数据值位置
        textStyle: {
          color: '#5B85FB'
        }
      },
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0],
          //每根柱子颜色设置
          color: function(params) {
            let colorList = [
              '#D4ED7E',
              '#C5DD71',
              '#B0CA54',
              '#F9E64C',
              '#F5BA60',
              new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF9416'
                  },
                  {
                    offset: 1,
                    color: '#FFA36F'
                  }
                ]
              ),
              new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF7316'
                  },
                  {
                    offset: 1,
                    color: '#FF9152'
                  }
                ]
              ),
              new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF3316'
                  },
                  {
                    offset: 1,
                    color: '#FF7628'
                  }
                ]
              ),
              new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#F40C0C'
                  },
                  {
                    offset: 1,
                    color: '#FF4E4E'
                  }
                ]
              )
            ];
            return colorList[params.dataIndex];
          }
        }
      }
    }]
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
    show: function() {
      // 页面被展示
      var that = this;
      setTimeout(function() {
        that.queryModuleChannelHotForApplet()
      }, 1000)
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  methods: {
    queryModuleChannelHotForApplet: function() {
      queryModuleChannelHotForApplet(dateTools.getLastMonth()[1], dateTools.getLastMonth()[1]).then(res => {
        let pageList = res.page.list
        let yAxisOriganData = []
        let seriesOriganData = []
        console.log(pageList)
        pageList.forEach((item, index, arr) => {
          yAxisOriganData.push(item.channelName)
          seriesOriganData.push(item.readRank)
        });
        let max = parseInt(yAxisOriganData[0]);
        for (var i = 1; i < yAxisOriganData.length; i++){
          if (parseInt(yAxisOriganData[i]) > max){
            max = parseInt(yAxisOriganData[i]);
          }
        }
        let options = chart.getOption()
        options.xAxis[0].max = max;

        // 排序
        for(var i = 0; i< seriesOriganData.length - 1; i++) {
          for(var j = 0;j< seriesOriganData.length - i -1;j++) {
              var jNum = parseInt(seriesOriganData[j]);
              var j1Num = parseInt(seriesOriganData[j+1]);
              if(jNum > j1Num) {
                  var temp = seriesOriganData[j];
                  seriesOriganData[j] = seriesOriganData[j+1];
                  seriesOriganData[j+1] = temp;
                  
                  var temp1 = yAxisOriganData[j];
                  yAxisOriganData[j] = yAxisOriganData[j+1];
                  yAxisOriganData[j+1] = temp1;
              }
          }
        }
        options.yAxis[0].data = yAxisOriganData;
        options.series[0].data = seriesOriganData;

        chart.setOption(options, true);
      }).catch(err => {
        console.log(err)
      })
    }
  }
})