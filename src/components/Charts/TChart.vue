<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";

require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

const animationDuration = 6000;

export default {
  name: "TChart",
  mixins: [resize],
  props: ["width", "height", "tpsData"],
  data() {
    return {
      chart: null,
      data1: [],
      now: new Date(1997, 9, 3),
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    refresh() {
      if (!this.chart) {
        return;
      }
      this.value1 = this.value1 + Math.random() * 40 + 15;
      this.value2 = this.value2 + Math.random() * 40 + 5;
      this.now = new Date(+this.now + this.oneDay);
      // for (var i = 0; i <= 10; i++) {
      //   if (i<=6){
      //     this.temp1.push(Math.random()*1000000%10000+30000)
      //   }else{
      //     this.temp1.push(Math.random()*1000000%10000+50000)
      //   }
      //
      // }
      // for (var i = 0; i <= 10; i++) {
      //   this.data1.push({
      //     name: this.now.toString(),
      //     value: [
      //       i,
      //       this.realTPS[i]
      //       // Math.round(Math.random()*1000000) % 1500 + 2000
      //     ]
      //   })
      // }
    },

    initChart() {
      this.chart = echarts.init(this.$el);
      this.chart.setOption({
        textStyle: {
          fontFamily: "Helvetica Neue",
        },
         animation: false,
        title: {
          text: "System TPS",
          textStyle: {
            fontWeight: "bold",
            fontSize: 19,
            color: "#000000",
          },
          left: "1%",
        },
        visualMap: {
          show: false,
          dimension: 0,
          type: "piecewise",
          pieces: [
            {
              lte: 100,
              color: "#3399FF",
            },
            {
              lte: 200,
              color: "#21BAA9",
            },
          ],
        },
        grid: {
          left: "3.5%",
          right: "7%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            name: "TimeStamp",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                fontSize: 18,
              },
              formatter: "{value}",
            },
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 18,
              padding: [20, 0, 0, 0],
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "TPS",
            axisTick: {
              show: true,
            },
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            axisLabel: {
              textStyle: {
                fontSize: 18,
              },
              formatter: function (datas, index) {
                if (index % 2 === 0) {
                  return "";
                } else {
                  return (datas / 1000).toFixed(1) + "K";
                }
              },
            },
            splitLine: {
              show: false,
              // lineStyle: {
              //   color: '#57617B'
              // }
            },
            nameTextStyle: {
              fontSize: 18,
              padding: [15, 0, 0, 0],
            },
          },
        ],
        series: [
          {
            name: "TPS",
            type: "line",
            // showSymbol: true,
            hoverAnimation: false,
            // data: this.data1,
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            areaStyle: {
            },
            // areaStyle: {
            //   normal: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //       offset: 0,
            //       color: 'rgba(219, 50, 51, 0.3)'
            //     }, {
            //       offset: 1,
            //       color: 'rgba(219, 50, 51, 0)'
            //     }], false),
            //     shadowColor: 'rgba(0, 0, 0, 0.1)',
            //     shadowBlur: 10
            //   }
            // },
            // itemStyle: {
            //     normal: {
            //         color: 'rgb(219,50,51)',
            //         borderColor: 'rgba(219,50,51,0.2)',
            //         borderWidth: 12
            //     }
            // }
          },
        ],
      });
      // this.refresh()
    },
  },
  watch: {
    tpsData(newV, oldV) {
    //   this.chart.clear();

      this.chart.setOption({
        textStyle: {
          fontFamily: "Helvetica Neue",
        },
        title: {
          text: "System TPS",
          textStyle: {
            fontWeight: "bold",
            fontSize: 19,
            color: "#000000",
          },
          left: "1%",
        },
        visualMap: {
          show: false,
          dimension: 0,
          type: "piecewise",
          pieces: [
            {
              lte: 100,
              color: "#3399FF",
            },
            {
              lte: 200,
              color: "#21BAA9",
            },
          ],
        },
        grid: {
          left: "2%",
          right: "7%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            name: "TimeStamp",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                fontSize: 18,
              },
              formatter: "{value}",
            },
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 18,
              padding: [20, 0, 0, 0],
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "TPS",
            axisTick: {
              show: true,
            },
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            axisLabel: {
              textStyle: {
                fontSize: 18,
              },
              formatter: function (datas, index) {
                if (index % 2 === 0) {
                  return "";
                } else {
                  return (datas / 1000).toFixed(1) + "K";
                }
              },
            },
            splitLine: {
              show: false,
              // lineStyle: {
              //   color: '#57617B'
              // }
            },
            nameTextStyle: {
              fontSize: 18,
              padding: [15, 0, 0, 0],
            },
          },
        ],
        series: [
          {
            name: "TPS",
            type: "line",
            data: newV,
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            areaStyle: {},
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: function (datas, index) {
                    if (datas.data.show === 0) {
                      return "";
                    } else {
                      return datas.data.value[1];
                    }
                  },
                },
              },
            },
          },
        ],
      });
      // console.log(newV);
    },
  },
};
</script>
