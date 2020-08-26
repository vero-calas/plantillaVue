import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTheMask from 'vue-the-mask'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueTheMask)
Vue.config.productionTip = false
import router from './router'
import store from './store'

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
