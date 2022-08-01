<template>
    <div class="whys">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h1>{{whys.title}}</h1>
                    <p>{{whys.content}}</p>
                    <a href="#" class="btn btn-primary">See more</a>
                </div>
                <div class="col-12 col-lg-6 why2">
                    <div class="row justify-content-center why">
                        <div v-for="item in why" :key="item" class="col-12 col-md-6 why1">
                            <img :src="item.image">
                            <h4>{{item.title}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props :{
            whys :Object,
            why : Object
        }
    }
</script>

<style scoped>
        .whys{
            margin-top: 100px;
        }
        .whys h1{
            font-weight: 700;
        }
        .whys p{
            padding-top: 15px;
        }
        .why1 h4{
            padding-top: 20px;
            font-size: 1.2rem;
        }
        .why{
            padding: 0 15px;
        }
        .why1{
            text-align: center;
            background-color: #ffff;
            box-shadow:0px 15px 30px rgba(67, 151, 210, 0.3);
            padding: 25px;
            border-radius: 10px;
        }
        img{
            width: 8rem;
        }
        .whys a{
            background-color: #4397D2;
            border: none;
            border-radius: 50px;
            padding: 8px 16px; 
            transition: all .2s ease-out; 
        }
        .whys a:hover{
            background-color: #4397D2;
            border: none;
            box-shadow:0px 15px 30px rgba(67, 151, 210, 0.2);
        }
    /* Responsive */
    /* LargeDeskto p */
    @media(min-width: 1200px){
        .whys{
            margin-top: 250px;
        }
        .whys h1{
            font-size: 2.5rem;
        }
        .whys p{
            width: 70%;
        }
        .why{
            margin-top: 50px;
        }
        .why1{
            margin: 20px auto;
            width: 45%;
        }
        .why2{
            margin-top: -50px;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .whys{
            margin-top: 150px;
        }
        .whys h1{
            font-size: 2rem;
        }
        .whys p{
            width: 90%;
        }
        .why{
            margin-top: 50px;
        }
        .why1{
            margin: 15px auto;
            width: 45%;
        }
        .why2{
            margin-top: -50px;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .whys{
            margin-top: 150px;
        }
        .whys h1{
            font-size: 2rem;
        }
        .whys p{
            width: 90%;
        }
        .why{
            margin-top: 50px;
        }
        .why1{
            margin: 15px auto;
            width: 45%;
        }
        .why2{
            margin-top: -50px;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .whys{
            margin-top: 150px;
            text-align: center;
        }
        .whys h1{
            font-size: 2rem;
        }
        .whys p{
            width: 70%;
            margin: auto;
            padding: 15px;
        }
        .why{
            margin-top: 50px;
        }
        .why1{
            margin: 20px auto;
            width: 45%;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .whys{
            margin-top: 150px;
            text-align: center;
        }
        .whys h1{
            font-size: 1.7rem;
        }
        .why{
            margin-top: 50px;
        }
        .why1{
            margin: 25px auto;
        }
    }
</style>