import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import * as singleSpa from 'single-spa';

singleSpa.registerApplication(
    'appVueHistory',
    () => window.systemjs.import('appVueHistory'),
    location => location.pathname.startsWith('/app-vue-history/'),
    { authToken: "d83jD63UdZ6RS6f70D0", data2: 'data2' } //传给子系统的数据
)
singleSpa.registerApplication(
    'appVueHash',
    () => window.systemjs.import('appVueHash'),
    location => location.pathname.startsWith('/app-vue-hash/')
)
singleSpa.start();


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
