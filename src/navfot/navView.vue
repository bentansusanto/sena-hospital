<template>
        <nav class="navbar navbar-expand-lg ">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img :src="logo" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link to="/" class="nav-link">Home</router-link>
                <router-link to="/about" class="nav-link">About</router-link>
                <router-link to="/service" class="nav-link">Service</router-link>
                <router-link to="/" class="nav-link">Our Doctor</router-link>
                <router-link to="/" class="nav-link">Contact Us</router-link>
            </div>
            <div class="log-inout">
                <a href="#" class="signin">Login</a>
                <button href="#" class="signup btn btn-primary">Register</button>
            </div>
            </div>
        </div>
        </nav>
</template>

<script>
    export default {
        data(){
            return{
                logo :require('../assets/logo.svg')
            }
        }
    }
</script>

<style scoped>
    .navbar-brand img{
        width: 30px;
    }
    .navbar a{
        text-decoration: none;
        color: #000;
        font-size: 1rem;
        font-weight: 500;
    }
    .navbar-nav{
        margin-left: 100px;
    }
    .navbar-toggler{
        border: none;
    }
    .signup{
        color: #ffff !important;
        background-color: #4397D2;
        box-shadow:0px 15px 30px rgba(67, 151, 210, 0.2);
        padding: 8px 16px;
        border-radius: 50px;
        border: none;
    }
    .signup:hover{
        background-color: #4397D2;
        border: none;
    }
    /* Large Desktop */
    @media(min-width: 1200px){
        .navbar-nav{
            margin-left: 10px;
            margin-top: 10px;
        }
        .nav-link{
            margin-left: 25px;
        }
        .log-inout{
            margin-top: 10px;
            margin-left: auto;
        }
        .signin{
            margin-top: unset;
            margin-left: unset;
            margin-right: 25px;
        }
        .signup{
            margin-top: unset;
            margin-left: unset;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .navbar-nav{
            margin-left: 10px;
            margin-top: 10px;
        }
        .nav-link{
            margin-left: 20px;
        }
        .log-inout{
            margin-top: 15px;
            margin-left: auto;
        }
        .signin{
            margin-top: unset;
            margin-left: unset;
            margin-right: 20px;
        }
        .signup{
            margin-top: unset;
            margin-left: unset;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .navbar-nav{
            margin-left: 10px;
            margin-top: 10px;
        }
        .nav-link{
            margin-left: 20px;
        }
        .log-inout{
            margin-top: 15px;
            margin-left: auto;
        }
        .signin{
            margin-top: unset;
            margin-left: unset;
            margin-right: 20px;
        }
        .signup{
            margin-top: unset;
            margin-left: unset;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .navbar-nav{
            margin-left: 10px;
            margin-top: 10px;
        }
        .signin{
            display: flex;
            margin-top: 12px;
            margin-left: 10px;
        }
        .signup{
            display: flex;
            margin-top: 15px;
            margin-left: 10px;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .navbar-nav{
            margin-left: 10px;
            margin-top: 10px;
        }
        .signin{
            display: flex;
            margin-top: 15px;
            margin-left: 10px;
        }
        .signup{
            display: flex;
            margin-top: 15px;
            margin-left: 10px;
        }
    }
</style>