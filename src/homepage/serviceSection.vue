<template>
    <div class="services">
        <div class="container">
            <h1>Services we provide to <br> patients.</h1>
            <div class="row service">
                <div v-for="item in service" :key="item" class="col-12 col-lg-4 service1">
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
        props : {
            service : Object 
        }
    }
</script>

<style scoped>
    .services{
        margin-top: 250px;
    }
    .services h1{
        text-align: center;
        font-weight: 700;
    }
    .service{
        margin-top: 50px;
        text-align: center;
    }
    .service1{
        background-color: #ffff;
        border-radius: 10px;
        box-shadow:0px 15px 30px rgba(67, 151, 210, 0.3);
    }
    .service1 h4{
        padding-top: 20px;
    }
    
    /* Responsive */
    /* Large Desktop */
    @media(min-width: 1200px){
        .service{
            padding:0 10px;
            width: 80%;
            margin: 50px auto;
        }
        .service1{
            margin: 15px auto;
            padding: 15px;
            width: 28%;
        }
        .service1 p{
            width: 80%;
            margin: auto;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .service{
            padding:0 10px;
        }
        .service1{
            margin: 15px auto;
            padding: 15px;
            width: 30%;
        }
        .service1 p{
            width: 80%;
            margin: auto;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .service{
            padding:0 10px;
        }
        .service1{
            margin: 15px auto;
            padding: 15px;
            width: 30%;
        }
        .service1 p{
            width: 80%;
            margin: auto;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .service{
            padding:0 10px;
        }
        .service1{
            margin: 15px auto;
            padding: 15px;
            width: 45%;
        }
        .service1 p{
            width: 80%;
            margin: auto;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .services{
            margin-top: 150px;
        }
        .services h1{
            font-size: 1.8rem;
            width: 100%;
        }
        .service{
            padding:0 15px;
        }
        .service1{
            margin: 15px auto;
            padding: 15px;
        }
    }
</style>