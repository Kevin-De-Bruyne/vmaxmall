<template>
    <div class="content_reg container">
        <div class="text3">
            If you already have an account with us, please login at the login page.
        </div>

        <div class="big">
            Your Personal Details
        </div>

        <div class="ipt-title">
            First Name
        </div>

        <div class="ipt-box">
            <input type="text" v-model="user.f_name" placeholder="First Name">
        </div>

        <div class="ipt-title">
            <span class="red">*</span>
            E-Mail
        </div>

        <div class="ipt-box">
            <input type="text" v-model="user.email" placeholder="E-Mail">
        </div>

        <div class="ipt-title">
            <span class="red">*</span>
            Password
        </div>

        <div class="ipt-box">
            <input type="password" v-model="user.password" placeholder="Password">
        </div>

        <div class="butn m-t-20" @click="submit()">
            SUBMIT
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
    export default{
        data(){
            return{
                user:{},
            }
        },
        methods: {
            submit(){
                let {user}=this
                this.$ajax({
                    url:'api/login/register',
                    data:{
                        nick_name:user.f_name,
                        email:user.email,
                        password:user.password
                    }
                }).then(res=>{
                    if(res.status==200){
                       Toast({
                        message:res.msg,
                        duration:3000
                    })
                         this.$router.push('/login')
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .content_reg{
        padding: 110px 0 30px 0;
        color: #000;
            .text1{
                font-size: 20px;
                margin: 0 0 20px 0;
            }
            .text2{
                font-weight: bold;
                font-size: 16px;
                margin: 0 0 35px 0;
            }
            .big{
                font-size: 32px;
                margin: 20px 0;
            }
            .text3{
                font-size: 14px;
            }
            .ipt-title{
                font-size: 14px;
                margin: 0 0 10px 0;
            }
            .ipt-box{
                width: 835px;
                height: 40px;
                margin: 0 auto 30px auto;
                border: 1px solid #eee;
                // padding: 0 10px;
                // display: flex;
                // align-items: center;
                // justify-content: center;
                border-radius: 3px;
                input{
                    height: 100%;
                    background: none;
                    outline: none;
                    font-size: 14px;
                    width: 100%;
                }
            }
        
    }
    .red{
        color: red !important;
    }
    .butn{
        display: inline-block;
        cursor: pointer;
        padding: 0 15px;
        background: #000;
        color: white;
        font-weight: bold;
        font-size: 14px;
        height: 36px;
        line-height: 36px;
    }
    .butn:hover{
        opacity: .7;
    }
</style>