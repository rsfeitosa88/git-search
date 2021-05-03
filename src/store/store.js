import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    user: [],
    repos: [],
    url: 'https://api.github.com/users',
    client_id: 'Iv1.54ce060fd82f8163',
    client_secret: '1a6db76effa27c0a25e4e037ff6f61ee9e921283',
    count: 10,
    sort: 'created: asc',
  },
  mutations: {
    SET_USER_INFO(state, user) {
      state.user = user
      console.log(state.user)
    },
    SET_USER_REPO(state, repos) {
      state.repos = repos
      console.log(state.repos)
    }
  },
  actions: {
    GET_USER_INFO({commit}, payload) {
      const { url, client_id, client_secret, count, sort } = this.state
      axios
        .get(`${url}/${payload}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(({data}) => commit('SET_USER_INFO', data))
      
      axios
        .get(`${url}/${payload}/repos?per_pages=${count}$sort=${sort}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(({data}) => commit('SET_USER_REPO', data))
    }
  },
  getters: {
    
  }
})