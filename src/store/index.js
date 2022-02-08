import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },

    setError(state, payload){
      state.error = payload
    }

  },
  actions: {
    async createUser({commit}, userobj){
     await auth.createUserWithEmailAndPassword(userobj.email, userobj.password)
      .then(res => {
        const user = {
          email: res.user.email,
          id: res.user.uid
        }
        commit('setUser', user)
        router.push('/dashboard')
      })
      .catch(err => {
        console.log(err);
        commit('setError', err)
      })
    },


    async loginUser({commit}, userobj){
      await auth.signInWithEmailAndPassword( userobj.email, userobj.password)
        .then(res => {
          const user = {
            email: res.user.email,
            id: res.user.uid
          }
          commit('setUser', user)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err);
          commit('setError', err)
        })
    }

    

  },
  modules: {
  }
})
