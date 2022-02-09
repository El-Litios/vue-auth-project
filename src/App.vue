<template>
  <div id="app">
    <div class="nav">
      <router-link v-if="!userExists" to="/">Login</router-link> 
      <router-link v-if="userExists" to="/dashboard">Inicio</router-link> |
      <router-link v-if="!userExists" to="/register">Registro</router-link> |
      <button v-if="userExists" @click="logoutUser">Cerrar sesion</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['logoutUser'])

  },

  computed: {
    ...mapGetters(['userExists'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
