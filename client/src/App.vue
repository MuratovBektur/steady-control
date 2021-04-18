<template>
  <div id="app">
    <h2 align="center">SteadyControl</h2>
    <vTreeTest />
  </div>
</template>

<script>
import vTreeTest from "./components/v-tree-test.vue";
export default {
  name: "App",
  components: {
    vTreeTest,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
}
.ant-tooltip-inner {
  min-height: auto !important;
}
</style>
