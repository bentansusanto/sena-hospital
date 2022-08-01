<template>
    <div class="wedos">
        <div class="container">
            <h1>{{wedo.title}}</h1>
            <p>{{wedo.content}}</p>
            <div class="row wedo">
                <div v-for="item in wedo.wedo" :key="item" class="col-12 col-md-6 col-lg-4 wedo1">
                    <img :src="item.icon">
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
            wedo : Object
        }
    }
</script>

<style scoped>
    .wedos {
        text-align: center;
        margin-top: 250px;
    }
    .wedos h1{
        font-weight: 700;
    }
    .wedos p{
        color: #a4a4a4;
    }
    .wedo{
        justify-content: center;
    }
    .wedo1{
        background-color: #ffff;
        box-shadow:0px 15px 30px rgba(67, 151, 210, 0.2);
        border-radius: 10px;
    }
    .wedo1 h4{
        font-weight: 600;
        font-size: 1.2rem;
    }
    /* Responsive */
    
    /* Large Desktop */
    @media(min-width: 1200px){
        .wedos h1{
            font-size: 2.5rem;
        }
        .wedos p{
            font-size: .9rem;
            width: 30%;
            margin: auto;
        }
        .wedo{
            margin-top: 50px;
            padding: 0 15px;
        }
        .wedo1{
            padding: 25px;
            margin: 15px;
            width: 25%;
        }
        .wedo1 h4{
            padding-top: 25px;
        }
        .wedo1 p{
            width: 80%;
        }
        .wedo1 img{
            width: 6rem;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .wedos h1{
            font-size: 2.2rem;
        }
        .wedos p{
            font-size: .9rem;
            width: 40%;
            margin: auto;
        }
        .wedo{
            margin-top: 50px;
            padding: 0 15px;
        }
        .wedo1{
            text-align: center;
            padding: 25px;
            margin: 15px auto;
            width: 30%;
        }
        .wedo1 h4{
            padding-top: 25px;
        }
        .wedo1 p{
            width: 80%;
        }
        .wedo1 img{
            width: 6rem;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .wedos h1{
            font-size: 2.2rem;
        }
        .wedos p{
            font-size: .9rem;
            width: 40%;
            margin: auto;
        }
        .wedo{
            margin-top: 50px;
            padding: 0 15px;
        }
        .wedo1{
            text-align: center;
            padding: 25px;
            margin: 15px auto;
            width: 30%;
        }
        .wedo1 h4{
            padding-top: 25px;
        }
        .wedo1 p{
            width: 80%;
        }
        .wedo1 img{
            width: 6rem;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .wedos h1{
            font-size: 2.2rem;
        }
        .wedos p{
            font-size: .9rem;
            width: 50%;
            margin: auto;
        }
        .wedo{
            margin-top: 50px;
            padding: 0 15px;
        }
        .wedo1{
            text-align: center;
            padding: 25px;
            margin: 15px auto;
            width: 45%;
        }
        .wedo1 h4{
            padding-top: 25px;
        }
        .wedo1 p{
            width: 80%;
        }
        .wedo1 img{
            width: 6rem;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .wedos h1{
            font-size: 1.8rem;
        }
        .wedos p{
            font-size: .9rem;
            width: 70%;
            margin: auto;
        }
        .wedo{
            margin-top: 50px;
            padding: 0 15px;
        }
        .wedo1{
            text-align: center;
            padding: 25px;
            margin: 15px auto;
        }
        .wedo1 h4{
            padding-top: 25px;
        }
        .wedo1 img{
            width: 6rem;
        }
    }
</style>