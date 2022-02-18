<template>
    <div>
        <Row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
            <h3 style="text-align: center">单体电池信息（单位：V）</h3><br>
            <Table border stripe :columns="columns1" :data="data1"></Table>
            <Table border stripe :columns="columns2" :data="data2"></Table>
            <Table border stripe :columns="columns3" :data="data3"></Table>
            <Table border stripe :columns="columns4" :data="data4"></Table><br>
        </Row>
        <Row :gutter="10" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
            <Col :xs="24" :sm="24" :lg="8">
                <h3 style="text-align: center">温度变化曲线</h3><br>
                <div class="chart-wrapper"><line-chart :maxData="maxTempData" :minData="minTempData" /></div>
            </Col>
            <Col :xs="24" :sm="24" :lg="8">
                <h3 style="text-align: center">电压变化曲线</h3><br>
                <div class="chart-wrapper"><line-chart :maxData="maxVoltageData" :minData="minVoltageData" /></div>
            </Col>
            <Col :xs="24" :sm="24" :lg="8">
                <h3 style="text-align: center">端电流变化曲线</h3><br>
                <div class="chart-wrapper"><line-chart :maxData="maxCurrentData" :minData="minCurrentData" /></div>
            </Col>
        </Row>
    </div>
</template>

<script>
import LineChart from './echart/lineChart'

export default {
    name: 'xdcDetails',
    components: {
        LineChart,
    },
    props: {
        order: { // 蓄电池编号
            type: Number,
            required: true,
        },
    },
    data() {
        const Columns1 = []
        const Columns2 = []
        const Columns3 = []
        const Columns4 = []
        for (let i = 1; i < 7; i++) {
            let prop = {
                align: 'center',
                title: 'cell_' + i,
                key: 'cell_' + i,
            }
            Columns1.push(prop)
        }
        for (let i = 7; i < 13; i++) {
            let prop = {
                align: 'center',
                title: 'cell_' + i,
                key: 'cell_' + i,
            }
            Columns2.push(prop)
        }
        for (let i = 13; i < 19; i++) {
            let prop = {
                align: 'center',
                title: 'cell_' + i,
                key: 'cell_' + i,
            }
            Columns3.push(prop)
        }
        for (let i = 19; i < 25; i++) {
            let prop = {
                align: 'center',
                title: 'cell_' + i,
                key: 'cell_' + i,
            }
            Columns4.push(prop)
        }
        return {
            maxTempData: [10, 11, 13, 11, 12, 12, 10],
            minTempData: [1, 0, 2, 5, 3, 2, 1],
            maxVoltageData: [14.5, 13.8, 12.4, 15, 12, 14, 9],
            minVoltageData: [10, 12.5, 11, 13, 9, 10, 6],
            maxCurrentData: [1.5, 1.2, 2.5, 2, 1.8, 2, 1.6],
            minCurrentData: [0.9, 0.8, 1.3, 1, 0.95, 1, 0.6],
            columns1: Columns1,
            columns2: Columns2,
            columns3: Columns3,
            columns4: Columns4,
            data1: [
                {
                    cell_1: 12.5,
                    cell_2: 12.5,
                    cell_3: 12.5,
                    cell_4: 12.5,
                    cell_5: 12.5,
                    cell_6: 12.5,
                },
            ],
            data2: [
                {
                    cell_7: 12.5,
                    cell_8: 12.5,
                    cell_9: 12.5,
                    cell_10: 12.5,
                    cell_11: 12.5,
                    cell_12: 12.5,
                },
            ],
            data3: [
                {
                    cell_13: 12.5,
                    cell_14: 12.5,
                    cell_15: 12.5,
                    cell_16: 12.5,
                    cell_17: 12.5,
                    cell_18: 12.5,
                },
            ],
            data4: [
                {
                    cell_19: 12.5,
                    cell_20: 12.5,
                    cell_21: 12.5,
                    cell_22: 12.5,
                    cell_23: 12.5,
                    cell_24: 12.5,
                },
            ],
        }
    },
    methods: {
        getData() {
        },
    },
}
</script>

<style scoped>
.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}
@media (max-width:1024px) {
    .chart-wrapper {
        padding: 8px;
    }
}
</style>
