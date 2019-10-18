import * as echarts from '../../../ec-canvas/echarts';
import {
  getEventYearDataCopy
} from '../../../api/question'
import dateTools from '../../../utils/date-tools';
const app = getApp();

var chart = null;
function initChartPie (canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      position: function (point, params, dom, rect, size) {
        // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
        // 提示框位置
        var x = 0; // x坐标位置
        var y = 0; // y坐标位置
      
        // 当前鼠标位置
        var pointX = point[0];
        var pointY = point[1];
        // 提示框大小
        var boxWidth = size.contentSize[0];
        x = pointX;
        y = pointY;
        if(params[0].axisValue === '12月' || params[0].axisValue === '11月') {
          x = pointX - 40;
        }
        return [x, y];
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 15,
          color: '#B5B7BF'
        }
      },
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '8月', '10月', '11月', '12月']
    },
    grid: {   //绘图区调整
      x: 60,  //左留白
      x2: 30  //右留白
    },
    yAxis: {
      name: '数量',
      nameTextStyle: {
        align: 'left',
        color: '#B5B7BF'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      type: 'value',
      axisLabel: {
        textStyle: {
          fontSize: 15,
          color: '#B5B7BF'
        }
      }
    },
    color: ['#166CFF'],
    series: [{
      data: [820, 753, 890, 634, 723, 289, 420, 332, 568, 893, 656, 967],
      type: 'line',
      smooth: true
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
    },
    year: dateTools.currentYear()
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
      var that = this;
      setTimeout(function () {
        that.getEventYearDataCopy()
      }, 500)
    },
    hide: function () {
      // 页面被隐藏
    },
    resize: function (size) {
      // 页面尺寸变化
    }
  },
  methods: {
    getEventYearDataCopy: function () {
      getEventYearDataCopy().then(res => {
        var options = chart.getOption();
        options.series[0].data = res.data.series[0].data;
        chart.setOption(options, true);
      }).catch(err => {
        console.log(err)
      })
    }
  }
})