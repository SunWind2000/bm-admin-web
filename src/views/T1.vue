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
// TODO：测试数据，生产环境中需要注释掉
import historyData from '../testData/testHistoryData'

const mockData = historyData

export default {
    name: 'history',
    data() {
        return {
            columns1: [
                {
                    align: 'center',
                    title: '故障编号',
                    key: 'no',
                    sortable: true,
                },
                {
                    align: 'center',
                    title: '故障时间',
                    key: 'datetime1',
                },
                {
                    align: 'center',
                    title: '接收时间',
                    key: 'datetime2',
                },
                {
                    title: '更多操作',
                    align: 'center',
                    render: (h, params) => h('div', [
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
                                    this.show(params.index)
                                },
                            },
                        }, '查看详情'),
                    ]),
                },
            ],
            data1: this.getData(1),
            dataLength: mockData.length,
        }
    },
    methods: {
        // 显示表格数据详情
        show(index) {
            this.$Modal.info({
                title: '故障详情',
                // eslint-disable-next-line max-len
                content: `编号: ${this.data1[index].no}<br>故障时间: ${this.data1[index].datetime1}<br>接收时间: ${this.data1[index].datetime2}<br>详情: ${this.data1[index].details}`,
            })
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
