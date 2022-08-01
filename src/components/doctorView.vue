<template>
    <contentSection :doctors="doctors"/>
</template>

<script>
    import contentSection from '../our-doctor/contentSection.vue'
    export default {
        components:{
            contentSection
        },
        data(){
            return{
                doctors : {
                    title : 'Best doctors in Sena Hospital.',
                    content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                    doctor : [
                        {
                            name : 'Dr. Indrawan',
                            specialist : 'Specialist Bedah',
                            quotes : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                            image : require('../assets/img-doctor/doctor.svg'),
                            icon : 'https://img.icons8.com/ios/30/ffffff/whatsapp--v1.png',
                            button : 'Contact Doctor'
                        },
                        {
                            name : 'Dr. Indrawan',
                            specialist : 'Specialist Bedah',
                            quotes : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                            image : require('../assets/img-doctor/doctor.svg'),
                            icon : 'https://img.icons8.com/ios/30/ffffff/whatsapp--v1.png',
                            button : 'Contact Doctor'
                        },
                        {
                            name : 'Dr. Indrawan',
                            specialist : 'Specialist Bedah',
                            quotes : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                            image : require('../assets/img-doctor/doctor.svg'),
                            icon : 'https://img.icons8.com/ios/30/ffffff/whatsapp--v1.png',
                            button : 'Contact Doctor'
                        },
                        {
                            name : 'Dr. Indrawan',
                            specialist : 'Specialist Bedah',
                            quotes : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                            image : require('../assets/img-doctor/doctor.svg'),
                            icon : 'https://img.icons8.com/ios/30/ffffff/whatsapp--v1.png',
                            button : 'Contact Doctor'
                        },
                        {
                            name : 'Dr. Indrawan',
                            specialist : 'Specialist Bedah',
                            quotes : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                            image : require('../assets/img-doctor/doctor.svg'),
                            icon : 'https://img.icons8.com/ios/30/ffffff/whatsapp--v1.png',
                            button : 'Contact Doctor'
                        },
                        {
                            name : 'Dr. Indrawan',
                            specialist : 'Specialist Bedah',
                            quotes : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                            image : require('../assets/img-doctor/doctor.svg'),
                            icon : 'https://img.icons8.com/ios/30/ffffff/whatsapp--v1.png',
                            button : 'Contact Doctor'
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>