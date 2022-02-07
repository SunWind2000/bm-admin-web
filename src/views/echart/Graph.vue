<template>
    <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
import { debounce } from '../../utils/eladmin_index'

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
            this.chart = echarts.init(this.$el, 'macarons')
            const axisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            const data = axisData.map((item, i) => Math.round(Math.random() * 10 * (i + 1)))
            const links = data.map((item, i) => ({
                source: i,
                target: i + 1,
            }))
            links.pop()
            this.chart.setOption({
                title: {
                    text: '系统总压',
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: axisData,
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
                        data,
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
