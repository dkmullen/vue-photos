<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="item">Image Storage</router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="item">Galleries</router-link>
                <router-link to="/upload" class="item">Upload</router-link>
                <a class="item" @click="logout">Logout</a>
            </div>
            <!-- v-else has to come on the very next div after v-if -->
            <a v-else href="#" class="ui item" @click="login">Log In</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; // mapActions here and the item below connect action to component
                            // Don't have to specify that login is in the auth module
export default {            // vuex scans all modules for methods
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout']) // this is how we connect an action (from our auth.js) to a component
}
</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}
</style>
