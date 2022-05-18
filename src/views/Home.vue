<template>
    <div class="home-container">
        <div class="dashboard-editor-container">
            <panel-group @handleSetLineChartData="handleSetLineChartData" />
            <Row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
                <line-chart :chart-data="lineChartData" />
            </Row>
        </div>
    </div>
</template>

<script>
import PanelGroup from './dashboard/PanelGroup'
import LineChart from './dashboard/LineChart'

const lineChartData = {
    newVisits: {
        expectedData: [110, 115, 112, 112, 115, 115, 113],
        actualData: [50, 49, 50, 52, 48, 50, 51],
    },
    messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130],
    },
    purchases: {
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130],
    },
    shopping: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130],
    },
}

export default {
    name: 'home',
    components: {
        LineChart,
        PanelGroup,
    },
    data() {
        return {
            lineChartData: lineChartData.newVisits,
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
