<template>
    <Navbar/>
    <router-view/>
    <Footer/>
</template>

<script>
import Navbar from './navfot/navView.vue'
import Footer from './navfot/footView.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

