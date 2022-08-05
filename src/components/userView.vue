<template>
    <app-nav/>
    <router-view/>
    <app-foot/>
</template>

<script>
    import appNav from '../navfot/navView.vue'
    import appFoot from '../navfot/footView.vue'
    export default {
        components :{
            appNav,
            appFoot
        }
    }
</script>

<style scoped>

</style>