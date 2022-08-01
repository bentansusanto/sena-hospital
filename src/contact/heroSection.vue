<template>
    <div class="heros">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h1>{{heros.title}}</h1>
                    <p class="pt-2">{{heros.content}}</p>
                </div>
                <div class="col-12 col-lg-6">
                    <img :src="heros.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            heros : Object
        }
    }
</script>

<style scoped>
    .heros{
        margin-top: 160px;
    }
    .heros h1{
        font-weight: 700;
    }
    img{
        width: 80%;
    }
    /* Responsive */
    /* Medium Desktop */
    @media(min-width: 1200px){
         .heros{
            text-align: left;
        }
        .heros h1{
            font-size: 2.5rem;
            width: 70%;
        }
        .heros p{
            width: 60%;
        }
        img{
            width: 70%;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
         .heros{
            text-align: left;
        }
        .heros h1{
            font-size: 2.2rem;
            width: 80%;
        }
        .heros p{
            width: 70%;
        }
        img{
            width: 80%;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
         .heros{
            text-align: left;
        }
        .heros h1{
            font-size: 2.2rem;
            width: 80%;
        }
        .heros p{
            width: 70%;
        }
        img{
            width: 80%;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .heros{
            margin-top: 150px;
            text-align: center;
        }
        .heros h1{
            font-size: 2.2rem;
            width: 70%;
            margin: auto;
        }
        .heros p{
            width: 50%;
            margin: auto;
        }
        img{
            width: 60%;
            margin-top: 50px;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .heros{
            margin-top: 150px;
            text-align: center;
        }
        .heros h1{
            font-size: 1.8rem;
        }
        .heros p{
            width: 80%;
            margin: auto;
        }
        img{
            width: 80%;
            margin-top: 50px;
        }
    }
</style>