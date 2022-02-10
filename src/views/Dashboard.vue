<template>
    <div v-if="user">
        <h1>PROTEGIDO</h1>
        <h1>Lista tareas por usuario</h1>
        <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{item.id}} = {{item.nombre}}
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
        ...mapActions(['getTasks'])
    },

    created(){
        this.getTasks()
    }

}
</script>