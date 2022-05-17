$(function () {
  var label = {
    normal: {
      show: true,
      lineHeight: 14,
      formatter: '{c}',
      position: 'top',
      textStyle: {
        color: 'auto',
        fontSize: 13
      }

    }
  }

  var tooltip = {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  }

  var grid = {
    top: 10,
    bottom: 10,
    width: "100%",
    height: "90%"
  }

  var xAxis = {
    type: 'category',
    // prettier-ignore
    data: [""],
    axisLine: {
      //y轴
      show: false,
    },
    axisTick: {
      show: false
    }
  }
  var black = "rgba(0, 0, 0, 1)";
  var gray = "rgba(220, 220, 220, 0.5)";
  function airPressureRender() {
    var airPressure = echarts.init($("#airPressure")[0]);

    var airPressureOption = {
      // 提示框
      tooltip: tooltip,
      grid: grid,
      xAxis: xAxis,
      yAxis: [{
        type: 'value',
        min: 50,
        max: 150,
        minInterval: 25,
        splitNumber: 5,
        position: 'left',
        offset: -30,
        axisLabel: {
          formatter: '{value} '
        },
        axisTick: {
          show: true
        },
        axisLine: {
          //y轴
          show: true,
          lineStyle: {
            color: black
          }
        },
        splitLine: {
          //网格线
          show: false,
        },
      }]
      ,
      series: [
        {
          type: 'bar',
          name: '大气压力',
          // 柱状图数值
          data: [verticals.Atm],
          roundCap: true,

          itemStyle: {
            // 柱条的渐变颜色
            normal: {
              borderRadius: [0, 0, 50, 50],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(219,15,15,0.82)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(255,0,26,1)' // 100% 处的颜色
              }], false),
            }
          },
          barCategoryGap: '70%',

          // 为柱条添加背景色
          // 用 showBackground 开启，并且可以通过 backgroundStyle 配置。
          showBackground: true,
          backgroundStyle: {
            color: gray,
            borderRadius: [50, 50, 50, 50],
          },
          label: label
        },

      ]
    };
    airPressure.setOption(airPressureOption);
  }

  function airHumidity() {
    var airHumidity = echarts.init($("#airHumidity")[0]);

    var airHumidityOption = {
      // 提示框
      tooltip: tooltip,
      grid: grid,
      xAxis: xAxis,
      yAxis: [{
        type: 'value',
        min: 0,
        max: 100,
        minInterval: 25,
        splitNumber: 5,
        position: 'left',
        offset: -30,
        axisLabel: {
          formatter: '{value} '
        },
        axisTick: {
          show: true
        },
        axisLine: {
          //y轴
          show: true,
          lineStyle: {
            color: black
          }
        },
        splitLine: {
          //网格线
          show: false,
        },
      }],
      series: [
        {
          type: 'bar',
          name: '大气湿度',
          // 柱状图数值
          data: [verticals.AirRh],
          roundCap: true,

          itemStyle: {
            // 柱条的渐变颜色
            normal: {
              borderRadius: [0, 0, 50, 50],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(34,193,195,1)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(45,253,79,1)' // 100% 处的颜色
              }], false),
            }
          },
          barCategoryGap: '70%',

          // 为柱条添加背景色
          // 用 showBackground 开启，并且可以通过 backgroundStyle 配置。
          showBackground: true,
          backgroundStyle: {
            color: gray,
            borderRadius: [50, 50, 50, 50],
          },
          label: label
        },

      ]
    };
    airHumidity.setOption(airHumidityOption);
  }

  function airTemperature() {
    var airTemperature = echarts.init($("#airTemperature")[0]);

    var airTemperatureOption = {
      // 提示框
      tooltip: tooltip,
      grid: grid,
      xAxis: xAxis,
      yAxis: [{
        type: 'value',
        min: 0,
        max: 60,
        minInterval: 5,
        splitNumber: 5,
        position: 'left',
        offset: -30,
        axisLabel: {
          formatter: '{value} '
        },
        axisTick: {
          show: true
        },
        axisLine: {
          //y轴
          show: true,
          lineStyle: {
            color: black
          }
        },
        splitLine: {
          //网格线
          show: false,
        },
      }],
      series: [
        {
          type: 'bar',
          name: '大气温度',
          // 柱状图数值
          data: [verticals.AirTemp],
          roundCap: true,

          itemStyle: {
            // 柱条的渐变颜色
            normal: {
              borderRadius: [0, 0, 50, 50],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(131,58,180,1)' // 0% 处的颜色
              }, {
                offset: .5,
                color: 'rgba(253,29,29,1)' // 100% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(252,176,69,1)' // 100% 处的颜色
              }], false),
            }
          },
          barCategoryGap: '70%',

          // 为柱条添加背景色
          // 用 showBackground 开启，并且可以通过 backgroundStyle 配置。
          showBackground: true,
          backgroundStyle: {
            color: gray,
            borderRadius: [50, 50, 50, 50],
          },
          label: label
        },

      ]
    };
    airTemperature.setOption(airTemperatureOption);
  }

  function waterTemperature() {
    var waterTemperature = echarts.init($("#waterTemperature")[0]);

    var waterTemperatureOption = {
      // 提示框
      tooltip: tooltip,
      grid: grid,
      xAxis: xAxis,
      yAxis: [{
        type: 'value',
        min: 30,
        max: 150,
        minInterval: 25,
        splitNumber: 5,
        position: 'left',
        offset: -30,
        axisLabel: {
          formatter: '{value} '
        },
        axisTick: {
          show: true
        },
        axisLine: {
          //y轴
          show: true,
          lineStyle: {
            color: black
          }
        },
        splitLine: {
          //网格线
          show: false,
        },
      }],
      series: [
        {
          type: 'bar',
          name: '冷却水温',
          // 柱状图数值
          data: [verticals.Ect],
          roundCap: true,

          itemStyle: {
            // 柱条的渐变颜色
            normal: {
              borderRadius: [0, 0, 50, 50],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(7,174,249,1)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(4,0,255,1)' // 100% 处的颜色
              }], false),
            }
          },
          barCategoryGap: '70%',

          // 为柱条添加背景色
          // 用 showBackground 开启，并且可以通过 backgroundStyle 配置。
          showBackground: true,
          backgroundStyle: {
            color: gray,
            borderRadius: [50, 50, 50, 50],
          },
          label: label
        },

      ]
    };
    waterTemperature.setOption(waterTemperatureOption);
  }

  function oilPressure() {
    var oilPressure = echarts.init($("#oilPressure")[0]);

    var oilPressureOption = {
      // 提示框
      tooltip: tooltip,
      grid: grid,
      xAxis: xAxis,
      yAxis: [{
        type: 'value',
        min: 0,
        max: 300,
        minInterval: 25,
        splitNumber: 5,
        position: 'left',
        offset: -30,
        axisLabel: {
          formatter: '{value} '
        },
        axisTick: {
          show: true
        },
        axisLine: {
          //y轴
          show: true,
          lineStyle: {
            color: black
          }
        },
        splitLine: {
          //网格线
          show: false,
        },
      }],
      series: [
        {
          type: 'bar',
          name: '机油压力',
          // 柱状图数值
          data: [verticals.Eop],
          roundCap: true,

          itemStyle: {
            // 柱条的渐变颜色
            normal: {
              borderRadius: [0, 0, 50, 50],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(249,128,7,1)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(255,192,0,1)' // 100% 处的颜色
              }], false),
            }
          },
          barCategoryGap: '70%',

          // 为柱条添加背景色
          // 用 showBackground 开启，并且可以通过 backgroundStyle 配置。
          showBackground: true,
          backgroundStyle: {
            color: gray,
            borderRadius: [50, 50, 50, 50],
          },
          label: label
        },

      ]
    };
    oilPressure.setOption(oilPressureOption);
  }

  function reanderData(data){
    $("#AtmValue1").html(data.Atm)
    $("#AirRhValue1").html(data.AirRh)
    $("#AirTempValue1").html(data.AirTemp)
    $("#EctValue1").html(data.Ect)
    $("#EopValue1").html(data.Ect)
  }

  var verticals = {};
  $.ajax({
    type: "get",
    url: "../data.json",
    dataType: "json",
    success: function (res) {
      console.log(res);
      $("#inner").html(JSON.stringify(res))
      verticals = res.verticals;
      airPressureRender()
      airHumidity()
      airTemperature()
      waterTemperature()
      oilPressure()
      reanderData(verticals)
    },
    error: function (err) {
      console.log("err", err)
    }
  })


})