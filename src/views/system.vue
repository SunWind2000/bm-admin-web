<template>
    <div class="xdc-container">
        <div class="xdc-title">
            <h3 style="text-align: center">电池列阵</h3>
        </div>
        <div>
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
</template>

<script>
import xdcDataFri from '../testData/testXdcData_Fri'

export default {
    name: 'system',
    data() {
        return {
            colNUM: 8, // 蓄电池列阵的列数
            rowNUM: Math.ceil(xdcDataFri.length / 8), // 蓄电池列阵的行数
            dataTotalNum: xdcDataFri.length, // 蓄电池列阵中包含的蓄电池总数
        }
    },
    methods: {
        clickXdc(obj) {
            alert(obj)
        },
    },
}
</script>

<style scoped>
.xdc-container {
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
    opacity: 50%;
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
}
</style>
