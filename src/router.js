import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import View1 from "./views/View1";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/view1',
            name: 'View1',
            component: View1
        },
    ]
})
