<template>
    <Row :gutter="40" class-name="panel-group">
        <Col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('voltage')">
                <div class="card-panel-icon-wrapper icon-people">
                    <Icon type="md-analytics" class="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">系统电压</div>
                    <count-to :start-val="0" :end-val="panelData.voltage" :duration="0.1" class="card-panel-num" />
                </div>
            </div>
        </Col>
        <Col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('current')">
                <div class="card-panel-icon-wrapper icon-message">
                    <Icon type="ios-flash" class="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">系统电流</div>
                    <count-to :start-val="0" :end-val="panelData.current" :duration="0.01" class="card-panel-num" />
                </div>
            </div>
        </Col>
        <Col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('temperature')">
                <div class="card-panel-icon-wrapper icon-money">
                    <Icon type="ios-flame" class="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">系统温度</div>
                    <count-to :start-val="0" :end-val="panelData.temperature" :duration="1" class="card-panel-num" />
                </div>
            </div>
        </Col>
        <Col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('num')">
                <div class="card-panel-icon-wrapper icon-shopping">
                    <Icon type="ios-barcode" class="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">电池数量</div>
                    <count-to :start-val="0" :end-val="panelData.num" :duration="1" class="card-panel-num" />
                </div>
            </div>
        </Col>
    </Row>
</template>

<script>
import CountTo from 'vue-count-to'
import { getDashboardData } from '../../api'

let data = {
    voltage: 0,
    current: 0,
    temperature: 0,
    num: 0,
}

getDashboardData().then(response => {
    let last = response.data.data.length - 1
    data.voltage = response.data.data[last].fields.total_voltage
    data.current = response.data.data[last].fields.max_current
    data.temperature = response.data.data[last].fields.max_temperature
    data.num = response.data.data[last].fields.battery_num
})

export default {
    name: 'PanelGroup',
    data() {
        return {
            panelData: data,
        }
    },
    components: {
        CountTo,
    },
    methods: {
        handleSetLineChartData(type) {
            this.$emit('handleSetLineChartData', type)
        },
    },
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
