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
        data: {
            type: Array,
            required: true,
        },
    },
    data() {
        let data = this.getData()
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
            maxTempData: data.maxTemp,
            minTempData: data.minTemp,
            maxVoltageData: data.maxVoltage,
            minVoltageData: data.minVoltage,
            maxCurrentData: data.maxCurrent,
            minCurrentData: data.minCurrent,
            columns1: Columns1,
            columns2: Columns2,
            columns3: Columns3,
            columns4: Columns4,
            data1: data.data_1,
            data2: data.data_2,
            data3: data.data_3,
            data4: data.data_4,
        }
    },
    methods: {
        getData() {
            // eslint-disable-next-line camelcase
            let data_1 = [{
                    cell_1: 0,
                    cell_2: 0,
                    cell_3: 0,
                    cell_4: 0,
                    cell_5: 0,
                    cell_6: 0,
                    // eslint-disable-next-line camelcase
                }], data_2 = [{
                    cell_7: 0,
                    cell_8: 0,
                    cell_9: 0,
                    cell_10: 0,
                    cell_11: 0,
                    cell_12: 0,
                    // eslint-disable-next-line camelcase
                }], data_3 = [{
                    cell_13: 0,
                    cell_14: 0,
                    cell_15: 0,
                    cell_16: 0,
                    cell_17: 0,
                    cell_18: 0,
                    // eslint-disable-next-line camelcase
                }], data_4 = [{
                    cell_19: 0,
                    cell_20: 0,
                    cell_21: 0,
                    cell_22: 0,
                    cell_23: 0,
                    cell_24: 0,
                }]

            let maxTemp = [], minTemp = [], maxVoltage = [], minVoltage = [], maxCurrent = [], minCurrent = []

            data_1[0].cell_1 = this.data[6].fields.cell_1
            data_1[0].cell_2 = this.data[6].fields.cell_2
            data_1[0].cell_3 = this.data[6].fields.cell_3
            data_1[0].cell_4 = this.data[6].fields.cell_4
            data_1[0].cell_5 = this.data[6].fields.cell_5
            data_1[0].cell_6 = this.data[6].fields.cell_6

            data_2[0].cell_7 = this.data[6].fields.cell_7
            data_2[0].cell_8 = this.data[6].fields.cell_8
            data_2[0].cell_9 = this.data[6].fields.cell_9
            data_2[0].cell_10 = this.data[6].fields.cell_10
            data_2[0].cell_11 = this.data[6].fields.cell_11
            data_2[0].cell_12 = this.data[6].fields.cell_12

            data_3[0].cell_13 = this.data[6].fields.cell_13
            data_3[0].cell_14 = this.data[6].fields.cell_14
            data_3[0].cell_15 = this.data[6].fields.cell_15
            data_3[0].cell_16 = this.data[6].fields.cell_16
            data_3[0].cell_17 = this.data[6].fields.cell_17
            data_3[0].cell_18 = this.data[6].fields.cell_18

            data_4[0].cell_19 = this.data[6].fields.cell_19
            data_4[0].cell_20 = this.data[6].fields.cell_20
            data_4[0].cell_21 = this.data[6].fields.cell_21
            data_4[0].cell_22 = this.data[6].fields.cell_22
            data_4[0].cell_23 = this.data[6].fields.cell_23
            data_4[0].cell_24 = this.data[6].fields.cell_24

            for (let i = 0; i < this.data.length; i++) {
                maxTemp.push(this.data[i].fields.max_cell_tem)
                minTemp.push(this.data[i].fields.min_cell_tem)
                maxVoltage.push(this.data[i].fields.max_cell_vol)
                minVoltage.push(this.data[i].fields.min_cell_vol)
                maxCurrent.push(this.data[i].fields.max_cell_cur)
                minCurrent.push(this.data[i].fields.min_cell_cur)
            }

            let res = {
                data_1,
                data_2,
                data_3,
                data_4,
                maxTemp,
                minTemp,
                maxVoltage,
                minVoltage,
                maxCurrent,
                minCurrent,
            }

            return res
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
