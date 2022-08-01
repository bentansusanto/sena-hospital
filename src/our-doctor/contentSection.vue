<template>
    <div class="doctors">
        <div class="container">
            <div class="head">
                <h1>{{doctors.title}}</h1>
                <p class="pt-3">{{doctors.content}}</p>
            </div>
            <div class="row doctor justify-content-center">
                <div v-for="item in doctors.doctor" :key="item" class="col-12 col-md-6 col-lg-3 doctor1">
                    <div class="doc d-flex">
                        <img :src="item.image" alt="">
                        <div class="doc1 ms-4 text-start">
                            <h4>{{item.name}}</h4>
                            <p>{{item.specialist}}</p>
                        </div> 
                    </div>
                    <p class="text-start pt-4">{{item.quotes}}</p>
                    <a href="#" class="btn btn-primary d-flex justify-content-center">
                        <img :src="item.icon" alt="">
                        <p class="ms-3 pt-3">Contact Doctor</p>
                    </a>
                </div>
            </div>
            <button class="btn btn-primary"> See more</button>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            doctors : Object
        }
    }
</script>

<style scoped>
        .doctors{
            margin-top: 160px;
            text-align: center;
        }
        .head h1{
            font-weight: 700;
            margin: auto;
        }
        .head p{
            font-size: .9rem;
            color: #a4a4a4;
            margin: auto;
        }
        .doctor{
            padding: 0 15px;
            margin-top: 50px;
        }
        .doctor1{
            background-color: #fafafa;
            border-radius: 10px;
            padding: 25px;
            transition: all .3s ease-out;
        }
        .doctor1:hover{
            background-color: #ffff;
            box-shadow:0px 15px 30px rgba(67, 151, 210, 0.2);
        }
        .doctor1 p{
            font-size: 1rem;
        }
        .doc{
            align-items: center;
        }
        .doc img{
            width: 4.5rem;
        }
        .doc1 h4{
            font-weight: 600;
            font-size: 1.2rem;
        }
        .doc1 p{
            color: #a4a4a4;
            font-weight: 500;
        }
        .btn{
            background-color: #4397D2;
            border: none;
            align-items: center;
            height: 45px;
            border-radius: 50px;
        }
        .btn:hover{
            border: none;
            background-color: #4397D2;
        }
        .btn p{
            font-weight: 500;
            font-size: 1rem;
        }
        button {
            margin-top: 50px;
            padding: 8px 16px;
        }
        button:hover{
            box-shadow:0px 15px 30px rgba(67, 151, 210, 0.2);
        }
    /* Responsive */
    /* Large Desktop */
    @media(min-width: 1200px){
        .doctors h1{
            width: 40%;
            font-size: 2.5rem;
        }
        .head p{
            width: 30%;
        }
        .doctor1{
            margin: 15px auto;
            width: 30%;
        }
    }
    /* Medium Desktop */
    @media(min-width: 1025px) and (max-width: 1199px){
        .doctors h1{
            width: 50%;
            font-size: 2.2rem;
        }
        .head p{
            width: 40%;
        }
        .doctor1{
            margin: 15px auto;
            width: 30%;
        }
    }
    /* Desktop */
    @media(min-width: 992px) and (max-width: 1024px){
        .doctors h1{
            width: 50%;
            font-size: 2.2rem;
        }
        .head p{
            width: 40%;
        }
        .doctor1{
            margin: 15px auto;
            width: 30%;
        }
    }
    /* Tablet */
    @media(min-width: 768px) and (max-width: 991px){
          .doctors{
            margin-top: 100px;
        }
        .doctors h1{
            width: 70%;
            font-size: 2.2rem;
        }
        .head p{
            width: 50%;
        }
        .doctor1{
            margin: 15px auto;
            width: 45%;
        }
    }
    /* Handphone */
    @media(max-width: 767px){
        .doctors{
            margin-top: 100px;
        }
        .doctors h1{
            width: 90%;
            font-size: 1.8rem;
        }
        .head p{
            width: 80%;
        }
        .doctor1{
            margin: 15px auto;
        }
    }
</style>