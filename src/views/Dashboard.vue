<template>
    <div v-if="user">
        <h1>PROTEGIDO</h1>

        <h5>{{user.email}}</h5>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Dashboard',

    computed: {
        ...mapState(['user'])
    }

}
</script>