<template>
    <!-- 以下为单体蓄电池总览信息 -->
    <div class="xdc-container1" v-if="flag">
        <div class="xdc-title" id="xdc-title">
            <h3 style="text-align: center">电池列阵</h3>
        </div>
        <div id="xdc-main">
            <Row type="flex" justify="space-around" v-for="n in rowNUM" :key="n">
                <div
                    @click="clickXdc(i+(n-1)*colNUM)"
                    v-for="i in (n*colNUM>dataTotalNum)?(dataTotalNum%8):(colNUM)"
                    :key="i + (n-1)*colNUM"
                >
                    <Col span="6" class="xdc-content">
                        <span style="color: #20222A;text-align: center">蓄电池{{ i + (n-1)*colNUM }}</span>
                    </Col>
                </div>
            </Row>
        </div>
    </div>
    <!-- 以下为单体蓄电池细节信息 -->
    <div class="xdc-container2" v-else>
        <div class="xdc-title">
            <Button type="primary" @click="backward">
                <Icon type="md-arrow-back" />返回
            </Button>
        </div>
        <div>
            <xdc-details :data="xdcData" />
        </div>
    </div>
</template>

<script>
import XdcDetails from './xdcDetails'
import { getBatteryData } from '../api'

let data = []

export default {
    name: 'system',
    components: {
        XdcDetails,
    },
    data() {
        return {
            flag: true, // 组件显示标志
            colNUM: 8, // 蓄电池列阵的列数
            rowNUM: Math.ceil(localStorage.getItem('battery_num') / 8), // 蓄电池列阵的行数
            dataTotalNum: localStorage.getItem('battery_num'), // 蓄电池列阵中包含的蓄电池总数
            xdcData: data,
        }
    },
    methods: {
        clickXdc(obj) {
            getBatteryData(obj).then(response => {
                if (response.data.status === 'success') {
                    this.$Message.success({
                        background: true,
                        content: '数据加载成功',
                    })
                    for (let i = 0; i < response.data.data.length; i++) {
                        data.push(response.data.data[i])
                    }
                    this.flag = !this.flag
                } else {
                    this.$Message.error({
                        background: true,
                        content: '数据加载失败',
                    })
                }
            })
        },
        backward() {
            this.flag = !this.flag
            data = []
        },
    },
}
</script>

<style scoped>
.xdc-container1 {
    padding: 32px;
    height: 650px;
    overflow: auto;
    background-color: rgb(240, 242, 245);
}
.xdc-container2 {
    padding: 32px;
    height: 650px;
    overflow: auto;
    background-color: rgb(240, 242, 245);
}
.xdc-title {
    position: relative;
    width: 100%;
    height: 10%;
}
.xdc-content {
    background-image: url("../assets/imgs/xdc.png");
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: 100%;
    transition: 0.5s ease;
    cursor: pointer;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 10px;
    color: white;
    font-size: 1.5vh;
}
.xdc-content:hover {
    opacity: 100%;
    box-shadow:
         0 0.1px 0.7px skyblue,
         0 0.1px 1.7px skyblue,
         0 0.3px 3.1px skyblue,
         0 0.4px 5.6px skyblue,
         0 0.8px 10.4px skyblue,
         0 2px 25px skyblue;
}
</style>
