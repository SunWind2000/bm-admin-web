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

            this.chart.setOption({
                title: {
                    text: '系统SOC',
                },
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%',
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {},
                    },
                },
                series: [
                    {
                        name: '系统SOC',
                        type: 'gauge',
                        detail: { formatter: '{value}' },
                        data: [{ value: 14.6, name: '系统SOC' }],
                    },
                ],
            })
        },
    },
}
</script>
