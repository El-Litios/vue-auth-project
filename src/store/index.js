import Vue from 'vue'
import Vuex from 'vuex'
import {auth, db} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    tareas: [],
    tarea: {nombre: '', id: ''}
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },

    setError(state, payload){
      state.error = payload
    },

    setTasks(state, payload){
      state.tareas = payload
    },

    setTaskById(state, payload){
      state.tarea = payload
    },

    unsetTaskAfterDelete(state, payload){
      state.tareas = state.tareas.filter(t => t.id !== payload)
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

        db.collection(res.user.uid).add({
          nombre: 'tarea'
        }).then(doc => {
          commit('setUser', user)
          router.push('/dashboard')
        }).catch(err => {
          console.log(err);
        })

        
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
    },

    async logoutUser({commit}){
      await auth.signOut()
        .then(res => {
          
          router.push('/')
        })
        .catch(err => {
          console.log(err);
          commit('setError', err)
        })
    },

    detectUser({commit}, userobj){
      commit('setUser', userobj)
    },


    async getTasks({commit, state}){
      const tasks = []
      await db.collection(state.user.id).get()
        .then(res => {
          res.forEach(doc => {
            console.log(doc.id)
            console.log(doc.data())
            let task = doc.data()
            task.id = doc.id
            tasks.push(task)
          })
          commit('setTasks', tasks)
        })
    },


    //TAREAS

    async getTaskById({commit, state}, id){
      await db.collection(state.user.id).doc(id).get()
        .then(doc => {
          let task = doc.data()
          task.id = doc.id
          commit('setTaskById', task)
        })
        .catch(err => console.log(err))
    },

    async SaveTaskChanges({commit, state}, task){
      await db.collection(state.user.id).doc(task.id).update({
        nombre: task.nombre
      })
      .then(() => {
        router.push({name: 'Dashboard'})
      })
      .catch(err => console.log(err))
    },

    async SaveTask({commit, state}, name){
      await db.collection(state.user.id).add({
        nombre: name
      })
      .then(() => {
        router.push({name: 'Dashboard'})
      })
      .catch(err => console.log(err))
    },

    async DeleteTask({commit, state}, id){
      await db.collection(state.user.id).doc(id).delete()
        .then(() => {
          commit('unsetTaskAfterDelete', id)
        })
        .catch(err => console.log(err))
    }


    

  },

  getters: {
    userExists(state){
      if(state.user === null){
        return false
      }else{
        return true
      }
    }
  },

  modules: {
  }
})
