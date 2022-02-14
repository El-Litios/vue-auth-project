<template>
  <div>
      <h1>Adicion de Tareas</h1>
      <form @submit.prevent="SaveTask(nombre)">
          <input type="text" v-model="nombre">
          <button type="submit">Agregar</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'TaskAdd',
    data() {
        return {
            nombre: ''
        }
    },

    methods: {
        ...mapActions(['SaveTask'])
    }
}
</script>

<style>

</style>