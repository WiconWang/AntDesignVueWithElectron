<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  mounted() {
    // 打包后 Electron 在载入的时候不会默认载入到 " / " 这个默认路径下 ，这里强制跳一次
    this.$router.push('/')
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
