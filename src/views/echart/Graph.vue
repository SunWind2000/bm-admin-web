<template>
    <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
import { debounce } from '../../utils/eladmin_index'
import { getDatetime } from '../../utils'

require('echarts/theme/macarons')

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
        data: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            chart: null,
        }
    },
    watch: {
        data: {
            deep: true,
            handler(val) {
                this.initChart(val)
            },
        },
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
            const links = this.data.map((item, i) => ({
                source: i,
                target: i + 1,
            }))
            links.pop()
            this.chart.setOption({
                title: {
                    text: '系统总压',
                },
                tooltip: {
                    feature: {
                        restore: {},
                        saveAsImage: {},
                    },
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xAxisData,
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        coordinateSystem: 'cartesian2d',
                        symbolSize: 40,
                        label: {
                            normal: {
                                show: true,
                            },
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        data: this.data,
                        links,
                        lineStyle: {
                            normal: {
                                color: '#2f4554',
                            },
                        },
                    },
                ],
            })
        },
    },
}
</script>
