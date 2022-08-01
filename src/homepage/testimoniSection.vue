<template>
    <div class="testimonis">
        <div class="container">
            <h1>{{testimonis.title}}</h1>
            <div class="row testimoni">
                <div v-for="item in testimonis.testimoni" :key="item" class="col-12 col-md-12 col-lg-3 testimoni1">
                    <div class="testi d-flex">
                            <img :src="item.actor" alt="">
                            <div class="testi1">
                                <h4>{{item.name}}</h4>
                                <p>{{item.work}}</p>
                            </div>
                    </div>
                    <p>{{item.testi}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            testimonis : Object
        }
    }
</script>

<style scoped>
    .testimonis{
        margin-top: 250px;
    }
    .testimonis h1{
        font-weight: 700;
    }
    .testimoni1{
        background-color: #fcfcfc;
        border-radius: 10px;
        padding: 15px 20px;
        transition: all .3s ease-out;
    }
    .testimoni1:hover{
        background-color: #ffff;
        box-shadow:0px 15px 30px rgba(67, 151, 210, 0.3);
    }
    .testi{
        align-items: center;
    }
    .testi1 h4{
        font-size: 1.3rem;
    }
    .testi1 p{
        color: #a4a4a4;
    }
    /* Responsive */
    /* Large Desktop */
    @media(min-width: 1200px){
         .testimonis{
            margin-top: 150px;
        }
        .testimonis h1{
            text-align: left;
        }
        .testimoni{
            margin-top: 50px;
            padding: 0 15px;
            margin-left: -25px;
        }
        .testimoni1{
            margin: 15px 15px;
            width: 30%;
        }
        .testi1{
            margin-left: 20px;
            margin-top: 10px;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
         .testimonis{
            margin-top: 150px;
        }
        .testimonis h1{
            text-align: left;
        }
        .testimoni{
            margin-top: 50px;
            padding: 0 15px;
            margin-left: -30px;
        }
        .testimoni1{
            margin: 15px auto;
            width: 31%;
        }
        .testi1{
            margin-left: 20px;
            margin-top: 10px;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
         .testimonis{
            margin-top: 150px;
        }
        .testimonis h1{
            text-align: left;
        }
        .testimoni{
            margin-top: 50px;
            padding: 0 15px;
            margin-left: -20px;
        }
        .testimoni1{
            margin: 10px auto;
            width: 32%;
        }
        .testi1{
            margin-left: 20px;
            margin-top: 10px;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
         .testimonis{
            margin-top: 150px;
        }
        .testimonis h1{
            text-align: center;
        }
        .testimoni{
            margin-top: 50px;
            padding: 0 15px;
        }
        .testimoni1{
            margin: 15px auto;
            width: 55%;
        }
        .testi1{
            margin-left: 20px;
            margin-top: 10px;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .testimonis{
            margin-top: 150px;
        }
        .testimonis h1{
            text-align: center;
        }
        .testimoni{
            margin-top: 50px;
            padding: 0 15px;
        }
        .testimoni1{
            margin: 15px auto;
        }
        .testi1{
            margin-left: 20px;
            margin-top: 10px;
        }
    }
</style>