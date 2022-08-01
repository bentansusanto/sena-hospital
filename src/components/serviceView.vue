<template>
    <contentSection :services="services"/>
</template>

<script>
    import contentSection from '../service/contentSection.vue'
    export default {
        components:{
            contentSection
        },
        data(){
            return{
                services : {
                    title : 'Services we provide to patients.',
                    content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                    service :[
                        {
                            title : 'Diagnostics',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                            icon : require('../assets/img-service/diagnostics.png')
                        },
                        {
                            title : 'Cardiology',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                            icon : require('../assets/img-service/cardiology.png')
                        },
                        {
                            title : 'CT-Scanner',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                            icon : require('../assets/img-service/ct-scanner.png')
                        },
                        {
                            title : 'Diagnostics',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                            icon : require('../assets/img-service/diagnostics.png')
                        },
                        {
                            title : 'Cardiology',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                            icon : require('../assets/img-service/cardiology.png')
                        },
                        {
                            title : 'CT-Scanner',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                            icon : require('../assets/img-service/ct-scanner.png')
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>