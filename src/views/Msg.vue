<template>
    <div class="msg-main">
        <Card :bordered="false">
            <List v-for="n in message.length" :key="n">
                <ListItem :key="n">
                    <ListItemMeta
                        :avatar="msgIcon"
                        :title="message[n-1].title"
                        :description="message[n-1].desc"
                    />
                    <template slot="action">
                        <li><Button type="info" @click="clickInfo(message[n-1])">查看</Button></li>
                        <li><Button type="error" @click="clickDelete(n-1)">删除</Button></li>
                    </template>
                </ListItem><br>
            </List><br>
            <Page
                :total="msgNum"
                :page-size="6"
                show-elevator
                show-total
                @on-change="changePage"
            />
        </Card>
    </div>
</template>

<script>
// TODO: 测试数据，生产环境中需要注释掉
import mockData from '../testData/testMsgData'

export default {
    name: 'msg',
    data() {
        return {
            msgNum: mockData.length,
            message: this.getData(1),
            msgIcon: 'https://img0.baidu.com/it/u=169132545,1052093969&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        }
    },
    methods: {
        // 按页获取数据
        getData(currentPage) {
            let data = []
            for (let i = 6 * (currentPage - 1); i < ((6 * currentPage) > this.msgNum ? this.msgNum : (6 * currentPage)); i++) {
                data.push({
                    status: mockData[i].status,
                    title: mockData[i].title,
                    desc: mockData[i].desc,
                })
            }
            return data
        },
        changePage(value) {
            this.message = this.getData(value)
        },
        // 显示通知详情
        clickInfo(msg) {
            if (msg.status === 'success') {
                this.$Modal.success({
                    title: msg.title,
                    content: `成功信息：${msg.content}`,
                })
            } else if (msg.status === 'warning') {
                this.$Modal.warning({
                    title: msg.title,
                    content: `一些警告：${msg.content}`,
                })
            } else {
                this.$Modal.error({
                    title: msg.title,
                    content: `一些错误：${msg.content}`,
                })
            }
        },
        clickDelete(index) {
            this.message.splice(index, 1)
            this.msgNum -= 1
        },
    },
}
</script>

<style scoped>
.msg-main {
    margin: 15px 10px;
    height: 640px;
    overflow: auto;
}
</style>
