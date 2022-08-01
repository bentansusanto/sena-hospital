<template>
    <heroSection :about="abouts"/>
    <contentSection :wedo="wedos" />
</template>

<script>
    import heroSection from '../about-us/heroSection.vue'
    import contentSection from '../about-us/contentSection.vue'
    export default {
        components:{
            heroSection,
            contentSection
        },
        data(){
            return{
                abouts: {
                    title : 'What is Sena Hospital ?',
                    content : ["Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."],
                    image : require('../assets/img-about/bg-about.svg')
                },
                wedos :{
                    title : 'What we do ?',
                    content : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                    wedo :[
                        {
                            title : 'Courageous',
                            content : "Lorem Ipsum has been the industry's.",
                            icon : require('../assets/img-about/courageous.svg')
                        },
                        {
                            title : 'Honesty',
                            content : "Lorem Ipsum has been the industry's.",
                            icon : require('../assets/img-about/honesty.svg')
                        },
                        {
                            title : 'Proud',
                            content : "Lorem Ipsum has been the industry's.",
                            icon : require('../assets/img-about/proud.svg')
                        },
                    ]
                }
            }
        }
    }
</script>

<style lang="postcss" scoped>

</style>