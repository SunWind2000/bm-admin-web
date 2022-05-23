<template>
    <div>
        <Row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
            <h3 style="text-align: center">单体电池信息（单位：V）</h3><br>
            <Table border stripe :columns="columns1" :data="data1">
                <template slot-scope="{ row }" slot="voltage">
                    <Button type="primary" size="small" style="margin-right: 5px">{{ row.voltage }}</Button>
                </template>
                <template slot-scope="{ row }" slot="current">
                    <Button type="primary" size="small" style="margin-right: 5px">{{ row.current }}</Button>
                </template>
                <template slot-scope="{ row }" slot="temperature">
                    <Button type="primary" size="small" style="margin-right: 5px">{{ row.temperature }}</Button>
                </template>
                <template slot-scope="{ row }" slot="soc">
                    <Button type="success" size="small" style="margin-right: 5px">{{ row.soc }}</Button>
                </template>
            </Table>
        </Row>
        <Row :gutter="10" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
            <Col :xs="24" :sm="24" :lg="8">
                <h3 style="text-align: center">温度变化曲线（℃）</h3><br>
                <div class="chart-wrapper"><line-chart :maxData="maxTempData" /></div>
            </Col>
            <Col :xs="24" :sm="24" :lg="8">
                <h3 style="text-align: center">电压变化曲线（mV）</h3><br>
                <div class="chart-wrapper"><line-chart :maxData="maxVoltageData" /></div>
            </Col>
            <Col :xs="24" :sm="24" :lg="8">
                <h3 style="text-align: center">端电流变化曲线（mA）</h3><br>
                <div class="chart-wrapper"><line-chart :maxData="maxCurrentData" /></div>
            </Col>
            <Col :xs="24" :sm="24" :lg="8">
                <h3 style="text-align: center">SOC变化曲线（%）</h3><br>
                <div class="chart-wrapper"><line-chart :maxData="socData" /></div>
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
    data() {
        const Columns1 = [
            {
                align: 'center',
                title: '电压',
                key: 'voltage',
                slot: 'voltage',
            },
            {
                align: 'center',
                title: '电流',
                key: 'current',
                slot: 'current',
            },
            {
                align: 'center',
                title: '温度',
                key: 'temperature',
                slot: 'temperature',
            },
            {
                align: 'center',
                title: 'SOC',
                key: 'soc',
                slot: 'soc',
            },
        ]
        return {
            maxTempData: [24, 24, 24, 24, 24, 24, 24],
            maxVoltageData: [3450, 3450, 3450, 3450, 3450, 3450, 3450],
            maxCurrentData: [94.1, 111.8, 93.7, 110.7, 99.7, 111.6, 98.8],
            socData: [100, 100, 100, 100, 100, 100, 100],
            columns1: Columns1,
            data1: [
                {
                    voltage: '3450mV',
                    current: '98.8mA',
                    temperature: '24℃',
                    soc: '100%',
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
