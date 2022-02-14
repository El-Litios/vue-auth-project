<template>
  <div>
      <h1>Edición de Tareas</h1>
      {{id}} - {{tarea.nombre}}
      <form @submit.prevent="SaveTaskChanges(tarea)">
          <input type="text" v-model="tarea.nombre">
          <button type="submit">Editar</button>
      </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'TaskEdition',
    data() {
        return{
            id: this.$route.params.id
        }
    },

    created(){
        this.getTaskById(this.id)
    },

    methods: {
        ...mapActions(['getTaskById', 'SaveTaskChanges'])
    },

    computed: {
        ...mapState(['tarea'])
    }
}
</script>

<style>

</style>