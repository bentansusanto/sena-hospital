<template>
    <div class="logins">
        <div class="row login">
            <div class="col-12 col-lg-6 login1">
                <img :src="desktop" alt="">
                <img :src="handphone" alt="">
            </div>
            <div class="col-12 col-lg-6 login2">
                <div class="container">
                    <h1>{{title}}</h1>
                    <p>{{content}}</p>
                    <div class="form">
                        <form action="#">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInputEmail">
                                <label for="floatingInputEmail">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingInput">
                                <label for="floatingInput">Password</label>
                            </div>
                            <button class="btn btn-primary w-100"> Login Now</button>
                            <p class="text-center mt-2 w-100">I don't have account, <a style="text-decoration: none;" href="register">Register now</a></p>
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
                title : 'Login',
                content : 'Welcome back, please login to your account.',
                desktop : require('../assets/img-regis/bg-login.jpg'),
                handphone : require('../assets/img-regis/hp-register.svg')
            }
        }
    }
</script>

<style scoped>
    .logins{
        overflow-x: hidden;
    }
    .login1 img:nth-child(2){
        display: none;
    }
    .login2 h1{
        font-weight: 700;
    }
    .login2 p{
        color: #a4a4a4;
    }
    .form{
        background-color: #f5f5f5;
        border-radius: 10px;
        margin-top: 50px;
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
        .login1 img:first-child{
            width: 90%;
            height: 100vh;
        }
        .login1 img:last-child{
            display: none;
        }
        .login2{
            margin-top: 100px;
        }
        .login2 p{
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
         .login1 img:first-child{
            width: 90%;
            height: 100vh;
        }
        .login1 img:last-child{
            display: none;
        }
        .login2{
            margin-top: 100px;
        }
        .login2 p{
            font-size: .8rem;
            width: 40%;
        }
        .form{
            width: 70%;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .login1 img:first-child{
            width: 90%;
            height: 100vh;
        }
        .login1 img:last-child{
            display: none;
        }
        .login2{
            margin-top: 100px;
        }
        .login2 p{
            font-size: .8rem;
            width: 40%;
        }
        .form{
            width: 80%;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .login{
            padding: 0 15px;
        }
        .login1{
            margin-top: 100px;
            text-align: center;
        }
        img{
            width: 50%;
            margin: auto;
        }
        .login1 img:first-child{
            display: none;
        }
        .login1 img:last-child{
            display: block;
        }
        .login2{
            margin-top: 50px;
        }
        .login2 h1{
            text-align: center;
        }
        .login2 p{
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
        .login{
            padding: 0 15px;
        }
        .login1{
            margin-top: 100px;
        }
        img{
            width: 100%;
        }
        .login1 img:first-child{
            display: none;
        }
        .login1 img:last-child{
            display: block;
        }
        .login2{
            margin-top: 50px;
        }
        .login2 h1{
            text-align: center;
        }
        .login2 p{
            text-align: center;
            font-size: .8rem;
            width: 13rem;
            margin: auto;
        }       
    }
</style>