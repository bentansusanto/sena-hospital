<template>
    <div class="regists">
        <div class="row regist">
            <div class="col-12 col-lg-6 regist1">
                <img :src="desktop" alt="">
                <img :src="handphone" alt="">
            </div>
            <div class="col-12 col-lg-6 regist2">
                <div class="container">
                    <h1>{{title}}</h1>
                    <p>{{content}}</p>
                    <div class="form">
                        <form action="#">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInputEmail">
                                <label for="floatingInput">Full Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInputEmail">
                                <label for="floatingInputEmail">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingInput">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingInput">
                                <label for="floatingPassword1">Retry Password</label>
                            </div>
                            <button class="btn btn-primary w-100"> Register Now</button>
                            <p class="text-center mt-2 w-100">I have account, <a style="text-decoration: none; font-weight: 500;" href="login">Login now</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return{
                title : 'Register',
                content : 'Enter your personal detail, and start journey with us.',
                desktop : require('../assets/img-regis/bg-login.jpg'),
                handphone : require('../assets/img-regis/hp-register.svg')
            }
        }
    }
</script>

<style scoped>
    .regists{
        overflow-x: hidden;
    }
    .regist1 img:nth-child(2){
        display: none;
    }
    .regist2 h1{
        font-weight: 700;
    }
    .regist2 p{
        color: #a4a4a4;
    }
    .form{
        background-color: #f5f5f5;
        border-radius: 10px;
        margin-top: 50px;
        margin-bottom: 20px;
        padding: 20px 15px;
    }
    .form label{
        text-align: left;
    }
    .form p{
        font-size: .9rem;
    }
    .form input{
        border: none;
        font-size: .9rem;
    }
    .btn{
        font-weight: 500;
    }
    /* Responsive */
    /* Large Desktop */
    @media(min-width:1200px){
        .regist1 img:first-child{
            width: 90%;
            height: 100vh;
        }
        .regist1 img:last-child{
            display: none;
        }
        .regist2{
            margin-top: 100px;
        }
        .regist2 p{
            font-size: .8rem;
            width: 30%;
        }
        .form{
            margin-top: 100px;
            width: 60%;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
         .regist1 img:first-child{
            width: 90%;
            height: 100vh;
        }
        .regist1 img:last-child{
            display: none;
        }
        .regist2{
            margin-top: 100px;
        }
        .regist2 p{
            font-size: .8rem;
            width: 40%;
        }
        .form{
            width: 70%;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .regist1 img:first-child{
            width: 90%;
            height: 100vh;
        }
        .regist1 img:last-child{
            display: none;
        }
        .regist2{
            margin-top: 100px;
        }
        .regist2 p{
            font-size: .8rem;
            width: 40%;
        }
        .form{
            width: 80%;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .regist{
            padding: 0 15px;
        }
        .regist1{
            margin-top: 100px;
            text-align: center;
        }
        img{
            width: 50%;
            margin: auto;
        }
        .regist1 img:first-child{
            display: none;
        }
        .regist1 img:last-child{
            display: block;
        }
        .regist2{
            margin-top: 50px;
        }
        .regist2 h1{
            text-align: center;
        }
        .regist2 p{
            text-align: center;
            font-size: .8rem;
            width: 13rem;
            margin: auto;
        }     
        .form{
            width: 60%;
            margin: 50px auto;
        }  
    }
    /* Handphone */
    @media(max-width: 767px){
        .regist{
            padding: 0 15px;
        }
        .regist1{
            margin-top: 100px;
        }
        img{
            width: 100%;
        }
        .regist1 img:first-child{
            display: none;
        }
        .regist1 img:last-child{
            display: block;
        }
        .regist2{
            margin-top: 50px;
        }
        .regist2 h1{
            text-align: center;
        }
        .regist2 p{
            text-align: center;
            font-size: .8rem;
            width: 13rem;
            margin: auto;
        }       
    }
</style>