<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-05-17 22:55:10
 * @Description: file description
-->
<template>
  <div class="s-home">
    <div class="side-bar">
      <div class="button-div-class">
        <el-button circle class="el-icon-s-tools" size="mini" @click="showPanel" />
        <p class="label-class">组件</p>
      </div>
    </div>
    <div class="main-content">
      {{ view }}
      <chart-component-g2 v-if="view.render === 'antv' && view.type" :chart="view" />
      <chart-component v-if="view.render === 'echarts' && view.type" :chart="view" />
    </div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawerVisible"
      direction="ltr"
      :with-header="false"
      :before-close="handleClose"
      :size="500"
      :modal="false"
      class="component-drawer"
    >
      <div class="component-drawer-content">
        <div class="component-drawer-content-header">
          <span>图表类型</span>
          <span>
            <el-select v-model="view.render" class="render-select" style="width: 100px" size="mini">
              <el-option v-for="item in renderOptions" :key="item.value" :value="item.value" :label="item.name" />
            </el-select>
          </span>
        </div>
        <div>
          <!-- 使用el-radio-group实现view.type数据绑定 -->
          <el-radio-group v-model="view.type" style="width: 100%">
            <chart-type ref="cu-chart-type" :chart="view" />
          </el-radio-group>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import ChartType from './modules/chart-type.vue'
import ChartComponentG2 from '../component/chart-component-g2'
import ChartComponent from '../component/chart-component'
export default {
  name: 'Index',
  data() {
    return {
      drawerVisible: false,
      view: {
        type: '',
        render: 'antv',
      },
      renderOptions: [
        { name: 'AntV', value: 'antv' },
        { name: 'ECharts', value: 'echarts' },
      ],
    }
  },
  components: {
    ChartType,
    ChartComponentG2,
    ChartComponent,
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {
    showPanel() {
      this.drawerVisible = true
    },
    handleClose() {
      this.drawerVisible = false
    },
  },
}
</script>
<style lang="less" scoped>
.side-bar {
  width: 60px;
  height: 100vh;
  overflow: hidden auto;
  position: relative;
  font-size: 14px;
  border-right: 1px solid rgb(230, 230, 230);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2022;
  box-sizing: border-box;
  .button-div-class {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(230, 230, 230);
    .el-icon-s-tools {
      margin-top: 14px;
    }
    .label-class {
      margin-top: 14px;
    }
  }
}
.main-content {
  position: relative;
  left: 60px;
  right: 0;
  top: 0;
  bottom: 0;
}
.component-drawer {
  /deep/.el-drawer {
    padding-left: 60px;
    .component-drawer-content {
      padding: 20px;
      .component-drawer-content-header {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
