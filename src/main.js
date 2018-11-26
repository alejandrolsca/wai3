import Vue from "vue";
import "bulma/css/bulma.min.css";
import LineClamp from 'vue-line-clamp';
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";

import "./registerServiceWorker";

Vue.use(LineClamp)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
