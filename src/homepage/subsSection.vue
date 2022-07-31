<template>
    <div class="subscribes">
        <div class="container">
            <div class="row subscribe">
                <div class="col-12 col-lg-6 subscribe1">
                    <h1>{{subscribe.title}}</h1>
                    <p>{{subscribe.content}}</p>
                    <div class="subs">
                        <form action="#" class="d-flex">
                            <input type="text" placeholder="Enter your email address">
                            <a href="#" class="btn btn-primary">Subscribe</a>
                        </form>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <img :src="subscribe.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            subscribe : Object
        }
    }
</script>

<style scoped>
    .subscribes{
        margin-top: 250px;
    }
    .subscribes h1{
        font-weight: 1.8rem;
        font-weight: 700;
    }
    img{
        width: 80%;
    }
    form{
        background-color: #ffff;
        box-shadow:0px 15px 30px rgba(67, 151, 210, 0.3);
        border-radius: 50px;
        padding: 15px 15px;
        width: 75%;
        height: 70px;
    }
    input{
        width: 75%;
        height: 40px;
        border: none;
        padding-left: 15px;
    }
    .btn{
        margin-left: 10px;
        text-decoration: none;
        background-color: #4397D2;
        width: 120px;
        height: 40px;
        border-radius: 50px;
        border: none;
        text-decoration: none;
        font-weight: 600;
    }
    .btn:hover{
         background-color: #4397D2;
    }

    /* Responsive */
    /* Large Desktop */
    @media(min-width: 1200px){
        .subscribes{
        margin-top: 150px;
        }
        .subscribe1{
            margin-top: 80px;
        }
        .subscribe1 p{
            width: 60%;
        }
        .subscribe img{
            margin-top: 50px;
        }
        .subs{
            margin-top: 50px;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .subscribes{
        margin-top: 150px;
        }
        .subscribe1 p{
            width: 80%;
        }
        .subscribe img{
            width: 100%;
            margin-top: 50px;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .subscribes{
        margin-top: 150px;
        }
        .subscribe1 p{
            width: 80%;
        }
        .subscribe img{
            width: 100%;
            margin-top: 50px;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .subscribes{
        margin-top: 150px;
        }
        .subscribe1 p{
            width: 60%;
        }
        .subscribe img{
            width: 70%;
            margin-top: 50px;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .subscribes{
        margin-top: 150px;
        }
        .subscribe1 p{
            width: 90%;
        }
        .subscribe img{
            margin-top: 50px;
        }
    }
</style>