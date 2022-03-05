<template>
    <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
import { debounce } from '../../utils/eladmin_index'
import { getDatetime } from '../../utils'
import { getDashboardData } from '../../api'

require('echarts/theme/macarons')

let temp = {
    maxData: [],
    minData: [],
}

getDashboardData().then(response => {
    for (let i = 0; i < response.data.data.length; i++) {
        temp.maxData.push(response.data.data[i].fields.max_temperature)
        temp.minData.push(response.data.data[i].fields.min_temperature)
    }
})

export default {
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
            default: '300px',
        },
    },
    data() {
        return {
            chart: null,
        }
    },
    mounted() {
        this.initChart()
        // eslint-disable-next-line no-underscore-dangle
        this.__resizeHandler = debounce(() => {
            if (this.chart) {
                this.chart.resize()
            }
        }, 100, false)
        // eslint-disable-next-line no-underscore-dangle
        window.addEventListener('resize', this.__resizeHandler)
    },
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        // eslint-disable-next-line no-underscore-dangle
        window.removeEventListener('resize', this.__resizeHandler)
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart() {
            let xAxisData = []
            let datetime = getDatetime()
            for (let i = 0; i < 7; i++) {
                xAxisData.push(datetime.pop())
            }
            this.chart = echarts.init(this.$el, 'macarons')
            this.chart.setOption({
                title: {
                    text: '系统温度',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                    },
                    feature: {
                        restore: {},
                        saveAsImage: {},
                    },
                },
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [{
                    type: 'category',
                    data: xAxisData,
                    axisTick: {
                        alignWithLabel: true,
                    },
                }],
                yAxis: [{
                    type: 'value',
                    axisTick: {
                        show: false,
                    },
                }],
                series: [{
                    name: '最低温度',
                    type: 'bar',
                    stack: 'vistors',
                    barWidth: '60%',
                    data: temp.minData,
                }, {
                    name: '最高温度',
                    type: 'bar',
                    stack: 'vistors',
                    barWidth: '60%',
                    data: temp.maxData,
                }],
            })
        },
    },
}
</script>
