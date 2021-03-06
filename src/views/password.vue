<template>
    <div class="content_login container">
         <div class="login_whole">
        <div class="left">
            <div class="text1">
                NEW CUSTOMER
            </div>
            <div class="text2">
                Register Account
            </div>
            <div class="text3">
                By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
            </div>

            <div class="butn" @click="$router.push('/reg')">
                Continue
            </div>
        </div>

        <div class="right">
            <div class="text1">
                RESET YOUR PASSWORD
            </div>
            <div class="text2">
                I forgot password
            </div>
            
            <div class="ipt-title">
                <span class="red">*</span>
                E-Mail
            </div>
            <div class="ipt-box">
                <input type="text" v-model="user.email" placeholder="E-Mail" />
            </div>

            <div class="butn-box">
                <div class="butn" @click="submit()">
                    SUBMIT
                </div>
                <div class="text" @click="$router.push('/login')">
                    Back
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                user:{}
            }
        },
        methods: {
            submit(){
                let {user}=this
                this.ajax({
                    url:'api/login/dologin',
                    data:{
                        email:user.email,
                        password:user.password
                    }
                }).then(res=>{
                    this.showtitle('登录成功').then(res=>{
                        this.$router.push('/')
                    })
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .content_login{
        padding: 110px 0 30px 0;
        display: flex;
        width: 100%;
        justify-content: center;
        color: #000;
        .login_whole{
            display: flex;
            justify-content: space-around;
            width: 80%;
            .left{
            margin: 0 30px 0 0;
            width: 400px;
            .text1{
                font-size: 20px;
                margin: 0 0 20px 0;
            }
            .text2{
                font-weight: bold;
                font-size: 16px;
                margin: 0 0 35px 0;
            }
            .text3{
                font-size: 14px;
                margin: 0 0  35px 0;
            }
        }
        .right{
            .text1{
                font-size: 20px;
                margin: 0 0 20px 0;
            }
            .text2{
                font-weight: bold;
                font-size: 16px;
                margin: 0 0 35px 0;
            }

            .text3{
                font-size: 14px;
            }
            .ipt-title{
                font-size: 14px;
                margin: 0 0 10px 0;
            }
            .ipt-box{
                width: 400px;
                height: 40px;
                margin: 0 0 30px 0;
                border: 1px solid #eee;
                padding: 0 10px;
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
        }

    }
    .red{
        color: red !important;
    }
    .butn-box{
        display: flex;
        .text{
            height: 100%;
            line-height: 36px;
            cursor: pointer;
        }
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
        margin: 0 10px 0 0;
        line-height: 36px;
    }
    .butn:hover{
        opacity: .7;
    }
</style>