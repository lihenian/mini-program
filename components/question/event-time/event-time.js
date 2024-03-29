import * as echarts from '../../../ec-canvas/echarts';
import {
  reportAnalysis
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
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        label: {
          show: true,
          backgroundColor: '#B5B7BF',
          formatter: function(params) {
            return `${params.value}点`
          }
        },
        lineStyle: {
          color: 'rgba(0,0,0,0.2)',
          width: 1,
          type: 'solid'
        }
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
      icon: 'circle',
      // itemGap: 18,
      textStyle: {
        fontSize: 14
      },
      data: ["专项行动", "公安交通管理", "创卫复审类", "城市管理", "安全监管", "应急避难场所", "文化执法", "消防安全", "民政", "环境保护", "社会治安综治", "其它"]
    },
    color: ['#958BFF', '#A6EB36', '#F5BA60', '#5B85FB', '#F9E64C', '#E86D50', '#958BFF', '#E86D50', '#FF9C00', '#B0EF49', '#F5BA60', "#F29DC4"],
    singleAxis: {
      splitNumber: 24,
      top: 0,
      bottom: 130,
      interval: 4,
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#B5B7BF'
      },
      axisLine: {
        lineStyle: {
          color: '#E9E9E9'
        }
      },
      axisPointer: {
          animation: true,
          label: {
              show: true
          }
      },
      splitLine: {
        show: false
      }
    },
    series: [{
      type: 'themeRiver',
      label: {
        normal: {
          show: false
        }
      },
      data: [
        ["00", 0, "专项行动"],
        ["01", 0, "专项行动"],
        ["02", 0, "专项行动"],
        ["03", 0, "专项行动"],
        ["04", 0, "专项行动"],
        ["05", 0, "专项行动"],
        ["06", 0, "专项行动"],
        ["07", 0, "专项行动"],
        ["08", 0, "专项行动"],
        ["09", 0, "专项行动"],
        ["10", 0, "专项行动"],
        ["11", 0, "专项行动"],
        ["12", 0, "专项行动"],
        ["13", 0, "专项行动"],
        ["14", 0, "专项行动"],
        ["15", 0, "专项行动"],
        ["16", 0, "专项行动"],
        ["17", 0, "专项行动"],
        ["18", 0, "专项行动"],
        ["19", 0, "专项行动"],
        ["20", 0, "专项行动"],
        ["21", 0, "专项行动"],
        ["22", 0, "专项行动"],
        ["23", 0, "专项行动"],
        ["00", 0, "公安交通管理"],
        ["01", 0, "公安交通管理"],
        ["02", 0, "公安交通管理"],
        ["03", 0, "公安交通管理"],
        ["04", 0, "公安交通管理"],
        ["05", 0, "公安交通管理"],
        ["06", 0, "公安交通管理"],
        ["07", 0, "公安交通管理"],
        ["08", 1, "公安交通管理"],
        ["09", 0, "公安交通管理"],
        ["10", 0, "公安交通管理"],
        ["11", 0, "公安交通管理"],
        ["12", 0, "公安交通管理"],
        ["13", 1, "公安交通管理"],
        ["14", 0, "公安交通管理"],
        ["15", 0, "公安交通管理"],
        ["16", 1, "公安交通管理"],
        ["17", 0, "公安交通管理"],
        ["18", 0, "公安交通管理"],
        ["19", 0, "公安交通管理"],
        ["20", 0, "公安交通管理"],
        ["21", 0, "公安交通管理"],
        ["22", 0, "公安交通管理"],
        ["23", 0, "公安交通管理"],
        ["00", 0, "创卫复审类"],
        ["01", 0, "创卫复审类"],
        ["02", 0, "创卫复审类"],
        ["03", 0, "创卫复审类"],
        ["04", 0, "创卫复审类"],
        ["05", 0, "创卫复审类"],
        ["06", 1, "创卫复审类"],
        ["07", 2, "创卫复审类"],
        ["08", 4, "创卫复审类"],
        ["09", 2, "创卫复审类"],
        ["10", 2, "创卫复审类"],
        ["11", 7, "创卫复审类"],
        ["12", 5, "创卫复审类"],
        ["13", 3, "创卫复审类"],
        ["14", 1, "创卫复审类"],
        ["15", 5, "创卫复审类"],
        ["16", 6, "创卫复审类"],
        ["17", 0, "创卫复审类"],
        ["18", 0, "创卫复审类"],
        ["19", 0, "创卫复审类"],
        ["20", 0, "创卫复审类"],
        ["21", 0, "创卫复审类"],
        ["22", 0, "创卫复审类"],
        ["23", 0, "创卫复审类"],
        ["00", 0, "城市管理"],
        ["01", 0, "城市管理"],
        ["02", 0, "城市管理"],
        ["03", 0, "城市管理"],
        ["04", 0, "城市管理"],
        ["05", 0, "城市管理"],
        ["06", 0, "城市管理"],
        ["07", 1, "城市管理"],
        ["08", 4, "城市管理"],
        ["09", 1, "城市管理"],
        ["10", 0, "城市管理"],
        ["11", 2, "城市管理"],
        ["12", 5, "城市管理"],
        ["13", 2, "城市管理"],
        ["14", 0, "城市管理"],
        ["15", 10, "城市管理"],
        ["16", 2, "城市管理"],
        ["17", 0, "城市管理"],
        ["18", 0, "城市管理"],
        ["19", 0, "城市管理"],
        ["20", 0, "城市管理"],
        ["21", 0, "城市管理"],
        ["22", 0, "城市管理"],
        ["23", 0, "城市管理"],
        ["00", 0, "安全监管"],
        ["01", 0, "安全监管"],
        ["02", 0, "安全监管"],
        ["03", 0, "安全监管"],
        ["04", 0, "安全监管"],
        ["05", 0, "安全监管"],
        ["06", 0, "安全监管"],
        ["07", 0, "安全监管"],
        ["08", 0, "安全监管"],
        ["09", 0, "安全监管"],
        ["10", 0, "安全监管"],
        ["11", 0, "安全监管"],
        ["12", 0, "安全监管"],
        ["13", 0, "安全监管"],
        ["14", 0, "安全监管"],
        ["15", 0, "安全监管"],
        ["16", 0, "安全监管"],
        ["17", 0, "安全监管"],
        ["18", 0, "安全监管"],
        ["19", 0, "安全监管"],
        ["20", 0, "安全监管"],
        ["21", 0, "安全监管"],
        ["22", 0, "安全监管"],
        ["23", 0, "安全监管"],
        ["00", 0, "应急避难场所"],
        ["01", 0, "应急避难场所"],
        ["02", 0, "应急避难场所"],
        ["03", 0, "应急避难场所"],
        ["04", 0, "应急避难场所"],
        ["05", 0, "应急避难场所"],
        ["06", 0, "应急避难场所"],
        ["07", 0, "应急避难场所"],
        ["08", 0, "应急避难场所"],
        ["09", 0, "应急避难场所"],
        ["10", 0, "应急避难场所"],
        ["11", 0, "应急避难场所"],
        ["12", 0, "应急避难场所"],
        ["13", 0, "应急避难场所"],
        ["14", 0, "应急避难场所"],
        ["15", 0, "应急避难场所"],
        ["16", 0, "应急避难场所"],
        ["17", 0, "应急避难场所"],
        ["18", 0, "应急避难场所"],
        ["19", 0, "应急避难场所"],
        ["20", 0, "应急避难场所"],
        ["21", 0, "应急避难场所"],
        ["22", 0, "应急避难场所"],
        ["23", 0, "应急避难场所"],
        ["00", 0, "文化执法"],
        ["01", 0, "文化执法"],
        ["02", 0, "文化执法"],
        ["03", 0, "文化执法"],
        ["04", 0, "文化执法"],
        ["05", 0, "文化执法"],
        ["06", 0, "文化执法"],
        ["07", 0, "文化执法"],
        ["08", 0, "文化执法"],
        ["09", 0, "文化执法"],
        ["10", 0, "文化执法"],
        ["11", 0, "文化执法"],
        ["12", 0, "文化执法"],
        ["13", 0, "文化执法"],
        ["14", 0, "文化执法"],
        ["15", 0, "文化执法"],
        ["16", 0, "文化执法"],
        ["17", 0, "文化执法"],
        ["18", 0, "文化执法"],
        ["19", 0, "文化执法"],
        ["20", 0, "文化执法"],
        ["21", 0, "文化执法"],
        ["22", 0, "文化执法"],
        ["23", 0, "文化执法"],
        ["00", 0, "消防安全"],
        ["01", 0, "消防安全"],
        ["02", 0, "消防安全"],
        ["03", 0, "消防安全"],
        ["04", 0, "消防安全"],
        ["05", 0, "消防安全"],
        ["06", 0, "消防安全"],
        ["07", 0, "消防安全"],
        ["08", 0, "消防安全"],
        ["09", 0, "消防安全"],
        ["10", 0, "消防安全"],
        ["11", 0, "消防安全"],
        ["12", 0, "消防安全"],
        ["13", 0, "消防安全"],
        ["14", 0, "消防安全"],
        ["15", 0, "消防安全"],
        ["16", 0, "消防安全"],
        ["17", 0, "消防安全"],
        ["18", 0, "消防安全"],
        ["19", 0, "消防安全"],
        ["20", 0, "消防安全"],
        ["21", 0, "消防安全"],
        ["22", 0, "消防安全"],
        ["23", 0, "消防安全"],
        ["00", 0, "民政"],
        ["01", 0, "民政"],
        ["02", 0, "民政"],
        ["03", 0, "民政"],
        ["04", 0, "民政"],
        ["05", 0, "民政"],
        ["06", 0, "民政"],
        ["07", 0, "民政"],
        ["08", 0, "民政"],
        ["09", 0, "民政"],
        ["10", 0, "民政"],
        ["11", 0, "民政"],
        ["12", 0, "民政"],
        ["13", 0, "民政"],
        ["14", 0, "民政"],
        ["15", 0, "民政"],
        ["16", 0, "民政"],
        ["17", 0, "民政"],
        ["18", 0, "民政"],
        ["19", 0, "民政"],
        ["20", 0, "民政"],
        ["21", 0, "民政"],
        ["22", 0, "民政"],
        ["23", 0, "民政"],
        ["00", 0, "环境保护"],
        ["01", 0, "环境保护"],
        ["02", 0, "环境保护"],
        ["03", 0, "环境保护"],
        ["04", 0, "环境保护"],
        ["05", 0, "环境保护"],
        ["06", 0, "环境保护"],
        ["07", 0, "环境保护"],
        ["08", 0, "环境保护"],
        ["09", 0, "环境保护"],
        ["10", 0, "环境保护"],
        ["11", 0, "环境保护"],
        ["12", 0, "环境保护"],
        ["13", 0, "环境保护"],
        ["14", 0, "环境保护"],
        ["15", 0, "环境保护"],
        ["16", 0, "环境保护"],
        ["17", 0, "环境保护"],
        ["18", 0, "环境保护"],
        ["19", 0, "环境保护"],
        ["20", 0, "环境保护"],
        ["21", 0, "环境保护"],
        ["22", 0, "环境保护"],
        ["23", 0, "环境保护"],
        ["00", 0, "社会治安综治"],
        ["01", 0, "社会治安综治"],
        ["02", 0, "社会治安综治"],
        ["03", 0, "社会治安综治"],
        ["04", 0, "社会治安综治"],
        ["05", 0, "社会治安综治"],
        ["06", 0, "社会治安综治"],
        ["07", 0, "社会治安综治"],
        ["08", 0, "社会治安综治"],
        ["09", 0, "社会治安综治"],
        ["10", 0, "社会治安综治"],
        ["11", 0, "社会治安综治"],
        ["12", 0, "社会治安综治"],
        ["13", 0, "社会治安综治"],
        ["14", 0, "社会治安综治"],
        ["15", 0, "社会治安综治"],
        ["16", 0, "社会治安综治"],
        ["17", 0, "社会治安综治"],
        ["18", 0, "社会治安综治"],
        ["19", 0, "社会治安综治"],
        ["20", 0, "社会治安综治"],
        ["21", 0, "社会治安综治"],
        ["22", 0, "社会治安综治"],
        ["23", 0, "社会治安综治"],
        ["00", 0, "其它"],
        ["01", 0, "其它"],
        ["02", 0, "其它"],
        ["03", 0, "其它"],
        ["04", 0, "其它"],
        ["05", 0, "其它"],
        ["06", 0, "其它"],
        ["07", 0, "其它"],
        ["08", 0, "其它"],
        ["09", 0, "其它"],
        ["10", 0, "其它"],
        ["11", 2, "其它"],
        ["12", 2, "其它"],
        ["13", 2, "其它"],
        ["14", 1, "其它"],
        ["15", 0, "其它"],
        ["16", 1, "其它"],
        ["17", 0, "其它"],
        ["18", 0, "其它"],
        ["19", 0, "其它"],
        ["20", 0, "其它"],
        ["21", 0, "其它"],
        ["22", 0, "其它"],
        ["23", 0, "其它"]
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}

Component({
  // 私有数据，可用于模板渲染
  data: {
    ecpie: {
      onInit: initChartPie
    }
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      var that = this;
      setTimeout(function() {
        that.reportAnalysis()
      }, 500)
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  methods: {
    reportAnalysis: function() {
      reportAnalysis().then(res => {
        var options = chart.getOption();
        options.legend.data = res.categoryName;
        options.series[0].data = res.infoList;
        chart.setOption(options, true);
      }).catch(err => {
        console.log(err)
      })
    }
  }
})