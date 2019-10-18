import * as echarts from '../../../ec-canvas/echarts';
import {
  categoryAndPercent,
  categoryAndPercentByID
} from '../../../api/question'

const app = getApp();

var chart = null;
function initChartPie(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c} ({d}%)",
      padding: 5,
      textStyle: {
        fontSize: '24'
      }
    },
    grid: {   //绘图区调整
      x: 10,  //左留白
      y: 30,   //上留白
      x2: 10,  //右留白
      y2: 100  //下留白
    },
    legend: {
      type: 'plain',
      bottom: '0',
      textStyle: {
        fontSize: 12,
        color: '#666'
      },
      icon: 'circle',
      itemGap: 15,
      data: []
    },
    color: ['#5B85FB', '#F9E64C', '#F5BA60', '#E86D50', '#B0EF49'],
    series: [
      {
        type: 'pie',
        radius: [0, '60%'],
        center: ['50%', '40%'],
        label: {
          position: 'center',
          normal: {
            //formatter: '{t|{b}}\n{v|{d}%}',
            formatter: '{v|{d}%}',
            rich: {
              t: {
                align: 'center',
                fontSize: 14,
                padding: 3
              },
              v: {
                align: 'center',
                fontSize: 14,
                //fontWeight: 'bold',
                height: 15,
                padding: 3
              }
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            },
            // formatter: '{t|{b}}\n{v|{d}%}',
            formatter: '{v|{d}%}',
            rich: {
              t: {
                align: 'center',
                padding: 3,
                fontSize: '20',
                fontWeight: 'bold'
              },
              v: {
                align: 'center',
                fontSize: 14,
                //fontWeight: 'bold',
                height: 15,
                padding: 3
              }
            }
          },
          align: 'center'
        },
        data: [],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
};
chart.setOption(option);
return chart;
}

var charts = null
function initChartCricle(canvas, width, height) {
  charts = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      trigger: 'item',
      // formatter: "{b}: {c} ({d}%)",
      padding: 5,
      textStyle: {
        fontSize: '24'
      }
    },
    color: ['#689DFF', '#C365FF', '#00D1FF'],
    grid: {   //绘图区调整
      x: 10,  //左留白
      y: 30,   //上留白
      x2: 10,  //右留白
      y2: 100  //下留白
    },
    legend: {
      type: 'plain',
      bottom: '0',
      icon: 'circle',
      itemGap: 15,
      textStyle: {
        fontSize: 12,
        color: '#666'
      },
      data: []
    },
    series: [
      {
        type: 'pie',
        radius: ['35%', '50%'],
        center: ['50%', '45%'],
        label: {
          position: 'center',
          normal: {
            formatter: '{v|{d}%}',
            rich: {
              t: {
                fontSize: 14
              },
              v: {
                align: 'center',
                fontSize: 14
              }
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            },
            // formatter: '{t|{b}}\n{v|{d}%}',
            formatter: '{v|{d}%}',
            rich: {
              t: {
                align: 'center'
              },
              v: {
                align: 'center',
                fontSize: 14
              }
            }
          },
          align: 'center'
        },
        data: [],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  charts.setOption(option);
  return charts;
}

Component({
  // 私有数据，可用于模板渲染
  data: {
    ecpie: {
      onInit: initChartPie
    },
    eccricle: {
      onInit: initChartCricle
    }
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
      var that = this;
      setTimeout(function () {
        that.categoryAndPercent()
      }, 1000)
    },
    hide: function () {
      // 页面被隐藏
    },
    resize: function (size) {
      // 页面尺寸变化
    }
  },
  methods: {
    categoryAndPercent: function () {
      categoryAndPercent().then(res => {
        var options = chart.getOption();
        options.series[0].data = res.data.events;
        options.legend[0].data = res.data.events;
        chart.setOption(options, true);
        chart.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: 0});//设置默认选中高亮部分
        var that = this;
        that.categoryAndPercentByID(res.data.events[0].name)
        chart.on('click', function (params) {
          that.categoryAndPercentByID(params.name)
        })
      }).catch(err => {
        console.log(err)
      })
    },
    categoryAndPercentByID: function (typeId) {
      categoryAndPercentByID(typeId).then(res => {
        console.log('res.data.events', res.data.events)
        var options = charts.getOption();
        let temp = res.data.events
        for(var i = 0; i < temp.length; i++){
          if (temp[i].value == 0){
            temp.splice(i,1)
          } 
        }
        console.log('temp', temp)
        options.series[0].data = temp; //res.data.events;
        options.legend[0].data = temp; //res.data.events;
        charts.setOption(options, true);
      }).catch(err => {
        console.log(err)
      })
    }
  }
})