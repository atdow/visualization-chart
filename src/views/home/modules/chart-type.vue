<template>
  <div v-if="loadFinish" class="chart-type">
    <div v-for="(renderItem, category) in renderMap[chart.render]" :key="category">
      <el-divider class="chart-type-divider">{{ category }}</el-divider>

      <div v-for="(container, i) in renderItem" :key="i" style="display: block">
        <div class="radio-row">
          <div
            v-for="(item, idx) in container"
            :key="idx"
            style="position: relative; display: block"
            :style="{ top: item.isPlugin ? '5px' : '0' }"
          >
            <el-radio v-if="item.placeholder" value="" label="" disabled class="disabled-none-cursor">
              <svg-icon icon-class="" class="chart-icon" />
            </el-radio>
            <plugin-com v-else-if="item.isPlugin" :component-name="item.value + '-type'" />
            <el-radio v-else :value="item.value" :label="item.value" border class="radio-style">
              <span :title="item.title">
                <svg-icon :icon-class="item.icon" class="chart-icon" />
              </span>
              <p class="radio-label">{{ item.title }}</p>
            </el-radio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { TYPE_CONFIGS } from './data'
export default {
  name: 'ChartType',
  props: {
    chart: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loadFinish: false,
      renderMap: {},
      defaultTypes: TYPE_CONFIGS,
    }
  },
  components: {},
  watch: {},
  computed: {},
  created() {
    this.pluginTypes = [...this.defaultTypes]
    this.pluginTypes.forEach((item) => {
      const { render, category } = item
      this.renderMap[render] = this.renderMap[render] || {}
      const renderItem = this.renderMap[render]
      renderItem[category] = renderItem[category] || []

      const len = renderItem[category].length
      if (len === 0 || renderItem[category][len - 1].length === 3) {
        renderItem[category][len] = []
        renderItem[category][len].push(item)
      } else {
        renderItem[category][len - 1].push(item)
      }
    })

    // 填充占位符

    Object.keys(this.renderMap).forEach((key) => {
      Object.keys(this.renderMap[key]).forEach((category) => {
        this.renderMap[key][category].forEach((container) => {
          const len = container.length
          let reduc = 3 - len
          while (reduc--) {
            container.push({ placeholder: true })
          }
        })
      })
    })
    this.loadFinish = true
    // console.log('this.renderMap:', this.renderMap.antv)
  },
  mounted() {},
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
.chart-type {
  > div {
    width: 100%;
  }
  padding: 4px;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
  width: 100%;
}

.chart-icon {
  width: 80px;
  height: 40px;
}

.el-radio {
  margin: 5px;
}

.radio-row {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}

.chart-type-divider {
  width: auto;
}

.el-divider--horizontal {
  margin: 30px 0 14px 0;
}

.el-divider__text {
  font-size: 12px;
  font-weight: 400;
}

.radio-label {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
  text-align: center;
  height: 20px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
  font-size: 12px;
}

/deep/.el-radio__input {
  display: none !important;
}

.chart-type .radio-row .radio-style {
  width: 80px;
  height: 60px;
  padding: 0;
}
/deep/.el-radio__label {
  padding-left: 0 !important;
}
/deep/.el-radio--medium.is-bordered {
  padding: 10px 20px 0 10px;
  border-radius: 4px;
  height: 36px;
}
/deep/.el-radio.is-bordered {
  padding: 12px 20px 0 10px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 40px;
}
</style>