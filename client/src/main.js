import Vue from "vue";
import App from "./App.vue";
import { Tree, Tooltip } from "ant-design-vue";

import "ant-design-vue/lib/tree/style/index.css";
import "ant-design-vue/lib/tooltip/style/index.css";

Vue.config.productionTip = false;

Vue.use(Tree);
Vue.use(Tooltip);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
