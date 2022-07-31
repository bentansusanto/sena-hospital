<template>
    <heroSection :about="about"/>
    <serviceSection :service="service"/>
    <whySection :whys="whys" :why="why"/>
    <testimoniSection :testimonis="testimonis"/>
    <subsSection :subscribe="subscribes"/>
</template>

<script>
    import heroSection from '../homepage/heroSection.vue'
    import serviceSection from '../homepage/serviceSection.vue'
    import whySection from '../homepage/whySection.vue'
    import testimoniSection from '../homepage/testimoniSection.vue'
    import subsSection from '../homepage/subsSection.vue'
    export default {
        components : {
            heroSection,
            serviceSection,
            whySection,
            testimoniSection,
            subsSection
        },
        data(){
            return{
                about : {
                    title : "We're Always Ready to Help",
                    content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    image : require('../assets/img-home/bg-hero.svg')
                },  
                    service : [
                        {
                            title : 'Diagnostics',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                            icon : require('../assets/img-home/diagnostics.png')
                        },
                        {
                            title : 'Cardiology',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                            icon : require('../assets/img-home/cardiology.png')
                        },
                        {
                            title : 'CT Scanner',
                            content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                            icon : require('../assets/img-home/ct-scanner.png')
                        }, 
                    ],
                    whys : {
                        title : 'Why choose our hospital ?',
                        content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    },
                    why : [
                        {
                            title : '24/7 patients support',
                            image : require('../assets/img-home/24:7.svg')
                        },
                        {
                            title : 'Profesional-Doctors',
                            image : require('../assets/img-home/profesional-doctors.svg')
                        },
                        {
                            title : 'Family-Medicine',
                            image : require('../assets/img-home/family-medicine.svg')
                        },
                    ],
                    testimonis : {
                         title : 'Testimonials',
                         testimoni : [
                            {
                                name  : 'Benny Tan Susanto',
                                work : 'patients',
                                testi : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                                actor : require('../assets/img-home/personal.svg')
                            },
                            {
                                name  : 'Benny Tan Susanto',
                                work : 'patients',
                                testi : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                                actor : require('../assets/img-home/personal.svg')
                            },
                            {
                                name  : 'Benny Tan Susanto',
                                work : 'patients',
                                testi : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                                actor : require('../assets/img-home/personal.svg')
                            },
                         ]
                    },

                    subscribes : {
                        title : 'Psst...',
                        content : "don't know anything else, if you want the latest news about us please subscribe.",
                        image : require('../assets/img-home/bg-subscribe.svg')
                    }   
            }
        }
    }
</script>

<style scoped>
    
</style>