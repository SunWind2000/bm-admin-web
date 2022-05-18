<template>
    <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
import { debounce } from '../../utils/eladmin_index'
import { getDatetime } from '../../utils'

require('echarts/theme/macarons')

export default {
    name: 'lineChart',
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
        maxData: {
            type: Array,
            required: true,
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
                tooltip: {
                    trigger: 'axis',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['20:34:00', '20:34:05', '20:34:06', '20:34:07', '20:34:09', '20:34:14', '20:34:15', '20:34:18'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        name: '实时数据',
                        type: 'line',
                        data: this.maxData,
                    },
                ],
            })
        },
    },
}
</script>
