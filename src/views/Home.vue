<template>
    <div class="home-container">
        <div class="dashboard-editor-container">
            <panel-group @handleSetLineChartData="handleSetLineChartData" />
            <Row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
                <line-chart :chart-data="lineChartData" />
            </Row>
            <Row :gutter="10">
                <Col :xs="24" :sm="24" :lg="8">
                    <div class="chart-wrapper"><guage /></div>
                </Col>
                <Col :xs="24" :sm="24" :lg="8">
                    <div class="chart-wrapper"><bar-chart /></div>
                </Col>
                <Col :xs="24" :sm="24" :lg="8">
                    <div class="chart-wrapper"><graph /></div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
import PanelGroup from './dashboard/PanelGroup'
import LineChart from './dashboard/LineChart'
import Guage from './echart/Guage'
import BarChart from './echart/barChart'
import Graph from './echart/Graph'
import { getDashboardData } from '../api'

let lineChartData = {
    voltage: {
        maxData: [],
        minData: [],
    },
    current: {
        maxData: [],
        minData: [],
    },
    temperature: {
        maxData: [],
        minData: [],
    },
    num: {
        maxData: [],
        minData: [0, 0, 0, 0, 0, 0, 0],
    },
}

getDashboardData().then(response => {
    for (let i = 0; i < response.data.data.length; i++) {
        lineChartData.voltage.maxData.push(response.data.data[i].fields.max_voltage)
        lineChartData.voltage.minData.push(response.data.data[i].fields.min_voltage)
        lineChartData.current.maxData.push(response.data.data[i].fields.max_current)
        lineChartData.current.minData.push(response.data.data[i].fields.min_current)
        lineChartData.temperature.maxData.push(response.data.data[i].fields.max_temperature)
        lineChartData.temperature.minData.push(response.data.data[i].fields.min_temperature)
        lineChartData.num.maxData.push(response.data.data[i].fields.battery_num)
        if (i === response.data.data.length - 1) {
            localStorage.setItem('battery_num', response.data.data[i].fields.battery_num)
        }
    }
})

export default {
    name: 'home',
    components: {
        Graph,
        BarChart,
        Guage,
        LineChart,
        PanelGroup,
    },
    data() {
        return {
            lineChartData: lineChartData.voltage,
        }
    },
    methods: {
        handleSetLineChartData(type) {
            this.lineChartData = lineChartData[type]
        },
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home-container {
    padding: 5px 10px 10px;
}
.dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;
    height: 650px;
    overflow: auto;

    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
}

@media (max-width:1024px) {
    .chart-wrapper {
        padding: 8px;
    }
}
</style>
