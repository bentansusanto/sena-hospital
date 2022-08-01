<template>
     <div class="footers">
        <div class="container">
            <div class="row footers1">
                <div class="col-12 col-md-4 logo">
                    <img :src="logo" alt="">
                </div>
                <div class="col-12 col-md-4 footer">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="/about" class="nav-link">About</router-link>
                    <router-link to="/service" class="nav-link">Service</router-link>
                    <router-link to="/our-doctor" class="nav-link">Our Doctors</router-link>
                    <router-link to="/contact" class="nav-link">Contact Us</router-link>
                </div>
                <div class="col-12 col-md-4 social">
                    <a href="">
                        <img v-for="item in social" :key="item" :src="item.icon" alt="">
                    </a>
                </div>
            </div>
            <footer>
                <p>Copyright &copy; {{currentYear}} &nbsp;|&nbsp; {{made}} &nbsp;|&nbsp; All Can Deserve</p>
            </footer>
        </div>
     </div>
</template>

<script>
    export default {
        data(){
            return{
                    logo : require('../assets/logo.svg'),
                    social : [
                        {
                            icon : 'https://img.icons8.com/fluency/40/000000/instagram-new.png'
                        },
                        {
                            icon : 'https://img.icons8.com/fluency/40/000000/facebook.png'
                        },
                    ],
                currentYear : new Date(). getFullYear(),
                made : 'Sena Hospital'
            }
        }
    }
</script>

<style scoped>
    .footers{
        margin-top: 250px;
    }
    .nav-link{
        font-weight: 500;
    }
    
    /* Responsive */
    /* Large Desktop */
    @media(min-width: 1200px){
       .footers1{
            display: flex;
            align-items: center;
            text-align: center;
       }
       .logo{
        margin-left: -50px;
       }
       .footer{
            display: flex;
            font-size: .9rem;
            margin-left: 30px;
            width: 40%;
        }
        .nav-link{
            margin-left: 25px;
        }
        .social{
            margin-left: -80px;
        }
        .social img{
            margin-left: 10px;
        }
        footer{
            margin-top: 50px;
            text-align: center;
        }   
    
    }
   /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
       .footers1{
            display: flex;
            align-items: center;
            text-align: center;
            margin-left: 25px;
       }
       .logo{
        margin-left: -50px;
       }
       .footer{
            display: flex;
            width: 45%;
            margin-left: -70px;
            font-size: .9rem;
        }
        .nav-link{
            margin-left: 20px;
        }
        .social{
            margin-left:10px;
        }
        footer{
            margin-top: 50px;
            text-align: center;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
       .footers1{
            display: flex;
            align-items: center;
            text-align: center;
            margin-left: 25px;
       }
       .logo{
        margin-left: -50px;
       }
       .footer{
            display: flex;
            width: 45%;
            margin-left: -70px;
            font-size: .9rem;
        }
        .nav-link{
            margin-left: 20px;
        }
        .social{
            margin-left:10px;
        }
        footer{
            margin-top: 50px;
            text-align: center;
        }
        
    
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .nav-link{
            padding-top: 10px;
        }
        .social{
            margin-left: -10px;
        }
        .social img{
            margin-left: 10px;
        }
        footer{
            margin-top: 50px;
            text-align: center;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .footers{
            background-color: #f5f5f5;
            padding: 15px 0;
        }
        .footer{
            margin-top: 30px;
        }
        .nav-link{
            padding-top: 15px;
        }
        .social{
            margin-top: 50px;
            margin-left: -10px;
        }
        .social img{
            margin-left: 10px;
        }
        footer{
            margin-top: 20px;
            text-align: center;
        }
    }
</style>