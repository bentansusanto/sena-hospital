<template>
    <div class="services">
        <div class="container">
            <h1>{{services.title}}</h1>
            <p>{{services.content}}</p>
            <div class="row service">
                <div v-for="item in services.service" :key="item" class="col-12 col-md-6 col-lg-4 service1">
                    <img :src="item.icon" alt="">
                    <h4>{{item.title}}</h4>
                    <p>{{item.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props :{
            services : Object
        }
    }
</script>

<style scoped>
    .services{
        margin-top: 160px;
        text-align: center;
    }
    .services h1{
        font-weight: 700;
    }
    .services p{
        font-size: .9rem;
        color: #a4a4a4;
    }
    .service{
        justify-content: center;
    }
    .service1{
        border: 3px solid blue;
        border-radius: 10px;
        padding: 25px;
    }
    .service1 h4{
        font-weight: 600;
        font-size: 1.2rem;
        padding-top: 15px;
    }
    /* Responsive */
        /* Medium Desktop */
    @media(min-width: 1200px){
        .services h1{
            width: 40%;
            margin: auto;
        }
        .services p{
            width: 30%;
            margin: auto;
            padding-top: 10px;
        }
        .service{
            margin-top: 50px;
            padding: 0 15px;
        }
        .service1{
            margin: 15px 15px;
            width: 28%;
        }
        .service1 p{
            width: 90%;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .services h1{
            width: 60%;
            margin: auto;
        }
        .services p{
            width: 40%;
            margin: auto;
            padding-top: 10px;
        }
        .service{
            margin-top: 50px;
            padding: 0 15px;
        }
        .service1{
            margin: 15px auto;
            width: 30%;
        }
        .service1 p{
            width: 90%;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .services h1{
            width: 60%;
            margin: auto;
        }
        .services p{
            width: 35%;
            margin: auto;
            padding-top: 10px;
        }
        .service{
            margin-top: 50px;
            padding: 0 15px;
        }
        .service1{
            margin: 15px auto;
            width: 30%;
        }
        .service1 p{
            width: 90%;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .services{
            margin-top: 150px;
        }
        .services h1{
            width: 80%;
            margin: auto;
        }
        .services p{
            width: 50%;
            margin: auto;
            padding-top: 10px;
        }
        .service{
            margin-top: 50px;
            padding: 0 15px;
        }
        .service1{
            margin: 15px auto;
            width: 45%;
        }
        .service1 p{
            width: 80%;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .services{
            margin-top: 150px;
        }
        .services h1{
            width: 80%;
            margin: auto;
        }
        .services p{
            width: 80%;
            margin: auto;
            padding-top: 10px;
        }
        .service{
            margin-top: 50px;
            padding: 0 15px;
        }
        .service1{
            margin: 15px auto;
        }
    }
</style>