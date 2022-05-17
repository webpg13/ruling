$(function () {
  var redYelloGreen = [
    [
      0.5, '#009700' // "绿色"
    ],
    [
      0.85, '#fbc723' // "黄色"
    ],
    [
      1, '#e8110f' // "红色"
    ]
  ];
  var markPoint = {
    // 仪表盘指针圆
    animation: false,
    silent: true,
    data: [{
      x: '50%',
      y: '50%',
      symbol: 'circle',
      symbolSize: 20,
      itemStyle: {
        color: 'auto',
      },
    }, {
      x: '50%',
      y: '50%',
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#fff'
      },
    }],
  };
  var pointer = {
    // 仪表盘指针
    // icon:'none',
    width: 8,
    length: "55%", // 设置指针长度
    itemStyle: {
      color: 'auto'
    },
  };
  var textStyle = {
    color: '#281713',
    fontSize: 14,
    fontWeight: 600,
  };
  var axisLabel = {
    color: 'auto',
    distance: 16, // 设置刻度数值离内圆的距离
    fontSize: 12
  }
  var axisTick = {
    distance: 0, // 设置刻度离内圆的距离
    length: 18, // 设置刻度长度
    lineStyle: {
      color: 'auto',
      width: 1 // 设置刻度宽度
    }
  }
  var splitLine = {
    distance: 0, // 设置刻度离内圆的距离
    length: 25, // 设置刻度长度
    lineStyle: {
      color: 'auto',
      width: 2 // 设置刻度宽度
    }
  }
  var axisLine = {
    lineStyle: {
      width: 12,
      // 控制三个色的范围
      color: redYelloGreen,
    }
  }
  // 转数
  function revolutionRender() {
    // 基于准备好的dom，初始化echarts实例
    var revolution = echarts.init($('#revolution')[0]);

    // 指定图表的配置项和数据
    var revolutionOption = {
      backgroundColor: '#ffffff',
      // 标题
      title: [{
        text: '转速(rpm)',
        left: 'center',
        top: '80%',
        textStyle: textStyle
      }],
      series: [
        {
          type: 'gauge',
          // splitNumber: 6, // 刻度的分割段数
          min: 0, // 刻度的最小值
          max: 6000,  // 刻度的最大值
          markPoint: markPoint,
          // 指针
          pointer: pointer,
          // 小刻度
          axisTick: axisTick,
          // 大刻度
          splitLine: splitLine,
          // 设置刻度数值
          axisLabel: axisLabel,
          // 最外层的圆圈
          axisLine: axisLine,
          // 指针值
          data: [{
            value: gauges.Rpm
          }],
          radius: '100%', // 控制仪表盘的大小
          detail: {
            show: false
          },
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    revolution.setOption(revolutionOption);
  }
  // 扭矩
  function torqueRender() {
    // 基于准备好的dom，初始化echarts实例
    var torque = echarts.init($('#torque')[0]);

    // 指定图表的配置项和数据
    var torqueOption = {
      backgroundColor: '#ffffff',
      // 标题
      title: [{
        text: '扭矩(N·m)',
        left: 'center',
        top: '80%',
        textStyle: {
          color: '#281713',
          fontSize: 13,
          fontWeight: 600,
        }
      }],
      series: [
        {
          type: 'gauge',
          splitNumber: 7, // 刻度的分割段数
          min: 0, // 刻度的最小值
          max: 700,  // 刻度的最大值
          markPoint: markPoint,
          // 指针
          pointer: pointer,
          // 小刻度
          axisTick: axisTick,
          // 大刻度
          splitLine: splitLine,
          // 设置刻度数值
          axisLabel: axisLabel,
          // 最外层的圆圈
          axisLine: axisLine,
          // 指针值
          data: [{
            value: gauges.Torque
          }],
          radius: '100%', // 控制仪表盘的大小
          detail: {
            show: false
          },
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    torque.setOption(torqueOption);
  }
  // 功率
  function powerRender() {
    // 基于准备好的dom，初始化echarts实例
    var power = echarts.init($('#power')[0]);

    // 指定图表的配置项和数据
    var powerOption = {
      backgroundColor: '#ffffff',
      // 标题
      title: [{
        text: '功率(kW)',
        left: 'center',
        top: '80%',
        textStyle: textStyle
      }],
      series: [
        {
          type: 'gauge',
          splitNumber: 7, // 刻度的分割段数
          min: 0, // 刻度的最小值
          max: 140,  // 刻度的最大值
          markPoint: markPoint,
          // 指针
          pointer: pointer,
          // 小刻度
          axisTick: axisTick,
          // 大刻度
          splitLine: splitLine,
          // 设置刻度数值
          axisLabel: axisLabel,
          // 最外层的圆圈
          axisLine: axisLine,
          // 指针值
          data: [{
            value: gauges.Power
          }],
          radius: '100%', // 控制仪表盘的大小
          detail: {
            show: false
          },
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    power.setOption(powerOption);
  }
  // 油耗率
  function fuelConsumptionRateRender() {
    // 基于准备好的dom，初始化echarts实例
    var fuelConsumptionRate = echarts.init($('#fuelConsumptionRate')[0]);

    // 指定图表的配置项和数据
    var fuelConsumptionRateOption = {
      backgroundColor: '#ffffff',
      // 标题
      title: [{
        text: '油耗率(g/kWh)',
        left: 'center',
        top: '80%',
        textStyle: textStyle
      }],
      series: [
        {
          type: 'gauge',
          splitNumber: 6, // 刻度的分割段数
          min: 0, // 刻度的最小值
          max: 600,  // 刻度的最大值
          markPoint: markPoint,
          // 指针
          pointer: pointer,
          // 小刻度
          axisTick: axisTick,
          // 大刻度
          splitLine: splitLine,
          // 设置刻度数值
          axisLabel: axisLabel,
          // 最外层的圆圈
          axisLine: axisLine,
          // 指针值
          data: [{
            value: gauges.Bsfc
          }],
          radius: '100%', // 控制仪表盘的大小
          detail: {
            show: false
          },
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    fuelConsumptionRate.setOption(fuelConsumptionRateOption);
  }
  // 油耗量
  function oilConsumptionRender() {
    // 基于准备好的dom，初始化echarts实例
    var oilConsumption = echarts.init($('#oilConsumption')[0]);

    // 指定图表的配置项和数据
    var oilConsumptionOption = {
      backgroundColor: '#ffffff',
      // 标题
      title: [{
        text: '油耗量(kg/h)',
        left: 'center',
        top: '80%',
        textStyle: textStyle
      }],
      series: [
        {
          type: 'gauge',
          splitNumber: 6, // 刻度的分割段数
          min: 0, // 刻度的最小值
          max: 60,  // 刻度的最大值
          markPoint: markPoint,
          // 指针
          pointer: pointer,
          // 小刻度
          axisTick: axisTick,
          // 大刻度
          splitLine: splitLine,
          // 设置刻度数值
          axisLabel: axisLabel,
          // 最外层的圆圈
          axisLine: axisLine,
          // 指针值
          data: [{
            value: gauges.B
          }],
          radius: '100%', // 控制仪表盘的大小
          detail: {
            show: false
          },
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    oilConsumption.setOption(oilConsumptionOption);
  }

  function reanderData(data){
    $("#RpmValue1").html(data.Rpm)
    $("#TorqueValue1").html(data.Torque)
    $("#PowerValue1").html(data.Power)
    $("#BsfcValue1").html(data.Bsfc)
    $("#BValue1").html(data.B)
  }

  var gauges = {};
  $.ajax({
    type: "get",
    url: "../data.json",
    dataType: "json",
    success: function(res){
      console.log(res);
      $("#inner").html(JSON.stringify(res))
      gauges = res.gauges;
      revolutionRender();
      torqueRender();
      powerRender();
      fuelConsumptionRateRender();
      oilConsumptionRender();
      reanderData(gauges);
    },
    error: function(err){
      console.log("err", err)
    }
  })
})