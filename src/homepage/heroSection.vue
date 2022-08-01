<template>
    <div class="abouts">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h1>{{about.title}}</h1>
                    <p>{{about.content}}</p>
                    <a href="#" class="btn btn-primary">See more</a>
                </div>
                <div class="col-12 col-lg-6">
                    <img :src="about.image" alt="">
                </div>
                <div class="col-12 col-lg-6">
                <div class="row rating">
                    <div class="col-4 rating1">
                        <h4>50K</h4>
                        <p>Visitors</p>
                    </div>
                    <div class="col-4 rating1">
                        <h4>18K</h4>
                        <p>Download App</p>
                    </div>
                    <div class="col-4 rating1">
                        <h4>4.5</h4>
                        <p>Ratings</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            about:Object
        }
    }
</script>

<style scoped>
    .abouts{
        margin-top: 100px;
    }
    .abouts h1{
        font-weight: 700;
    }
    img{
        width: 100%;
    }
    .btn{
        background-color: #4397D2;
        border: none;
        border-radius: 50px;
        padding: 8px 16px; 
        transition: all .2s ease-out; 
    }
    .btn:hover{
        background-color: #4397D2;
        border: none;
        box-shadow:0px 15px 30px rgba(67, 151, 210, 0.2);
    }
    .rating1 h4{
        font-weight: 600;
    }
    .rating1 p{
        width: 100%;
        text-align: center;
    }
    /* Responsive */
    /* Large Desktop */
    @media(min-width: 1200px){
         img{
            width: 90%;
        }
        .abouts{
            margin-top: 163px;
        }
        .abouts h1{
            font-size: 4rem;
            width: 70%;
        }
        .abouts p{
            padding-top: 15px;
            width: 70%;
        }
        .rating{
            margin-top: -10px;
            width: 100%;
        }
        .rating1{
            margin: 15px auto;
        }
        .rating1 h4{
            font-size: 2.2rem;
            text-align: left;
        }
        .rating1{
            text-align: left;
        }
        .rating1 p{
            margin-left: -40px;
            margin-top: -10px;
        }
        
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        img{
            width: 90%;
        }
        .abouts h1{
            font-size: 3rem;
        }
        .abouts p{
            width: 80%;
        }
        .rating{
            text-align: left;
            margin-top: 30px;
        }
        .rating1{
            margin: 15px auto;
        }
        .rating1 h4{
            font-size: 2.2rem;
        }
        .rating{
            text-align: left;
            margin-top: 30px;
        }
        .rating1{
            margin: 15px auto;
        }
        .rating1 h4{
            font-size: 2.2rem;
        }
        .rating1 p{
            margin-left: -30px;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        img{
            padding-top: none;
        }
        .abouts h1{
            font-size: 3rem;
        }
        .abouts p{
            width: 80%;
        }
        .rating{
            text-align: left;
            margin-top: 30px;
        }
        .rating1{
            margin: 15px auto;
        }
        .rating1 h4{
            font-size: 2.2rem;
        }
        .rating1 p{
            margin-left: -30px;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        img{
            padding-top: 50px;
            width: 70%;
        }
        .abouts{
            text-align: center;
        }
        .abouts h1{
            font-size: 2rem;
            width: 50%;
            margin: auto;
        }
        .abouts p{
            width: 65%;
            margin: auto;
            padding: 20px 0;
        }
        .rating{
            text-align: center;
            margin-top: 120px;
        }
        .rating p{
            margin: auto;
        }
        .rating1{
            margin: 10px auto;
        }
        .rating1 h4{
            font-size: 2.2rem;
        }
        .rating1 p{
            margin-top: -10px;
        }
    }
    /* Handphone */
    @media(max-width:767px){
        img{
            padding-top: 50px;
        }
        .abouts{
            text-align: unset;
        }
        .abouts h1{
            font-size: 2rem;
            width: 90%;
        }
        .abouts p{
            width: 95%;
        }
        .rating{
            text-align: center;
            margin-top: 100px;
        }
        .rating p{
            margin: auto;
        }
        .rating1{
            margin: 20px auto;
        }
        .rating1 h4{
            font-size: 2.2rem;
        }
    }
</style>