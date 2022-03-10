<template>
    <!-- 以下为单体蓄电池总览信息 -->
    <div class="xdc-container1" v-if="flag">
        <div class="xdc-title" id="xdc-title">
            <h3 style="text-align: center">电池列阵</h3>
        </div>
        <div>
            <Row type="flex" justify="space-around" v-for="n in rowNUM" :key="n">
                <div
                    @click="clickXdc(i+(n-1)*colNUM)"
                    v-for="i in (n*colNUM>dataTotalNum)?(dataTotalNum%rowNUM):(colNUM)"
                    :key="i + (n-1)*colNUM"
                >
                    <i-col span="6" class="xdc-content">
                        <span style="color: #20222A;text-align: center">蓄电池{{ i + (n-1)*colNUM }}</span>
                        <img :src="imgUrl" class="xdc-img" />
                    </i-col>
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
            <xdc-details />
        </div>
    </div>
</template>

<script>
import xdcDataFri from '../testData/testXdcData_Fri'
import XdcDetails from './xdcDetails'

export default {
    name: 'system',
    components: {
        XdcDetails,
    },
    data() {
        return {
            flag: true, // 组件显示标志
            colNUM: 8, // 蓄电池列阵的列数
            rowNUM: Math.ceil(xdcDataFri.length / 8), // 蓄电池列阵的行数
            dataTotalNum: xdcDataFri.length, // 蓄电池列阵中包含的蓄电池总数
            imgUrl: require('../assets/imgs/xdc.png'),
        }
    },
    methods: {
        clickXdc(obj) {
            this.flag = !this.flag
            return obj
        },
        backward() {
            this.flag = !this.flag
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
    /*background-image: url("../assets/imgs/xdc.png");*/
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: inherit;
    transition: 0.5s ease;
    cursor: pointer;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 10px;
    color: #2f54eb;
    font-size: 1.5vh;
}
.xdc-img {
    height: 90px;
    width: 90px
}
.xdc-img:hover {
    opacity: inherit;
    box-shadow:
         0 0.1px 0.7px skyblue,
         0 0.1px 1.7px skyblue,
         0 0.3px 3.1px skyblue,
         0 0.4px 5.6px skyblue,
         0 0.8px 10.4px skyblue,
         0 2px 25px skyblue;
}
</style>
