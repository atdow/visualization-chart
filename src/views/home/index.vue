<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 20:33:13
 * @Description: file description
-->
<template>
  <div class="s-home">0</div>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {
      count: 0,
      contentHeight: 0,
    }
  },
  components: {},
  mounted() {},
  updated() {
    this.setCodeHighLight()
    this.addExpand(true)
    this.addExpand()
  },
  methods: {},
}
</script>
<style lang="less" scoped></style>
