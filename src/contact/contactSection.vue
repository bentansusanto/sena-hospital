<template>
    <div class="contacts">
        <div class="container">
            <div class="contact">
                <div class="icon">
                    <img :src="contacts.icon" alt="">
                </div>
                <h4>{{contacts.title}}</h4>
                <a href="#" class="btn btn-primary">Contact Us</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            contacts:Object
        }
    }
</script>

<style scoped>
    .contacts{
        margin-top: 250px;
    }
    .contact{
        border-radius: 10px;
        background-color: #ffff;
        box-shadow:0px 15px 30px rgba(67, 151, 210, 0.2);
        padding: 25px;
    }
    .contact h4{
        padding: 15px 0;
        font-weight: 600;
        font-size: 1.5rem;
    }
    .btn{
        width: 100%;
        align-items: center;
        font-size: 1rem;
        border-radius: 50px;
        background-color: #4397D2;
        padding: 16px auto;
        font-weight: 500;
    }
    /* Responsive */
    /* Large Desktop */
    @media(min-width: 1200px){
        .contact {
            width: 30%;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .contact {
            width: 40%;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .contact {
            width: 40%;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
        .contact {
            width: 50%;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .contacts {
            margin-top: 150px;
        }
    }
</style>