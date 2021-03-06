<template>
  <div class="product_detail">
      <tab-nav :h_menu="h_menu" :logo="logo" :cart_num="cart_num" :total_price="total_price" :is_login="is_login"/>
      <!-- 商品详情 -->
      <div class="phone_whole">
          <div class="phone">
              <div class="phone_t">
                  <div class="phone_choice">
                      <div class="choice_list1" @click="linkHome">Home</div>
                      <div class="choice_list2" @click="linkProduct">New Products</div>
                      <div class="choice_list3">{{product.goods_name}}</div>
                  </div>
                  <!-- <div class="previous">
                    <span class="iconfont icon-zuojiantou"></span>
                    <span class="previos_span">PREVIOUS NEXT</span>
                    <span class="iconfont icon-youjiantou"></span>
                  </div> -->
              </div>
              <div class="phone_b">
                  <div class="phone_pic">
                      <div class="phone_small"><img :src="product.original_img" alt=""></div>
                      <div class="phone_big">
                        <!-- <img src="../images/phone.jpg" alt=""> -->
                        <imgma :src="banners.length&&banners[choise_index].image_url"/>
                      </div>
                      
                  </div>
                  <!-- <div class="phone_info">
                      <div class="phone_title">{{product.goods_name}}</div>
                      <div class="phone_category">Category: {{product.category}}</div>
                      <div class="phone_free">Get Free sample</div>
                  </div> -->
                <div class="right-box">
                <div class="text1">
                    {{product.goods_name}}
                </div>

                <div class="text2-box">
                    <span class="text2-1">
                        Product Code
                    </span>
                    <span class="text2-2">
                        {{product.goods_sn}}
                    </span>
                </div>

                <div class="text3-box" v-if="img_show==false">
                    <span class="text3-1">
                        ${{product.shop_price}}
                    </span>
                    <span class="text3-2">
                        ${{product.market_price}}
                    </span>
                </div>

                <div v-else>
                <div v-for="(item,index) in spec_goods" :key="index">
                   <div class="text3-box" v-if="imgIndex==index">
                    <span class="text3-1">
                        ${{item.cost_price}}
                    </span>
                    <span class="text3-2">
                        ${{item.discount_price}}
                    </span>
                </div>
                </div>
               </div>

                <div class="text4-box">
                    <div class="text4-1">
                        Shipping calculated at checkout.
                    </div>
                    <div class="text4-2">
                        HURRY! ONLY {{product.store_count}} LEFT IN STOCK!
                    </div>
                </div>

                <!-- <div class="jindu-box  m-b-10">
                    <van-progress :percentage="50" track-color="#e6e6e6" color="#000" stroke-width="2px" />
                </div> -->
                  <div>
                   <!-- <div class="guige-box">
                     <span>{{color_name}}</span>
                        <template v-if="color_show==true">
                            <div class="guige_text" v-for="(item,index) in spec_color" :key="index" @click="color(index)">
                               <div class="guige" :class="{'coloractive':colorIndex==index}">{{item.item}}</div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="guige_text">
                               <div class="guige">{{colorName}}</div>
                            </div>
                        </template>
                    </div>  -->
                    <div v-for="(item,indexs) in spec_goods" :key="indexs">
                      <div class="guige-box" v-if="imgIndex==indexs">
                        <template>
                            <div class="guige_text"  v-for="(item,index) in item.key_name" :key="index">
                                <div class="guige">{{item.name}}</div>
                            </div>
                        </template>
                    </div> 
                    </div>
                    <div class="guige-box" >
                        <template>
                            <div class="guige_texts"
                             v-for="(item,index) in spec_goods" :key="index" @click="img(index)"
                            >
                              <div class="guige_image" :class="{'imgactive':imgIndex==index}"><img :src="item.original_img" alt="" /></div>
                            </div>
                        </template>
                    </div> 
                    
                </div>

                <div class="count-box">
                    <div class="left">
                        <el-input-number v-model="count" @change="countchange" :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>

                    <div class="right">
                        <div class="butn" @click="addCart">
                            ADD TO CART
                        </div>
                    </div>
                </div>
                
                <div class="ask-box">
                    <div class="ask-butn">
                        <span class="iconfont icon-youxiang1"></span>
                        ASK ABOUT THIS PRODUCT
                    </div>
                    
                </div>

                <div class="butn-box">
                    <div class="butn2" @click="buyNow">
                        BUY IT NOW
                    </div>
                </div>

            </div>
              </div>
                <div class="page-box">
                    <div class="item-box" ref="page_item_box">
                        <div class="item" v-for="(item,index) in banners" :key="index"
                        :class="{'choise':choise_index==index}"
                        @mouseover="choise_index=index"
                        >
                            <img :src="item.image_url" ref="page_img" alt="">
                        </div>
                    </div>

                    <!-- <div class="jiantou-box">
                        <div class="prev">
                            <span class="iconfont icon-iconfontjiantou3-copy"></span>
                        </div>
                        <div class="next">
                            <span class="iconfont icon-iconfontjiantou3"></span>
                        </div>
                    </div> -->
                </div>
             <div class="tabbar-box">
            <div class="item m-r-20">
                Description
            </div>
            <div class="item">
                Reviews
            </div>
        </div>

        <div class="detail-box" v-html="product.goods_content">
            
        </div>
          </div>
      </div>
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
              <div class="submit"><div class="btn" @click="send">Get Free sample</div></div>
              
          </div>
      </div>
      <!-- 最近的商品 -->
      <div class="relative_product">
          <div class="relative_title">
              <div class="relative_span">RELATED PRODUCTS</div>
          </div>
          <div class="relative_whole">
              <div class="relative_list" v-for="(item,index) in goods_visit" :key="index" @click="visitClick(item.goods_id)">
                  <div class="relative_list_t"><img :src="item.original_img" alt=""></div>
                  <div class="relative_list_b">{{item.goods_name}}</div>
              </div>
          </div>
      </div>
            <!-- 底部 -->
     <bottom :bottom="bottom"></bottom>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
import {Toast} from 'vant'
import Imgma from '../components/imgma.vue'
import TabNav from '../components/TabNav.vue'
import Bottom from '../components/bottom.vue'
export default {
    data(){
       return{
         src:'https://www.vmax.com.cn/wp-content/uploads/2016/12/iPhone-xs-max-2.jpg',
         goods_id:'',
         token:'',
         product:{},
         count:1,
         color_name:'',
         st_name:'',
         spec_color:[],
         spec_storage:[],
         colorIndex:0,
         stIndex:0,
         spec_key:'',
         color_id:'',
         img_show:false,
         st_id:'',
         spec_list:[],
         spec_goods:[],
         goods_visit:[],
         imgIndex:-1,
         color_show:true,
         banners:[],
         colorName:'',
         h_menu:[],
         total_price:'',
         logo:'',
         cart_num:'',
         choise_index:0,
         is_login:false,
         bottom:[],
         name:'',
         mobile:'',
         email:'',
         country:'',
         content:''
       }
    },
    components:{
      TabNav,
        Imgma,
        Bottom
    },
      computed: {
    // 两种语法


  },
  mounted(){
      this.getData();
       this.getnav();
       this.getBottom();
      // this.getCart();
  },
    created(){
      var token=localStorage.getItem('login')
      this.goods_id=this.$route.query.goods_id
      this.getdata_home()
       if(token==''){
       this.is_login=false
     }else{
       this.is_login=true
     }
    },
    methods:{
      ...mapActions(['getdata_cart','getdata_home']),
      cartGo(){
        this.$router.push('/cart')
      },
      linkHome(){
        this.$router.push('/home')
      },
      linkProduct(){
        this.$router.push('/product')
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
      },
      color(index){
          this.colorIndex=index
          this.color_id=this.spec_color[index].id
          console.log(this.color_id)
           console.log(this.st_id)
      },
      send(){
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
               }else{
                    Toast({
                   message:res.msg,
                   duration:3000
                 })
               }
            })
      },
      buyNow(){
        if(this.img_show==true){
          this.spec_key=this.color_id+'_'+this.st_id
        }
         
        this.$router.push({path:'/conOrder',query:{goods_id:this.goods_id,goods_num:this.count,spec_key:this.spec_key,action:1}})
      },
      visitClick(id){
          this.$router.push({path:'/productDetail',query:{goods_id:id}})
          location.reload();
      },
      img(index){
        this.img_show=true
        console.log(this.spec_goods[index].key_name)
        this.imgIndex=index
        var aa=index
        this.color_id=this.spec_goods[index].key.substring(0,1)
       this.st_id = this.spec_goods[index].key.substring(this.spec_goods[index].key.length-1)
       this.color_show=false
       if(this.spec_goods[index].key=='1_3'){
         this.colorName='黑色',
         this.stName='6+128'
       }
        else if(this.spec_goods[index].key=='1_4'){
         this.colorName='紫色',
         this.stName='6+128'
       }
       else if(this.spec_goods[index].key=='3_5'){
         this.colorName='黑色',
         this.stName='8+256'
       }
       else{
          this.colorName='紫色',
         this.stName='8+256'
       }
      },
      addCart(){
           Toast.loading({
                    duration:2000
                  })
         var token=localStorage.getItem('login')
         if(this.img_show==true){
              this.spec_key=this.color_id+'_'+this.st_id
         }
        this.$ajax({
             url:'/api/cart/add_carts',
             data:{
                 goods_id:this.goods_id,
                 token:this.token,
                 spec_key:this.spec_key,
                 goods_num:this.count
              }
            }).then(res=>{
               if(res.status==200){
                    Toast({
                        message:res.msg,
                        duration:3000
                    })   
                this.getdata_cart()
               }
               else{
                  Toast({
                        message:res.msg,
                        duration:3000
                    })   
               }
            })
      },
       st(index){
          this.stIndex=index
          this.st_id=this.spec_storage[index].id
          console.log(this.st_id)
      },
      getData(){
        return new Promise((resolve,reject)=>{
          this.token=localStorage.getItem('login')
        // console.log(token)
          this.$ajax({
             url:'/api/goods/goodsinfo',
             data:{
                 goods_id:this.goods_id,
                 token:this.token
              }
            }).then(res=>{
              resolve(res)
                this.product=res.sql
                 this.banners=res.banner
                console.log(this.banner)
                // this.spec_color=res.spec_list[1].spec_item,
                // this.spec_storage=res.spec_list[0].spec_item
                // this.color_id=this.spec_color[0].id
                // this.st_id=this.spec_storage[0].id,
                // this.spec_key=this.color_id+"_"+this.st_id
                this.spec_goods=res.spec_goods_price
                this.goods_visit=res.goods_visit
                // this.color_name=res.spec_list[1].name
                // this.st_name=res.spec_list[0].name
            })
        })
        
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
       getnav(){
         this.$ajax({
                url:'api/index/index',
                data:{
                 
                }
            }).then(res=>{
               this.banner=res.data.banner
               this.h_menu=res.data.h_menu
               console.log(this.h_menu),
               this.logo=res.data.logo
               
            })
      },
      countchange(){
        // this.count++
        console.log(this.count)
      }
    }
}
</script>

<style lang="scss" scoped>
    .product_detail{
        margin: 0;
        padding: 0;
        width: 100%;
    .phone_whole{
        padding: 50px 10% 0 10%;
        margin-top: 40px;
        .phone{
            width: 100%;
            display: flex;
            flex-direction: column;
            .phone_t{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 50px;
                .phone_choice{
                    display: flex;
                    flex-direction: row;
                    .choice_list1{
                        font-size: 14px;
                    }
                    .choice_list1:hover{
                        cursor: pointer;
                    }
                     .choice_list2{
                        font-size: 14px;
                        margin-left: 25px;

                    }
                     .choice_list2:hover{
                        cursor: pointer;
                    }
                     .choice_list3{
                        font-size: 14px;
                        color:rgb(149,149,149);
                        margin-left: 25px;
                    }
                }
                .previous{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    position: relative;
                      .icon-zuojiantou{
                        font-size: 22px;
                      }
                      .previous_number{
                        position: absolute;
                        // left: 30%;
                        top: -20%;
                        left: 7%;
                        width: 20px;
                        text-align: center;
                        line-height: 20px;
                        color: white;
                        height:20px;
                        border-radius: 50%;
                        background-color: orange;
                      }
                       .icon-youjiantou{
                        font-size: 22px;
                      }
                    .previos_span{
                      font-size: 12px;
                      line-height: 15px;
                    }
                    .icon-gouwuche{
                      font-size: 25px;
                      padding-right: 60px;
                    }
                     .icon-gouwuche:hover{
                      cursor: pointer;
                    }
                }
            }
            .phone_b{
                margin-top: 55px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                .phone_pic{
                    display: flex;
                    flex-direction: row;
                    .phone_small{
                        width: 138px;
                        height: 138px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                     .phone_big{
                        width: 516px;
                        height: 516px;
                        margin-left: 15px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .phone_info{
                    display: flex;
                    flex-direction: column;
                    .phone_title{
                        font-size: 30px;
                        font-weight: bold;
                        padding-left: 75px;
                        text-align: left;
                    }
                    .phone_category{
                        font-size: 20px;
                        font-weight: bold;
                        margin-top: 30px;
                        text-align: left;
                        padding-left: 75px;
                    }
                    .phone_free{
                        margin-top: 15px;
                        width: 180px;
                        height: 40px;
                        background-color: black;
                        text-align: center;
                        line-height: 40px;
                        color: white;
                        font-size: 21px;
                        margin-left: 75px;
                    }
                }
                     .right-box{
                font-size: 32px;
                font-weight: bold;
                margin: 0 0 30px 30px;
                .guige-text{
                    font-size: 16px;
                    font-weight: bold;
                    margin: 15px 0;
                }
                .text1{
                    font-size: 32px;
                    font-weight: bold;
                    margin: 0 0 30px 0;
                    text-align  : left;
                }
                .text2-box{
                font-size: 12px;
                margin: 0 0 30px 0;
                text-align  : left; 
                .text2-1{
                    color: #b2b2b2;
                    
                    margin: 0 10px 0 0;
                }
                .text2-2{
                    color: #000;
                }
            }
            .text3-box{
                font-size: 16px;
                margin: 0 0 30px 0;
                text-align  : left;
                .text3-1{
                    color: #d9121f;
                    margin: 0 15px 0 0;
                }
                .text3-2{
                    color: #000;
                    text-decoration: line-through;
                }
            }
            .text4-box{
                margin: 0 0 10px 0;
                color: #000;
                font-size: 14px;
                text-align  : left;
            }
                .guige-box{
                    display: flex;
                    margin:0 0 25px 0;
                    span{
                      font-size: 18px;
                      font-weight: bold;
                      line-height: 34px;
                    }
                     .guige_text{
                        border: 2px solid #eee;
                        // padding: 0 15px;
                        
                        line-height: 30px;
                        height: 30px;
                        cursor: pointer;
                        margin: 0 10px 0 10px;
                        display: flex;
                        align-items: center;
                        .guige{
                          padding: 0 15px;
                           font-size: 14px;
                           width: 100%;
                           height: 100%;
                        }
                        .coloractive{
                          border: 1px solid black;
                        }
                        .stactive{
                          border: 1px solid black;
                        }
                       
                    }
                    .guige_texts{
                        border: 2px solid #eee;
                        font-size: 14px;
                        // padding: 0 15px;
                        line-height: 30px;
                        height: 50px;
                        width: 40px;
                        cursor: pointer;
                        margin: 0 10px 0 10px;
                        img{
                          width: 40px;
                          height: 50px;
                        }
                        .guige_image{
                          width: 100%;
                          height: 100%;
                          img{
                            width: 100%;
                            height: 100%;
                          }
                          
                        }
                         .imgactive{
                          border: 1px solid blue;
                        }
                    }
                    .item{
                        cursor: pointer;
                        margin: 0 5px;
                        width: 40px;
                        height: 50px;
                        border: 2px solid #eee;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .choise_class{
                        border: 2px solid #000 !important;
                    }
                }
                .count-box{
                    display: flex;
                    margin: 0 0 20px 0;
                    .left{
                        margin: 0 10px 0 0;
                    }
                    .right{
                        flex: 1;
                        .butn{
                          width: 350px;
                            cursor: pointer;
                            height: 50px;
                            line-height: 50px;
                            color: white;
                            background: #000;
                            font-weight: bold;
                            text-align: center;
                            font-size: 18px;
                        }
                        .butn:hover{
                            opacity: .7;
                        }
                    }
                }
                .ask-box{
                    color: #000;
                    font-size: 18px;
                    cursor: pointer;
                    .ask-butn{
                        display: inline-block;
                        padding: 0 30px;
                        height: 30px;
                        line-height: 30px;
                        color: #000;
                        .iconfont{
                        color: #000;
                        margin: 0 10px 0 0;
                    }
                    }
                    .ask-butn:hover{
                        text-decoration: underline;
                        opacity: 7;
                    }
                    
                }
                .butn-box{
                    .butn2{
                        cursor: pointer;
                        background: rgb(243,198,33);
                        color: #000;
                        text-align: center;
                        height: 50px;
                        line-height: 50px;
                        font-size: 18px;
                        border: 1px solid #000;
                    }
                    .butn2:hover{
                        opacity: .7;
                    }
                }
            }
            }
                 .page-box{
                    margin: 50px 0 0 0;
                    width: 750px;
                    .item-box::-webkit-scrollbar {
                    display: none; /* Chrome Safari */
                    }
                    .item-box{
                        scroll-behavior: smooth;
                        flex-wrap: wrap;
                        display: flex;
                        overflow-x: scroll;
                        .item{
                            flex: 0 0 auto;
                            cursor: pointer;
                        width:200px;
                        display: flex;
                        margin: 0 15px;
                        overflow: hidden;
                        align-items: center;
                        justify-content: center;
                        height: 195px;
                        border: 2px solid transparent;
                        img{
                          width: 100%;
                          height: 100%;
                        }
                    }
                    .choise{
                        border: 2px solid #000 !important;
                    }
                    }
                    .jiantou-box{
                        margin: 20px 0 0 0;
                        .prev,.next{
                            cursor: pointer;
                            background: rgb(247,248,250);
                            text-align: center;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            display: inline-block;
                            line-height: 40px;
                            color: #000;
                            .iconfont{
                                font-size: 16px;
                                color: #000;
                            }
                        }
                        .prev{
                            margin: 0 10px 0 0;
                        }
                    }
                }
         .tabbar-box{
    display: flex;
    margin: 80px auto 0 auto;
    justify-content: center;
    .item{
        border-bottom: 1px solid transparent;
        font-size: 32px;
        font-weight: bold;
        cursor: pointer;
    }
    .choise{
        border-bottom: 1px solid #000 !important;
    }
}
        }
    }
        .contact_whole{
        padding: 240px 10% 0 10%;
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

        }
    }
    .relative_product{
         margin:65px 3% 0 3% ;
         display: flex;
         flex-direction: column;
       .relative_title{
        width: 100%;
        border-bottom: 1px solid rgb(235,235,235);
         display: flex;
         height: 40px;
         justify-content: center;
       .relative_span{ 
         text-align: center;
         font-size: 16px;
         font-weight: bold;
         border-bottom: 5px solid black;
        }
    }
        .relative_whole{
        //  width: 100%;
         display: flex;
         margin-top: 70px;
         flex-wrap: wrap;
         justify-content: space-around;
         .relative_list:hover{
             cursor: pointer;
         }
         .relative_list{
             display: flex;
             flex-direction: column;
             margin-bottom: 35px;
             .relative_list_t{
               width: 400px;
               height: 400px;
               margin-right: 25px;
               img{
                   width: 100%;
                   height: 100%;
               }
             }
             .relative_list_b{
                 width: 400px;
                padding-top: 30px;
                font-size: 17px;
                font-weight: bold;
                text-align: center;
             }
            
         }  
       }
      }
          // 底部
 
    }
</style>