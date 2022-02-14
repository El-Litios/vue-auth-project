<template>
    <div v-if="user">
        <h1>PROTEGIDO</h1>
        <h1>Lista tareas por usuario</h1>
        <router-link :to="{ name: 'TaskAdd' }">
            <button>Agregar</button>
        </router-link>
        <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{item.id}} = {{item.nombre}}
                <router-link :to="{ name: 'TaskEdition', params: { id: item.id } }">
                    <button>Editar</button>
                </router-link> |
                <button @click="DeleteTask(item.id)">Borrar</button>
            </li>
        </ul>
        <h5>{{user.email}}</h5>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Dashboard',

    computed: {
        ...mapState(['user', 'tareas'])
    },

    methods: {
        ...mapActions(['getTasks', 'DeleteTask'])
    },

    created(){
        this.getTasks()
    }

}
</script>