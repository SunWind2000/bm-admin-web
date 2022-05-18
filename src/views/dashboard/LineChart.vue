<template>
    <div id="chart" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
import { getDatetime } from '../../utils'
import resize from './mixins/resize'

require('echarts/theme/macarons')

export default {
    mixins: [resize],
    props: {
        className: {
            type: String,
            default: 'chart',
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '350px',
        },
        autoResize: {
            type: Boolean,
            default: true,
        },
        chartData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            chart: null,
        }
    },
    watch: {
        chartData: {
            deep: true,
            handler(val) {
                this.setOptions(val)
            },
        },
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
            this.chart = echarts.init(document.getElementById('chart'), 'macarons')
            this.setOptions(this.chartData)
        },
        setOptions({ expectedData, actualData } = {}) {
            let xAxisData = []
            let datetime = getDatetime()
            for (let i = 0; i < 7; i++) {
                xAxisData.push(datetime.pop())
            }
            this.chart.setOption({
                xAxis: {
                    data: xAxisData,
                    boundaryGap: false,
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: [
                    {
                        name: '电压（V）',
                        type: 'value',
                        min: 0,
                        max: 200,
                        splitNumber: 5,
                    },
                    {
                        name: '电流（A）',
                        type: 'value',
                        nameLocation: 'start',
                        alignTicks: true,
                        inverse: true,
                        min: 10,
                        max: 60,
                        splitNumber: 5,
                    },
                ],
                grid: {
                    left: 10,
                    right: 15,
                    bottom: 20,
                    top: 30,
                    containLabel: true,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    },
                    padding: [5, 10],
                },
                legend: {
                    data: ['Voltage', 'Current'],
                },
                series: [{
                    name: 'Voltage',
                    itemStyle: {
                        normal: {
                            color: '#FF005A',
                            lineStyle: {
                                color: '#FF005A',
                                width: 2,
                            },
                        },
                    },
                    smooth: true,
                    type: 'line',
                    data: expectedData,
                    animationDuration: 2800,
                    animationEasing: 'cubicInOut',
                },
                {
                    name: 'Current',
                    smooth: true,
                    type: 'line',
                    itemStyle: {
                        normal: {
                            color: '#3888fa',
                            lineStyle: {
                                color: '#3888fa',
                                width: 2,
                            },
                            areaStyle: {
                                color: '#f3f8ff',
                            },
                        },
                    },
                    data: actualData,
                    animationDuration: 2800,
                    animationEasing: 'quadraticOut',
                }],
            })
        },
    },
}
</script>
