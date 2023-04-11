<template>
    <div :style="{height:height,width:width}"/>
</template>

<script>
    import echarts from 'echarts'

    require('echarts/theme/macarons') // echarts theme
    import resize from './mixins/resize'
var option = {
                xAxis: {
                    max: 'dataMax',
                },
                yAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D', 'E'],
                    inverse: true,
                    animationDuration: 300,
                    animationDurationUpdate: 300,
                    max: 2 // only the largest 3 bars will be displayed
                },
                series: [{
                    realtimeSort: true,
                    name: 'X',
                    type: 'bar',
                    data: [0,0,0],
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                }],
                legend: {
                    show: true
                },
                animationDuration: 0,
                animationDurationUpdate: 3000,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear'
            };
    export default {
        mixins: [resize],
        props: ['width','height','barBlock','barBuffer','barParity'],
        data() {
            return {
                chart: null
                
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initChart()
            })
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose()
            this.chart = null
        },
        methods: {
            initChart() {
                this.chart = echarts.init(this.$el, 'macarons')
                var option = {
                    textStyle: {
                        fontFamily: "Helvetica Neue",
                    },
                    // animation: true,
                    title: {
                        text: 'Storage Occupation of Nodes',
                        textStyle: {
                            fontWeight: 'bold',
                            fontSize: 19,
                            color: '#000000'
                        },
                        left: '1%'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        icon: 'rect',
                        itemWidth: 14,
                        itemHeight: 5,
                        itemGap: 13,
                        data: ['Buffer','Parity','Block'],
                        right: '4%',
                        textStyle: {
                            fontSize: 14,
                            color: '#000000'
                        },
                        top:20
                    },
                    grid: {
                        top: 100,
                        left: '3%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['Node1', 'Node2', 'Node3', 'Node4', 'Node5', 'Node6'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine:{
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 18
                            }
                        },
                        animationDuration: 300,
                        animationDurationUpdate: 300,
                    }],
                    yAxis: [{
                        type: 'value',
                        name: 'MB',
                        // axisTick: {
                        //     show: false
                        // },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: 18
                            }
                        },
                        nameLocation: "end",
                        axisLine:{
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        nameTextStyle: {
                            fontSize: 18,
                            padding: [20,0,0,0]
                        }
                    }],
                    series: [{
                        name: 'Block',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: [],
                    }
                    ,{
                        name: 'Parity',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: [],
                    },{
                        name: 'Buffer',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: [],
                        label: {
                            show: true,
                            position: 'top',
                            formatter: function (params){
                                return params.value
                            },
                            textStyle: {
                                fontSize: 18
                            }
                        },
                    }
                    ]
                }
                var series = option["series"];
                var fun = function (params) {
                    var datavalue = 0;
                    for (var i = 0; i < series.length; i++) {
                        datavalue += series[i].data[params.dataIndex]
                    }
                    return datavalue.toFixed(2);
                }
                series[series.length - 1]["label"]["formatter"] = fun;
                this.chart.setOption(option)
                  
            //  this.chart.setOption(option)
            }
        },
        watch: {
          barParity(newV, oldV){
                let tmpBlock  = []
                let tmpParity = []
                let tmpBuffer = []
                let change = false
                for(let i=0;i<6;i++){
                    let v1 = this.barBlock[i]
                    let v2 = this.barParity[i]
                    let v3 = this.barBuffer[i]
                    if(v1===undefined||v2===undefined||v3===undefined){
                        change = true
                    }
                    tmpBlock.push(v1)
                    tmpParity.push(v2)
                    tmpBuffer.push(v3)

                }
                // let tmpBlock = this.barBlock
                // let tmpParity = this.barParity
                // let tmpBuffer = this.barBuffer
                if(!change){
                    
                
                var option = {
                    animation: false,
                    series: [{
                        name: 'Block',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: tmpBlock,
                    },
                    {
                        name: 'Parity',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: tmpParity,
                    },{
                        name: 'Buffer',
                        type: 'bar',
                        stack: 'vistors',
                        barWidth: '60%',
                        data: tmpBuffer,
                        label: {
                            show: true,
                            position: 'top',
                            formatter: function (params){
                                return params.value
                            },
                            textStyle: {
                                fontSize: 18
                            }
                        }
                    }
                    ]
                }
                var series = option["series"];
                var fun = function (params) {
                    var datavalue = 0;
                    for (var i = 0; i < series.length; i++) {
                      datavalue = Number(datavalue) + Number(parseFloat(series[i].data[params.dataIndex]).toFixed(2))
                    }
                    return parseFloat(datavalue).toFixed(2);
                }
                series[series.length - 1]["label"]["formatter"] = fun;
              
                this.chart.setOption(option)
                }
            // this.chart.setOption({
            //   series: [{
            //     name: 'Block',
            //     data: newV,
            //   }]
            // }, true)
          },
        //   barBuffer(newV, oldV){
        //     this.chart.setOption({
        //       series: [{
        //         name: 'Buffer',
        //         data: newV,
        //       }]
        //     })
        //   },
        //   barParity(newV, oldV){
        //     this.chart.setOption({
        //       series: [{
        //         name: 'Parity',
        //         data: newV,
        //       }]
        //     })
        //   }
        }
    }
</script>
