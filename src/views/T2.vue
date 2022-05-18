<template>
    <div style="padding: 10px;">
        <div class="table-content">
            <div class="query-c">
                <Button type="primary" @click="exportData(1)">
                    <Icon type="ios-download-outline"></Icon> 导出
                </Button>
            </div>
            <br>
            <Table border stripe :columns="columns1" :data="data1"></Table>
            <br>
            <Page
                :total="dataLength"
                show-elevator
                show-total
                @on-change="changePage"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'T2',
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            columns1: [
                {
                    align: 'center',
                    title: '系统时间',
                    key: 'systemTime',
                    sortable: true,
                },
                {
                    align: 'center',
                    title: '相对时间',
                    key: 'relativeTime',
                },
                {
                    align: 'center',
                    title: '状态',
                    key: 'status',
                },
                {
                    align: 'center',
                    title: '电压',
                    key: 'voltage',
                },
                {
                    align: 'center',
                    title: '电流',
                    key: 'current',
                },
                {
                    align: 'center',
                    title: '温度',
                    key: 'temperature',
                },
                {
                    align: 'center',
                    title: '容量',
                    key: 'capacity',
                },
                {
                    align: 'center',
                    title: 'SOC',
                    key: 'soc',
                },
            ],
            data1: this.getData(1),
            dataLength: this.data.length,
        }
    },
    methods: {
        getData(currentPage) {
            let data = []
            for (let i = 10 * (currentPage - 1); i < ((10 * currentPage) > this.dataLength ? this.dataLength : (10 * currentPage)); i++) {
                data.push({
                    systemTime: this.data[i].systemTime,
                    relativeTime: this.data[i].relativeTime,
                    status: this.data[i].status,
                    voltage: this.data[i].voltage,
                    current: this.data[i].current,
                    temperature: this.data[i].temperature,
                    capacity: this.data[i].capacity,
                    soc: this.data[i].soc,
                })
            }
            return data
        },
        // 切换表格页码
        changePage(value) {
            this.data1 = this.getData(value)
        },
    },
}
</script>

<style scoped>
.table-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    height: 650px;
    overflow: auto
}
</style>
