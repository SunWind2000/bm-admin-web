<template>
    <div style="padding: 10px;">
        <div class="table-content">
            <div class="query-c">
                <Button type="primary" @click="exportData(1)">
                    <Icon type="ios-download-outline"></Icon> 导出
                </Button>
            </div>
            <br>
            <Table border stripe :columns="columns1" :data="data1" height="530"></Table>
            <br>
<!--            <Page-->
<!--                :total="dataLength"-->
<!--                show-elevator-->
<!--                show-total-->
<!--                @on-change="changePage"-->
<!--            />-->
            <Modal v-model="dialogVisible" width="1000px" title="历史数据详细信息">
                <p>充放电次数：11</p><p>当前SOH：98.5%</p>
                <Table border stripe :columns="columns2" :data="data2" height="400"></Table>
            </Modal>
        </div>
    </div>
</template>

<script>
// TODO：测试数据，生产环境中需要注释掉
import historyData from '../testData/testHistoryData'
import historyData2 from '../testData/historyData'

const mockData = historyData

export default {
    name: 'history',
    data() {
        return {
            columns1: [
                {
                    align: 'center',
                    title: '电池编号',
                    key: 'no',
                    sortable: true,
                    filters: [
                        {
                            label: 'No.1',
                            value: 1,
                        },
                        {
                            label: 'No.2',
                            value: 2,
                        },
                        {
                            label: 'No.3',
                            value: 3,
                        },
                        {
                            label: 'No.4',
                            value: 4,
                        },
                        {
                            label: 'No.5',
                            value: 5,
                        },
                        {
                            label: 'No.6',
                            value: 6,
                        },
                        {
                            label: 'No.7',
                            value: 7,
                        },
                        {
                            label: 'No.8',
                            value: 8,
                        },
                        {
                            label: 'No.9',
                            value: 9,
                        },
                        {
                            label: 'No.10',
                            value: 10,
                        },
                        {
                            label: 'No.11',
                            value: 11,
                        },
                        {
                            label: 'No.12',
                            value: 12,
                        },
                        {
                            label: 'No.13',
                            value: 13,
                        },
                        {
                            label: 'No.14',
                            value: 14,
                        },
                        {
                            label: 'No.15',
                            value: 15,
                        },
                        {
                            label: 'No.16',
                            value: 16,
                        },
                    ],
                    filterMultiple: false,
                    filterMethod(value, row) {
                        if (value === 1) {
                            return row.no === 1
                        } if (value === 2) {
                            return row.no === 2
                        }
                    },
                },
                {
                    align: 'center',
                    title: '起始时间',
                    key: 'datetime1',
                },
                {
                    align: 'center',
                    title: '终止时间',
                    key: 'datetime2',
                },
                {
                    title: '更多操作',
                    align: 'center',
                    render: (h) => h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small',
                            },
                            style: {
                                marginRight: '5px',
                            },
                            on: {
                                click: () => {
                                    this.show()
                                },
                            },
                        }, '查看详情'),
                    ]),
                },
            ],
            columns2: [
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
            // data1: this.getData(1),
            data1: [],
            data2: historyData2.data,
            dataLength: mockData.length,
            dialogVisible: false,
        }
    },
    methods: {
        // 显示表格数据详情
        show() {
            if (this.dialogVisible === false) {
                this.dialogVisible = true
            } else {
                this.dialogVisible = false
            }
        },
        // 按页获取数据
        getData(currentPage) {
            let data = []
            for (let i = 10 * (currentPage - 1); i < ((10 * currentPage) > this.dataLength ? this.dataLength : (10 * currentPage)); i++) {
                data.push({
                    no: mockData[i].no,
                    datetime1: mockData[i].datetime1,
                    datetime2: mockData[i].datetime2,
                    details: mockData[i].details,
                })
            }
            return data
        },
        // 切换表格页码
        changePage(value) {
            this.data1 = this.getData(value)
        },
        // 导出CSV格式数据
        exportData(type) {
            if (type === 1) {
                this.$refs.table.exportCsv({
                    filename: 'data',
                })
            } else if (type === 2) {
                this.$refs.table.exportCsv({
                    filename: 'Sorting and filtering data',
                    original: false,
                })
            } else if (type === 3) {
                this.$refs.table.exportCsv({
                    filename: 'Custom data',
                    columns: this.columns1.filter((col, index) => index < 4),
                    data: this.data1.filter((data, index) => index < 4),
                })
            }
        },
    },
    mounted() {
        let data = []
        for (let i = 0; i < mockData.length; i++) {
            data.push({
                no: mockData[i].no,
                datetime1: mockData[i].datetime1,
                datetime2: mockData[i].datetime2,
                details: mockData[i].details,
            })
        }
        this.data1 = data
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
