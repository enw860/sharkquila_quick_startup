import Vue from 'vue';
import store from './store/store'
import SKPlugins from "sharkquila_ui_toolkit";

import "./style/style.less";
import Welcome from './views/Welcome';

Vue.use(SKPlugins)

new Vue({
  store,
  render: h => h(Welcome),
  renderError: e => console.error(e)
}).$mount('#main-container');