import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from './router'

Vue.use(Vuex, axios, router);

export default new Vuex.Store({
    state: {
        serverRoute: 'http://localhost:8081',
    },

    mutations: {
        /*
        postService(state, id){
                axios.post(state.serverRoute + '/ruta', {id: id,})
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error)
                    })
        },
        getService(state)
        {
            axios.get(state.serverRoute + '/ruta')
                .then(response => {
                    console.log(response.data)
                    state.var = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },

         */
    }


})
