<template>
    <div style="padding: 10px;">
        <div class="table-content">
            <div class="query-c">
                查询：
                <input search placeholder="请输入查询内容" style="width: auto" />
            </div>
            <br>
            <Table border stripe :columns="columns1" :data="data1"></Table>
            <br>
            <Page :total="data1.length" show-sizer show-elevator show-total page-size="pageSize" :current="1" @on-change="changePage" />
        </div>
    </div>
</template>

<script>
// TODO：测试数据，生产环境中需要注释掉
import historyData from '../testData/testHistoryData'

const mockData = historyData

export default {
    name: 'history',
    props: {
        pageSize: {
            type: Number,
            default: 10,
        },
        current: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            columns1: [
                {
                    align: 'center',
                    title: '故障编号',
                    key: 'no',
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
            data1: this.getData(),
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
        // 获取数据
        getData() {
            let data = []
            let totalDataNum = mockData.length
            for (let i = 0; i < totalDataNum; i++) {
                data.push({
                    no: mockData[i].no,
                    datetime1: mockData[i].datetime1,
                    datetime2: mockData[i].datetime2,
                    details: mockData[i].details,
                })
            }
            return data
        },
        // 改变每页所显示的数据条数
        changePage() {
            let data = this.getData()
            let pageData = []
            let pageSize = this.pageSize
            for (let i = pageSize * (this.current - 1); i < pageSize * this.current; i++) {
                pageData.push({
                    no: data[i].no,
                    datetime1: data[i].datetime1,
                    datetime2: data[i].datetime2,
                    details: data[i].details,
                })
            }
            this.data1 = pageData
            pageData.slice(0, this.pageSize)
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
