import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'

import './mock/mockSerer'  //引入就行
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h =>h(App),
  router,
  store
})
