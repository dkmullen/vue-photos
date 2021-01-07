<template>
    <div>
        <AppHeader /> 
        <div class="ui container">
            <!-- Insert router output here -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
    name: 'App',
    components: {
        AppHeader
    }
}
</script>
