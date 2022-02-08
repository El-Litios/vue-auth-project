<template>
  <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUser({email: email, password: pass})">
            <input type="email" v-model="email" placeholder="Correo">
            <input type="password" v-model="pass" placeholder="Contraseña">
            <button  type="submit">Ingresar</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
 name: 'Login',
 data() {
    return {
        email: null,
        pass: null
    }
 },

 methods: {
    ...mapActions(['loginUser']),
 },

 computed: {
     ...mapState(['error'])
 }
}
</script>

<style>

</style>