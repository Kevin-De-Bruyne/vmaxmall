<template>
  <div class="home">
    <!-- 导航栏 -->
       <tab-nav :h_menu="h_menu" :logo="logo" :cart_nums="cart_nums" :total_price="total_price" :is_login="is_login" @navClick="navClick"/>
       <el-carousel indicator-position="inside" trigger="click"> 
        <el-carousel-item v-for="(item,index) in  banner" :key="index">
          <!-- <h3>{{ item }}</h3> -->
          <img :src="htp+item.path" alt="">
          <div class="click_here" @click="clickHere">Click Here
            <span class="iconfont icon-arrow_right"></span>
          </div>
        </el-carousel-item>
       </el-carousel>

      <!-- 视频介绍 -->
      <div class="jieshao-box" >
        <div class="whole" v-html="enterprise"></div>
      </div>
        <div class="video-box">
          <div class="item" v-for="(item,index) in video_list" :key="index">
            <video :src="item.path"  controls autoplay></video>
          </div>
        </div>
      
      <!-- PRODUCT -->
      <div class="product">
        <div class="product_whole">
          <div class="product_t">Screen Protector Film Series</div>
          <!-- <div class="product_c">PROTECTIVE FILM WITH A LIFETIME WARRANTY.</div> -->
          <div class="product_b">
            <div class="product_list" v-for="(item,index) in goods" :key='index'>
              <div class="product_list_t"><img :src="htp+item.original_img" alt="" @click="goodsDetail(index)"></div>
              <div class="product_list_b">{{item.goods_name}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 发现 -->
      <div class="discover" :style="`background:url(${htp+central_news.path})`">
        <div class="discover_whole">
         <div class="discover_t">{{central_news.title}}</div>
         <div class="discover_c">{{central_news.brief}}</div>
         <div class="discover_b">
           <div class="discover_now" @click="goDiscover">{{central_news.btn_text}}
             <div class="discover_acitve"></div>
           </div>
         </div>
        </div>
      </div>
      <!-- choose type -->
      <div class="choose_type">
        Phone Cases Cover Series
      </div>
      <!-- 保护膜 -->
      <div class="protect_mo">
        <div class="protect_whole">
          <div class="protect_list" v-for="(item,index) in category" :key="index">
            <div class="protect_list_t" @click="productClick(item.id)">
              <div class="protect_list_img">
                <img :src="htp+item.image" alt="">
              </div>
            </div>
            <div class="protect_list_c">{{item.name}}</div>
            <div class="protect_list_b">
              <span>READ MORE</span>
            </div>
          </div>
        </div>
      </div>
      <!-- case -->
      <div class="case">
        <div class="case_l" :style="`background:url(${htp+left_img})`"></div>
        <div class="case_r">
          <div class="case_r_whole">
            <div class="case_r_t"><span class="iconfont icon-quotation"></span></div>  
            <!-- <div class="case_r_c1">只是让您知道我们今天已经收到货物，所有货物已经入账。感谢您的服务是与您开展服务的荣幸。</div>
            <div class="case_r_c2">安东尼.巴斯塔</div> -->
            <div class="case_r_content">
              <el-carousel indicator-position="inside" trigger="click"> 
             <el-carousel-item v-for="(item,index) in image_text" :key="index">
              <!-- <h3>{{ item }}</h3> -->
               <div class="case_r_c1">{{item.content}}</div>
               <div class="case_r_c2">{{item.author}}</div>
            </el-carousel-item>
            </el-carousel>
            </div>
            
          </div>
          <!-- 联系我们表格 -->
          <div class="contact_us">
            <span class="iconfont icon-bianji1" @click="formPoP"></span>
            <!-- 联系我们表格 -->
            <transition name="form">
            <div class="contact_form" v-if="formpop==true">
              <div class="contact_close" @click="formpop=!formpop"><span class="iconfont icon-guanbi"></span></div>
              <div class="contact_title">Contact Us</div>
              <div class="contact_list">
                <div class="contact_list_t">Your Name *Please leave this field empty.</div>
                <div class="contact_list_b"><input type="text" placeholder="Name *" maxlength="20" v-model="name"></div>
              </div>
               <div class="contact_list">
                <div class="contact_list_t">Your Name *Please leave this field empty.</div>
                <div class="contact_list_b"><input type="email" placeholder="Email *" maxlength="20" v-model="email"></div>
              </div>
               <div class="contact_list">
                <div class="contact_list_t">Your Name *Please leave this field empty.</div>
                <div class="contact_list_b"><input type="text" placeholder="Telephone *" maxlength="20" v-model="mobile"></div>
              </div>
               <div class="contact_list">
                <div class="contact_list_t">Country *</div>
                <div class="contact_list_b"><input type="text" placeholder="Country *" maxlength="20" v-model="country"></div>
              </div>
              <div class="contact_list">
                <div class="contact_list_t">Your Message *</div>
                <div class="contact_list_msg"><textarea name="" id="" cols="30" rows="10" maxlength="200" placeholder="Message *" v-model="content"></textarea></div>
              </div>
              <div class="contact_send" @click="sendMessage">Send</div>
            </div>
            </transition>
          </div>
        </div>
      </div>
      <!-- 观看新闻 -->
      <div class="watch_news">
        <div class="news_whole">
          <div class="news_t">JOIN US AND WATCH OUR NEWS</div>
          <div class="news_c">
            <div class="news_c_list" v-for="(item,index) in our_news" :key="index">
              <div class="news_c_list_t"><img :src="htp+item.path" alt=""></div>
              <div class="news_b">
                <div class="news_b1">{{item.title}}</div>
                <div class="news_b2">{{item.news_time}}</div>
                <div class="news_b3" v-html="item.content"></div>
                <div class="news_b4"><span>READ MORE</span></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <bottom :bottom="bottom"></bottom>
      
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
import TabNav from '../components/TabNav'
import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import Bottom from '../components/bottom.vue';
import { Toast } from 'vant';
export default {
  name: 'home',
  components:{ 
    TabNav,
    Bottom
  },
  data(){
    return {
        close:false,
        formpop:false,
        images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
      ],
      htp:'http://gz.zhiruitech.cn',
      banner:[],
      h_menu:[],
      logo:'',
      goods:[],
      image_text:[],
      central_news:{},
      left_img:'',
      category:[],
      our_news:[],
      bottom:[],
      bottomChild:[],
      name:'',
      mobile:'',
      email:'',
      country:'',
      content:'',
      cart_nums:'',
      total_price:'',
      is_login:false,
      enterprise:'',
      video_list:[]
      }
  },
  computed:{
    
  },
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
     },
    // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
    autoplay:true
  })        
   },
   created(){
     var token=localStorage.getItem('login')
     if(token==''){
       this.is_login=false
     }else{
       this.is_login=true
     }
     this.getData();
     this.getBottom();
     this.getdata_home();
    //  this.getCart();
   },
   methods:{
     ...mapActions(['getdata_cart','getdata_home']),
     goDiscover(){
       this.$router.push({path:'/product',query:{cat_id:0}})
     },
     navClick(path){
       console.log(path)
     },
     productClick(id){
       this.$router.push({path:'/product',query:{cat_id:id}})
     },
     clickHere(){
       this.$router.push({path:'/product',query:{cat_id:0}})
     },
      search(){
        this.close=true
      },
      popclose(){
        this.close=false
      },
      formPoP(){
        this.formpop=true
      },
       getCart(){
          var token=localStorage.getItem('login')
           this.$ajax({
                url:'/api/cart/cart',
                data:{
                  token:token
                }
            }).then(res=>{
                this.cart_num=res.cart_list.length
                console.log(this.cart_num)
                this.total_price=res.sum_price
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
                 this.formpop=false
               }else{
                 Toast({
                   message:res.message,
                   duration:3000
                 })
               }
            })
      },
      goodsDetail(index){
        this.$router.push({path:'/productDetail',query:{goods_id:this.goods[index].goods_id}})
      },
      getData(){
        console.log(this.$store.state.goods_num)
        var token=localStorage.getItem('login')
        this.$ajax({
                url:'/api/index/index',
                data:{
                  token:token
                }
            }).then(res=>{
               this.banner=res.data.banner
               this.h_menu=res.data.h_menu
               this.logo=res.data.logo,
               this.goods=res.data.goods
               this.central_news=res.data.central_news
               this.image_text=res.data.image_text
               this.left_img=res.data.left_img,
               this.category=res.data.category,
               this.our_news=res.data.our_news,
               this.enterprise=res.data.enterprise
               this.cart_nums=res.data.cart_num,
               this.total_price=res.data.cart_money
               this.video_list=res.data.video_list
            })
      },
      getBottom(){
        this.$ajax({
                url:'/api/index/bottom',
                data:{
                 
                }
            }).then(res=>{
               this.bottom=res.data.b_menu
               console.log(this.bottom[0].child[0])
            })
      }
   }
}
</script>
<style lang="scss" scoped>
   .el-carousel__item img {
    // color: #475669;
    // font-size: 18px;
    // opacity: 0.75;
    // line-height: 300px;
    // height: 600px;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  /deep/ .el-carousel__container{
    width: 100%;
    height: 724px;
  }
  /deep/ .el-carousel__arrow--left{
    width: 60px;
    height: 60px;
    background-color: rgba(31,45,64,.7);
  }
  /deep/ .el-carousel__arrow--right{
    width: 60px;
    height: 60px;
    background-color: rgba(31,45,64,.7);
  }
  .el-carousel__item{
    // position: relative;
  }
  .el-carousel__item .click_here {
    width: 100px;
    height: 35px;
    background-color: #fff;
    position: absolute;
    right: 49%;
    bottom:50px;
    border-radius: 25px;
    color:white;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    background:rgba(0,0,0,.7);
    transition: all .3s ease .1s;
    line-height: 35px;
    font-weight: bold;
    .icon-arrow_right{
      font-size: 20px;
      padding-right: 15px;
      font-weight: bold;
      opacity: 0;
      transition: all .3s;
    }
  }
  .click_here::after{
    width: 75px;
    background:white;
    height: 2px;
    content:'';
    position: absolute;
    bottom:-5px;
    transition: all .3s;
  }
  .click_here:hover>.icon-arrow_right{
      opacity: 1;
  }
  .click_here:hover::after{
    width: 0px;
    
  }
  .click_here:hover{
    background-color: #fff;
    width: 135px;
    color: black;
    cursor: pointer;
  }
  .el-carousel__item:nth-child(2n+1) {
    // background-color: #d3dce6;
  }
  .el-carousel{
    margin-top: 70px;
    // height: 600px;
  }
  .home{
    width: 100%;
    margin: 0 !important;
    position: relative;
    padding:0;
    overflow: hidden;
    .lunbo{
      width:100%;
      height: 724px;
      float: left;
      margin-top: 50px;
      // z-index: 1000;
      // position: absolute;
      // top: 70px;
      // position: relative;
      // background-color: black;
      .swiper-container {
        width: 100%;
        height: 500px;
        margin: 20px auto;
        .swiper-pagination{
          width: 200px;
          height: 60px;
          position: absolute;
          bottom: 30px;
          left: 48%;
          // background-color: red;
          z-index: 1000;
        }
        img{
          width: 100%;
          height: 100%;
         background-repeat: no-repeat;
         background-size: 100%;
        }
        }
        .swiper-button-prev{
      width: 100px;
      height: 100px;
      position: absolute;
      // left: -300px;
      top: 40%;
      z-index:1000;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: red;
      .icon-zuojiantou{
        font-size: 30px;
        color: white;
      }
    }
     .swiper-button-next{
      width: 100px;
      height: 100px;
      position: absolute;
      right: 0px;
      top: 40%;
      z-index:1000;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: red;
      .icon-youjiantou{
        font-size: 30px;
        color: white;
      }
    }
    }
    .bgcImage{
      width: 100%;
      display: flex;
      justify-content: center;
      height: 864px;
      position: absolute;
      top: 1200px;
      // z-index: 999;
      img{
        width: 100%;
        height: 100%;

      }
    }
    .jieshao-box{
      // height: 250px;
      // overflow: scroll;
      background-color: rgb(243,243,243);
      // padding: 15px 20px;
      // display: flex;
      // width: 100%;
      text-align-last: left;
      padding:30px;
      display: flex;
      justify-content: center;
      // justify-content: ;
     .whole{
       width: 100%;
       height: 100%;
     }
       }
      .video-box{
        margin:10px auto;
        display: flex;
        height: 250px;
        width: 80%;
        justify-content: space-around;
        .item{
          // width: 25%;
          width: 300px;
          height: 250px;
          
          video{
            width: 100%;
            height: 100%;
          }
        }
      }
   
    // product
    .product{
      width: 100%;
      margin-top: 90px;
      display: flex;
      z-index: 1000;
      float: left;
      align-items: center;
      justify-content: center;
      .product_whole{
        display: flex;
        width: 75%;
        flex-direction: column;
        .product_t{
          width: 100%;
          font-size: 30px;
          font-weight: bold;
          text-align: center;
        }
        .product_c{
          width: 100%;
          font-size: 18px;
          // font-weight: bold;
          text-align: center;
          color:rgb(133,133,133);
          margin-top: 30px;
        }
        .product_b{
          margin-top: 70px;
          display: flex;
          justify-content: space-around;
          .product_list{
            display: flex;
            flex-direction: column;
            // justify-content: space-around;
            .product_list_t{
              height: 300px;
              margin: 0 15px;
              width: 300px;
              img{
                max-width: 100%;
                min-height: 100%;
                min-width: 100%;
                max-height: 100%;
              }
            }
            .product_list_b{
              padding-top: 30px;
              text-align: center;
              font-size: 20px;
              font-weight: bold;
            }
          }
          .product_list:hover{
            cursor: pointer;
          }
        }
      }
    }
    // discover
    .discover{
      width: 100%;
      display: flex;
      height: 600px;
      float: left;
      margin-top: 90px;
      z-index: 1200;
      // position: absolute;
      // background-image: url('../images/discover_image.jpg');
      background-size: cover;
      background-position: center;
      align-items: center ;
      justify-content: center;
      .discover_whole{
        display: flex;
        flex-direction: column;
       .discover_t{
        width: 100%;
        padding-top: 35px;
        text-align: center;
        font-size: 35px;
        font-weight: bold;
      }
      .discover_c{
        width: 100%;
        margin-top: 25px;
        text-align: center;
        font-size: 18px;
      }
      .discover_b{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        .discover_now:hover{
          cursor: pointer;
        }
        .discover_now{
          width: 150px;
          height: 40px;
          background-color: #fff;
          text-align: center;
          font-size:0.65rem;  
          border: 1px solid white;
          line-height: 40px;
          .discover_acitve{
            
            transition: all .3s;
            
        }
        }
         .discover_now:hover{
            // color: red;
            // color: white;
            // background-color: rgba(255,255,255,0);
            // border: 1px solid white;
            // transform: scale(2,0);
            // transform: scale(2,2);
            animation:  scale .6s;
          }
          @keyframes scale{
            0% {
               transform: scale(1);
               background-color: rgb(255,255,255);
               color: white;
               border: 1px solid white;
            }
            // 25% {
            //      transform: scale(0.8);
            //      background-color: rgb(255,255,255);
            //      color: white;
            //      border: 1px solid white;
              
            //   }
            // 50% {
            //      transform: scale(0);
            //      background-color: rgb(255,255,255);
            //      color: white;
            //      border: 1px solid white;
            //   }
          100% {
            transform: scale(1,1);
             background-color: rgba(255,255,255,0);
               color: white;
               border: 1px solid white;
            }
          }
      }
      }
    }
    // choose
    .choose_type{
      width: 100%;
      text-align: center;
      float: left;
      margin-top: 65px;
      font-size: 30px;
      font-weight: bold;
    }
    .protect_mo{
      margin-top: 50px;
      width: 100%;
      display: flex;
      z-index: 1200;
      justify-content: center;
      .protect_whole{
        width: 75%;
        margin-top: 30px;
      display: flex;
        .protect_list{
          flex: 1;
          display: flex;
          margin: 0 10px;
          flex-direction: column;
          .protect_list_t{
            height: 288px;
            width: 100%;
            .protect_list_img{
                width: 100%;
                height: 288px;
                overflow:hidden;
                img{
                  width: 100%;
                  height: 100%;
                  transition: all .3s;
                }
            }
            
          }
          .protect_list_img:hover> img{
            transform: scale(1.1);
            cursor: pointer;
          }
          .protect_list_c{
            margin-top: 35px;
            text-align: center;
            font-size: 25px;
            font-weight: bold;
          }
          .protect_list_b{
            margin-top: 15px;
            text-align: center;
            font-size: 0.1rem;
            font-weight: bold;
            span{
              font-size: 15px;
              font-weight: bold;
              display: inline-block;
            //    display: flex;
            // justify-content: flex-start;
            }
          }
          .protect_list_b span::after{
            width: 100%;
            display: inline-block;
            height: 1px;
            border-top:1px solid black ;
            transition: all .3s;
            content: '';
            
          }
  
          .protect_list_b span:hover::after{
             width: 0;
             display: inline-block;
             
            // position: absolute;
            // left: 0;
            height: 1px;
            // float: left;
            margin-top: 10px;
            border-top:1px solid black;
            content: '';
            // transition: all .3s;
            // background-color: black;
          }

        }
      }
    }
    // case
    .case{
      width: 100%;
      display: flex;
      flex-direction: row;
      float: left;
      margin-top: 50px;
      position: relative;
      .case_l{
        height: 430px;
        width: 50%; 
        background-size: 100%!important;
        background-repeat: no-repeat!important;
        background-position: center!important;
        // background-image: url('../images/case.png');
      }
      .case_r{
        background-color: rgb(238,238,238);
        width: 50%;
        height: 430px;
        display: flex;
        justify-content: center;
        align-items: center;
        .case_r_whole{
          width: 70%;
          height: 85%;
          display: flex;
          flex-direction: column;
          .case_r_t{
            display: flex;
            width: 100%;
            justify-content: flex-start;
            font-size: 20px;
            padding-top: 50px;
            span{
              font-size: 25px;
              color: rgb(239,102,47);
            }
          }
          .case_r_content{
            // width: 470px;
            // height: 200px;
            margin-top: 30px;
            flex-direction: column;
            justify-content: center;
            // .el-carousel__container{
            //   width: 470px;
            //   height: 200px;
            // }
            .el-carousel{
               margin:0;
               width: 100%;
                // width: 666px;
              height: 200px;
            }
            /deep/ .el-carousel__container{
               margin:0;
               width: 100%;
               height: 100%;
            }
            /deep/ .el-carousel__arrow--left{
              display: none;
            }
           /deep/ .el-carousel__arrow--right{
               display: none;
            }
          }
          .case_r_c1{
            margin-top: 35px;
            // font-size: 10px;
            text-align: center;
            color:rgb(133,133,133)
          }
           .case_r_c2{
            margin-top: 35px;
            // font-size: 10px;
            text-align: center;
            font-weight: bold;
            // color:rgb(133,133,133)
          }
        }

        .contact_us{
          position: relative;
          // right: 3%;
          // bottom: 20%;
          span{
            font-size: 30px;  
            // color:black
          }
          .icon-bianji1{
            position: fixed;
            bottom: 30vh;
            right: 3vh;
            font-size: 35px;
            z-index: 1002;
          }
          .form-enter{
            opacity: 0;
            transform: translateX(270px);
          }
          .form-enter-to{
            opacity: 1;
            transform: translateX(10px);
          }
          .form-enter-active{
            transition: all .3s;
          }
          .form-leave{
            opacity: 1;
            transform: translateX(10px);
          }
          .form-leave-to{
            opacity: 1;
            transform: translateX(270px);
          }
          .form-leave-active{
            transition: all .3s;
          }
          // 表格
          .contact_form{
            position: fixed;
            top: 10vh; 
            right: 2vh;
            bottom: 10vh;
            height: 730px;
            width: 270px;
            background-color: #fff;
            display: flex;
            z-index: 1001;
            flex-direction: column;
            box-shadow: 0 0 20px black;
            .contact_close{
              // width: 100%;
              display: flex;
              justify-content: flex-end;
              margin-top: 10px;
              margin-right: 10px;
              span{
                font-size: 20px;
                font-weight: bold;
              }
            }
            .contact_title{
              margin-top: 10px;
              text-align: center;
              font-size: 25px;
              font-weight: bold;
            }
            .contact_list{
              display: flex;
              flex-direction: column;
              margin: 10px 7% 0 7%;
              width: 86%;
              .contact_list_t{
                font-size: 15px;
                text-align: left;
                line-height: 25px;
              }
              .contact_list_b{
                border: 2px solid rgb(217,217,217);
                height: 40px;
                margin-top: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                input{
                  width: 90%;
                  height: 35px;
                  border: none;
                  outline: none;
                  font-size: 14px;
                }
              }
              .contact_list_msg{
                border: 2px solid rgb(217,217,217);
                height: 100px;
                margin-top: 12px;
           
                display: flex;
                justify-content: center;
                align-items: center;
                textarea{
                  height: 80px;
                  border: none;
                  margin: 10px 3% 0 3%;
                  width: 86%;
                  outline: none;
                  font-size: 16px;
                  resize: none;
                  // width: 90%;
                  // height: 85px;
                  // border: none;
                  // outline: none;
                  // font-size: 14px;
                }
              }
            }
            .contact_send{
              margin: 10px 7% 0 7%;
              width: 86%;
              height: 40px;
              border: 2px solid rgb(217,217,217);
              line-height: 40px;
              color: black;
              font-size: 14px;
            }
          }
        }

      } 
              
    }
    // 观看新闻
    .watch_news{
          width: 100%;
          display: flex;
          float: left;
          justify-content: center;
          margin-top: 45px;
          .news_whole{
            display: flex;
            width: 75%;
            flex-direction: column;
            .news_t{
              text-align: center;
              font-size: 26px;
              font-weight: bold;
            }
            .news_c{
              display: flex;
              margin-top: 30px;
              justify-content: space-around;
              .news_c_list{
                // flex: 1;
                margin: 0 15px;
                // height: 250px;
                width: 443px;
                border-radius: 30px;
                .news_c_list_t{
                  height: 288px;
                  width: 443px;
                  overflow: hidden;
                   background: #000;
                  img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    transition: all .3s;
                  }
                }
                .news_c_list_t:hover>img{
                  transform: scale(1.1);
                  
                  opacity:0.6; filter: alpha(opacity=60);


                }
                
                .news_b{
                  margin-top: 30px;
                  display: flex;
                  flex-direction: column;
                .news_b1{
                  font-size: 20px;
                  text-align: left;
                  font-weight: bold;
                  }
                .news_b2{
                  font-size: 0.3rem;
                  margin-top: 20px;
                  text-align: left;
                  color:rgb(102,102,102);
                }
                .news_b3{
                  font-size: 10px;
                  color:rgb(102,102,102);
                  margin-top: 20px;
                  display: flex;
                  text-align: left;
                  font-size: 0.3rem;
               }
                .news_b4{
                  text-align: left;
                  margin-top: 40px;
                  span{
                    display: inline-block;
                     font-size: 18px;
                     font-weight: bold; 
                  }
              }
          .news_b4 span::after{
            width: 100%;
            display: inline-block;
            height: 1px;
            border-top:1px solid black ;
            transition: all .3s;
            content: '';
            
          }
  
          .news_b4 span:hover::after{
             width: 0;
             display: inline-block;
             
            // position: absolute;
            // left: 0;
            height: 1px;
            // float: left;
            margin-top: 10px;
            border-top:1px solid black;
            content: '';
            // transition: all .3s;
            // background-color: black;
          }
            }
              }
            }
   
          }
        }
    }
    // 底部
    .bottom{
      margin-top: 80px;
      // padding: 0 10%;
      float: left;
      width: 100%;
      height: 700px;
      background-color: rgb(0,0,0);
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
      .bottom_whole{
        width: 80%;
        margin: 0 10%;
        height: 65%;
        display: flex;
        .bottom_list{
          max-width: 25%;
          // background-color: red;
          margin: 0 15px;
          flex: 1;
          height: 100%;
          .info_title{
            width: 100%;
            font-size: 16px;
            color: white;
            text-align: left;
            font-weight: bold;
          }
          .info_detail{
            .info_detail_list{
              font-size: 16px;
              color:rgb(204,204,191);
              text-align: left;
              margin-top: 15px;
            }
            .info_detail_list2{
              font-size: 16px;
              color:rgb(204,204,191);
              text-align: left;
              margin-top: 15px;
            }
            .info_detail_list3{
              font-size: 16px;
              color:rgb(204,204,191);
              text-align: left;
              margin-top: 15px;
            }
          }
          .info_icon{
            display: flex;
            flex-direction: row;
            margin-top: 50px;
            span{
              font-size: 20px;
              color:rgb(204,204,191);
              margin-right: 25px;
            }
          }
        }
      }
      // 版权
      .overright{
        margin-top: 70px;
        text-align: center;
        font-size: 20px;
        color: white;
        font-weight:bold;
      }
      .edit_icon{
        position: absolute;
        top: 70%;
        right: 5%;
        span{
          font-size: 28px;
          color: white;
        }
      }
    }
</style>
