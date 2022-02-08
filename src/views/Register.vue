<template>
    <div>
        <h1>Registro</h1>
        <form @submit.prevent="createUser({email: email, password: pass})">
            <input type="email" v-model="email" placeholder="Correo">
            <input type="password" v-model="pass" placeholder="Contraseña">
            <input type="password" v-model="repeatedpass" placeholder="Repita Contraseña">
            <button :disabled="!disableButton" type="submit">Registrarse</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            pass: '',
            repeatedpass: ''
        }
    },

    methods: {
        ...mapActions(['createUser'])
    },

    computed: {
        ...mapState(['error']),
        disableButton(){
            return this.pass === this.repeatedpass && this.pass.trim() !== '' && this.pass.length > 5
        }
    }
}
</script>