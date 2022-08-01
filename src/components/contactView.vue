<template>
    <div>
        <heroSection :heros="heros"/>
        <contactSection :contacts="contact"/>
    </div>
</template>

<script>
    import heroSection from '../contact/heroSection.vue'
    import contactSection from '../contact/contactSection.vue'
    export default {
        components:{
            heroSection,
            contactSection
        },
        data(){
            return{
                heros : {
                    title : "We’re happy to help you today.",
                    content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                    image : require('../assets/img-contact/bg-contact.svg')
                },
                contact : {
                    title : 'Contact from whatsapp',
                    icon : require('../assets/img-contact/icon-contact.svg')
                }
            }
        }
    }
</script>

<style scoped>

</style>