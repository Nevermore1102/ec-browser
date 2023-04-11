<template>
    <div :style="{height:height,width:width}"/>
</template>

<script>
    import echarts from 'echarts'
    import resize from './mixins/resize'

    export default {
        mixins: [resize],
        props: ['width','height','fullStorage','ecStorage','judge'],
        data() {
            return {
                chart: null,
                data1: [{
                    name: '0',
                    value: [
                        0,
                        0
                    ]
                }],
                data2: [{
                    name: '0',
                    value: [
                        0,
                        0
                    ]
                }],
                index: 1,
                value1: 0,
                value2: 0,
                now: new Date(1997, 9, 3),
                oneDay: 24 * 3600 * 1000,
                temp1:[1.99,3.97,6.16,10.13,14.10,18.06,22.03,26.00,29.97,33.93,37.90,41.86,45.83,49.80,53.77,57.73,61.70,65.66,69.63,73.60,77.57,81.53,85.50,89.46,93.43,97.40,101.37,105.33,109.30,113.27,117.23,121.20,125.17,129.14,133.11,137.08,141.05,145.02,148.98,152.95,156.92,160.89,164.86,168.84,172.81,176.78,180.75,184.72,188.69,192.67,196.64,200.61,204.58,208.55,212.52,216.50,220.47,224.43,228.41,232.38,236.35,240.32,244.30,248.26,252.24,256.21,260.18,264.16,268.13,272.09,276.06,280.03,284.01,287.98,291.95,295.92,299.89,303.87,307.84,311.81,315.78,319.75,323.72,327.69,331.66,335.64,339.61,343.58,347.55,351.52,355.49,359.47,363.44,367.41,371.38,375.35,379.32,383.29,387.26,391.23,395.20,399.17,403.15,407.12,411.10,415.06,419.03,423.00,426.97,430.95,434.92,438.89,442.86,446.83,450.80,454.77,458.75,462.71,466.69,470.66,474.63,478.61,482.58,486.54,490.52,494.49,498.46,502.43,506.41,510.37,514.35,518.32,522.29,526.26,530.24],
                temp2:[1.99,3.97,6.16,3.98,7.58,11.18,14.78,7.95,11.55,15.15,18.75,11.92,15.52,19.12,22.72,15.89,19.49,23.09,26.69,19.86,23.46,27.06,30.66,23.83,27.43,31.03,34.63,27.81,31.41,35.01,38.61,31.78,35.38,38.98,42.58,35.75,39.35,42.95,46.55,39.72,43.32,46.92,50.52,43.70,47.30,50.90,54.50,47.67,51.27,54.87,58.47,51.65,55.25,58.85,62.45,55.63,59.23,62.83,66.43,59.60,63.20,66.80,70.40,63.58,67.18,70.78,74.38,67.55,71.15,74.75,78.35,71.53,75.13,78.73,82.33,75.50,79.10,82.70,86.30,79.48,83.08,86.68,90.28,83.45,87.05,90.65,94.25,87.43,91.03,94.63,98.23,91.41,95.01,98.61,102.21,95.38,98.98,102.58,106.18,99.36,102.96,106.56,110.16,103.33,106.93,110.53,114.13,107.31,110.91,114.51,118.11,111.28,114.88,118.48,122.08,115.26,118.86,122.46,126.06,119.23,122.83,126.43,130.03,123.21,126.81,130.41,134.01,127.19,130.79,134.39,137.99,131.16,134.76,138.36,141.96]
            }
        },
        mounted() {
            this.initChart()
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose()
            this.chart = null
        },
        methods: {
            refresh() {
                if (!this.chart) {
                    return
                }
                // this.value1 = this.value1 + Math.random() * 40 + 15;
                // this.value2 = this.value2 + Math.random() * 40 + 5;
                // // this.now = new Date(+this.now + this.oneDay);
                // for (var i = 1; i <= 136; i++) {
                //     //data.shift();
                //     this.data1.push({
                //         // name: this.now.toString(),
                //         value: [
                //             i,
                //             this.temp1[i]
                //         ]
                //     });
                //     this.data2.push({
                //         // name: this.now.toString(),
                //         value: [
                //             i,
                //             this.temp2[i]
                //         ]
                //     });
                // }
                // this.chart.setOption({
                //     series: [{
                //         data: this.ecStorage
                //     }, {
                //         data: this.fullStorage
                //     }]
                // })
                //     name: 'EC',
                //     type: 'line',
                //     smooth: true,
                //     symbol: 'circle',
                //     symbolSize: 5,
                //     showSymbol: false,
                //     lineStyle: {
                //         normal: {
                //             width: 1
                //         }
                //     },
                //     areaStyle: {
                //         normal: {
                //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                 offset: 0,
                //                 color: 'rgba(0, 136, 212, 0.3)'
                //             }, {
                //                 offset: 0.8,
                //                 color: 'rgba(0, 136, 212, 0)'
                //             }], false),
                //             shadowColor: 'rgba(0, 0, 0, 0.1)',
                //             shadowBlur: 10
                //         }
                //     },
                //     itemStyle: {
                //         normal: {
                //             color: 'rgb(0,136,212)',
                //             borderColor: 'rgba(0,136,212,0.2)',
                //             borderWidth: 12
                //
                //         }
                //     },
                //     data: this.data1
                // }, {
                //     name: 'Normal',
                //     type: 'line',
                //     smooth: true,
                //     symbol: 'circle',
                //     symbolSize: 5,
                //     showSymbol: false,
                //     lineStyle: {
                //         normal: {
                //             width: 1
                //         }
                //     },
                //     areaStyle: {
                //         normal: {
                //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                 offset: 0,
                //                 color: 'rgba(219, 50, 51, 0.3)'
                //             }, {
                //                 offset: 0.8,
                //                 color: 'rgba(219, 50, 51, 0)'
                //             }], false),
                //             shadowColor: 'rgba(0, 0, 0, 0.1)',
                //             shadowBlur: 10
                //         }
                //     },
                //     itemStyle: {
                //         normal: {
                //             color: 'rgb(219,50,51)',
                //             borderColor: 'rgba(219,50,51,0.2)',
                //             borderWidth: 12
                //         }
                //     },
                //     data: this.data2
                // });
            },
            initChart() {
               this.chart = echarts.init(this.$el, 'macarons')
                // this.chart.setOption({
                //     title: {
                //         text: ''
                //     },
                //     tooltip: {
                //         trigger: 'axis',
                //         // formatter: function (params) {
                //         //     params = params[0];
                //         //     var date = new Date(params.name);
                //         //     return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                //         // },
                //         axisPointer: {
                //             animation: true
                //         }
                //     },
                //     xAxis: {
                //         type: 'value',
                //         splitLine: {
                //             show: false
                //         }
                //     },
                //     yAxis: {
                //         type: 'value',
                //         boundaryGap: [0, '100%'],
                //         splitLine: {
                //             show: false
                //         }
                //     },
                //     series: [{
                //         name: '1',
                //         type: 'line',
                //         showSymbol: false,
                //         hoverAnimation: false,
                //         data: this.data1
                //     },{
                //         name: '2',
                //         type: 'line',
                //         showSymbol: false,
                //         hoverAnimation: false,
                //         data: this.data2
                //     }]
                // })
                this.chart.setOption({
                    textStyle: {
                        fontFamily: "Helvetica Neue",
                    },
                    title: {
                        text: 'Storage Occupation of System',
                        textStyle: {
                            fontWeight: 'bold',
                            fontSize: 19,
                            color: '#000000'
                        },
                        left: '1%'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    },
                    legend: {
                        top: 20,
                        icon: 'rect',
                        itemWidth: 14,
                        itemHeight: 5,
                        itemGap: 13,
                        data: ['Full Replication', 'EC'],
                        right: '4%',
                        textStyle: {
                            fontSize: 14,
                            color: '#000000'
                        }
                    },
                    grid: {
                        top: 100,
                        left: '3.5%',
                        right: '7%',
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'value',
                        name: 'BlockNumber',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: 18
                            }
                        },
                        nameLocation:'middle',
                        nameTextStyle: {
                            fontSize: 18,
                            padding: [20,0,0,0]
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        name: 'MB',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: 18
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        nameTextStyle: {
                            fontSize: 18,
                            padding: [15,0,0,0]
                        }
                    }],
                    series: [{
                        name: 'Full Replication',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: this.data1,
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(219, 50, 51, 0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(219, 50, 51, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(219,50,51)',
                                borderColor: 'rgba(219,50,51,0.2)',
                                borderWidth: 12
                            }
                        },
                        markPoint: {
                            data: [
                                {type: 'max', name: 'maxFull', label:{
                                        formatter: function (datas) {
                                           return parseFloat(datas.data.value).toFixed(2)
                                        }
                                    }},
                            ]
                        },
                    }, {
                        name: 'EC',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: this.data2,
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0, 136, 212, 0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0, 136, 212, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(0,136,212)',
                                borderColor: 'rgba(0,136,212,0.2)',
                                borderWidth: 12
                            }
                        },
                        markPoint: {
                            data: [
                                {type: 'max', name: 'maxEC', label:{
                                        formatter: function (datas) {
                                            return parseFloat(datas.data.value).toFixed(1)
                                        }
                                    }},
                            ]
                        },
                    }]
                    // [{
                    //   name: 'EC',
                    //   type: 'line',
                    //   smooth: true,
                    //   symbol: 'circle',
                    //   symbolSize: 5,
                    //   showSymbol: false,
                    //   lineStyle: {
                    //     normal: {
                    //       width: 1
                    //     }
                    //   },
                    //   areaStyle: {
                    //     normal: {
                    //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //         offset: 0,
                    //         color: 'rgba(0, 136, 212, 0.3)'
                    //       }, {
                    //         offset: 0.8,
                    //         color: 'rgba(0, 136, 212, 0)'
                    //       }], false),
                    //       shadowColor: 'rgba(0, 0, 0, 0.1)',
                    //       shadowBlur: 10
                    //     }
                    //   },
                    //   itemStyle: {
                    //     normal: {
                    //       color: 'rgb(0,136,212)',
                    //       borderColor: 'rgba(0,136,212,0.2)',
                    //       borderWidth: 12
                    //
                    //     }
                    //   },
                    //   data: this.data1
                    // }, {
                    //   name: 'Normal',
                    //   type: 'line',
                    //   smooth: true,
                    //   symbol: 'circle',
                    //   symbolSize: 5,
                    //   showSymbol: false,
                    //   lineStyle: {
                    //     normal: {
                    //       width: 1
                    //     }
                    //   },
                    //   areaStyle: {
                    //     normal: {
                    //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //         offset: 0,
                    //         color: 'rgba(219, 50, 51, 0.3)'
                    //       }, {
                    //         offset: 0.8,
                    //         color: 'rgba(219, 50, 51, 0)'
                    //       }], false),
                    //       shadowColor: 'rgba(0, 0, 0, 0.1)',
                    //       shadowBlur: 10
                    //     }
                    //   },
                    //   itemStyle: {
                    //     normal: {
                    //       color: 'rgb(219,50,51)',
                    //       borderColor: 'rgba(219,50,51,0.2)',
                    //       borderWidth: 12
                    //     }
                    //   },
                    //   data: this.data2
                    // }]
                })
                // setInterval(this.refresh, 1000);
                // this.refresh()
            }
        },
             watch: {
                judge(newV, oldV){
                     this.chart.setOption({
                        series: [{
                            data: this.fullStorage,
                        
                        }, {
                            data: this.ecStorage,
                        }]
                    })
                }
             }
    }
</script>
