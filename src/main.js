import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import axios from 'axios'

Vue.use(iView)
Vue.use(ElementUI);
Vue.prototype.$http=axios
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
	axios,
  render: h => h(App)
}).$mount('#app')
