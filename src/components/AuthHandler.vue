<template>
    <div>
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {  // lifecycle hook, runs before the component is mounted in the DOM
        this.finalizeLogin(window.location.hash); // gets everything in th url to the right of #
    }
}
</script>
