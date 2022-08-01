<template>
    <div class="abouts">
        <div class="container">
            <div class="row about">
                <div class="col-12 col-lg-6">
                    <h1>{{about.title}}</h1>
                    <p class="pt-2">{{about.content[0]}}</p>
                    <p>{{about.content[1]}}</p>
                </div>
                <div class="col-12 col-lg-6">
                    <img :src="about.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            about:Object
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
    }
    .about h1{
        font-weight: 700;
    }
    /* Responsive */
    /* Medium Desktop */
    @media(min-width: 1200px){
        .abouts{
            margin-top: 160px;
        }
        .about{
            text-align: left;
        }
        .about h1{
            font-size: 2.5rem;
        }
        .about p{
            width: 70%;
        }
        .about img{
            width: 90%;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .abouts{
            margin-top: 100px;
        }
        .about{
            text-align: left;
        }
        .about h1{
            font-size: 2.2rem;
        }
        .about p{
            width: 90%;
        }
        .about img{
            width: 90%;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .abouts{
            margin-top: 100px;
        }
        .about{
            text-align: left;
        }
        .about h1{
            font-size: 2.2rem;
        }
        .about p{
            width: 90%;
        }
        .about img{
            width: 90%;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .abouts{
            margin-top: 100px;
        }
        .about{
            text-align: center;
        }
        .about h1{
            font-size: 2.2rem;
        }
        .about p{
            width: 70%;
            margin: auto;
        }
        .about img{
            width: 70%;
            margin-top: 50px;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .abouts{
            margin-top: 100px;
        }
        .about h1{
            font-size: 1.8rem;
        }
        .about img{
            margin-top: 50px;
        }
    }
</style>