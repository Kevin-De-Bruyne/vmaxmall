<template>
  <div class="contact">
      <!-- 导航栏 -->
      <tab-nav :tab="tab"></tab-nav>
      <!-- 联系我们 -->
      <div class="contact_whole">
          <div class="contact_title">Contact Us</div>
          <div class="form">
              <div class="form_t">
                  <div class="form_t_list">
                      <input type="text" placeholder="Name *" v-model="name">
                  </div>
                  <div class="form_t_list">
                      <input type="text" placeholder="Email *" v-model="email">
                  </div>
                  <div class="form_t_list">
                      <input type="text" placeholder="Phone *" v-model="mobile">
                  </div>
                  <div class="form_t_list">
                      <input type="text" placeholder="Country *" v-model="country">
                  </div>
              </div>
              <div class="form_b">
                  <div class="form_b_textarea">
                      <textarea name="" id="" cols="30" rows="10" placeholder="Message *" v-model="content"></textarea>
                  </div>
              </div>
              <!-- 提交按钮 -->
              <div class="submit"><div class="btn"  @click="sendMessage">SEND MESSAGE</div></div>
              <!-- 联系信息 -->
              <div class="wrapper">
                  <div class="wrapper-whole">
                     <div class="wrapper_list" v-for="(address,index) in address" :key="index">
                      <div class="wrapper_list_t">{{address.name}}</div>
                      <div class="wrapper_list_b" v-for="(item,indexs) in address.child" :key="indexs">{{item.name}}</div>
                     </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- 底部 -->
      <bottom :bottom="bottom"></bottom>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
import TabNav from '../components/TabNav.vue'
import Bottom from '../components/bottom.vue'
import { Toast } from 'vant';
export default {
  data(){
    return{
      h_menu:'',
      address:[],
      logo:'',
       name:'',
      mobile:'',
      email:'',
      country:'',
      content:'',
      bottom:[],
      tab:{
            // total_price:'',
            // cart_nums:'',
            is_login:false,  
            logo:'',
            h_menu:[]
         }
    }
  },
  components: { TabNav,Bottom },
  methods:{
      ...mapActions(['getdata_cart','getdata_home']),
     getBottom(){
        this.$ajax({
                url:'/api/index/bottom',
                data:{
                 
                }
            }).then(res=>{
               this.bottom=res.data.b_menu
               console.log(this.bottom[0].child[0])
            })
      },
    getNav(){
        this.$ajax({
                url:'/api/index/index',
                data:{
                 
                }
            }).then(res=>{
               this.banner=res.data.banner
               this.tab.h_menu=res.data.h_menu
               console.log(this.h_menu),
               this.tab.logo=res.data.logo
            })
      },
      sendMessage(){
        this.$ajax({
                url:'/api/index/contact_us',
                data:{
                  name:this.name,
                  mobile:this.mobile,
                  email:this.email,
                  country:this.country,
                  content:this.content
                }
            }).then(res=>{
              if(res.status==200){
                 Toast({
                   message:res.message,
                   duration:3000
                 })
               }
            })
      },
      getData(){
         this.$ajax({
                url:'/api/index/our_address',
                data:{
                   
                }
            }).then(res=>{
               this.address=res.list
            })
      }
  },
  created(){
    var token=localStorage.getItem('login')
     if(token==''){
       this.tab.is_login=false
     }else{
       this.tab.is_login=true
     }
    this.getNav();
    this.getData();
    this.getdata_home();
    this.getBottom();
  }

}
</script>

<style lang="scss" scoped>
    .contact{
        width: 100%;
        margin: 0;
        padding: 0;
    .contact_whole{
        padding: 85px 10% 0 10%;
        .contact_title{
            font-size: 25px;
            font-weight: bold;
            text-align: center;
        }
        .form{
            width: 100%;
            margin-top: 45px;
            display: flex;
            flex-direction: column;
            .form_t{
                display: flex;
                width:100%;
                justify-content: space-around;
                flex-wrap: wrap;
                .form_t_list{
                    width: 45%;
                    border:1px solid black;
                    height: 45px;
                    margin-top: 25px;
                    input{
                        // padding-left: 30px;
                        // width: 100%;
                        width: 95%;
                        height: 42px;
                        border:none;
                        outline:medium;
                        font-size: 18px;
                    }
                }
            }
            .form_b{
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 25px;
                .form_b_textarea{
                    width: 95%;
                    height: 130px;
                    border:1px solid black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    textarea{
                        width: 98%;
                        height: 120px;
                        border: none;
                        outline:medium;
                        font-size: 18px;
                        // font-weight: bold;
                    }
                }
            }
            .submit{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 25px;
                .btn{
                    width: 174px;
                    height: 46px;
                    background-color: black;
                    text-align: center;
                    line-height: 46px;
                    color: white;
                    font-size: 15px;
                    font-weight: bold;
                }
            }
            .wrapper{
                margin-top: 45px;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                flex-direction: row;
                .wrapper-whole{
                    display: flex;
                    width: 95%;
                    justify-content: space-between;
                    .wrapper_list{
                    width: 28%;
                    display: flex;
                    flex-direction: column;
                    .wrapper_list_t{
                        text-align: left;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .wrapper_list_b{
                        text-align: left;
                        font-size: 14px;
                        line-height: 40px;
                        margin-top: 30px;
                    }
                }
                }
            }

        }
    }
    }
</style>