<template>
     <div class="nav">
        <div class="nav_whole">
          <div class="nav_l"><img :src="htp+tab.logo" alt=""></div>
          <div class="nav_c">
            <div class="nav_list_whole">
              <!-- <div class="nav_list" v-if="$route.path=='/home'"  @click="GoHome"><span style="color:rgb(149,149,149);">HOME</span></div>
              <div class="nav_list" @click="GoHome" v-else><span>HOME</span></div>
              <div class="nav_list" @click="GoProducts" v-if="$route.path=='/product'">
                <span style="color:rgb(149,149,149);">PRODUCT</span>
                <span></span>
                <span class="iconfont icon-xiala"></span> -->
                    <!-- 鼠标经过显示下拉内容 -->
                   <!-- <div class="mouseover">
                      <div class="mouserList" v-for="(item,index) in 8" :key="index">
                      <div class="listDetail" v-for="(item,index) in 5" :key="index">2.5D Full Cover Tempered Glass</div>
                   </div>
               </div>
              </div>
             <div class="nav_list" @click="GoProducts" v-else> -->
                <!-- <span>PRODUCT</span>
                <span></span>
                <span class="iconfont icon-xiala"></span> -->
                    <!-- 鼠标经过显示下拉内容 -->
                   <!-- <div class="mouseover">
                      <div class="mouserList" v-for="(item,index) in 8" :key="index">
                      <div class="listDetail" v-for="(item,index) in 5" :key="index">2.5D Full Cover Tempered Glass</div>
                   </div>
               </div>
             </div>
              <div class="nav_list" @click="GoAbout" v-if="$route.path=='/about'"><span style="color:rgb(149,149,149);">ABOUT</span></div>
              <div class="nav_list" @click="GoAbout" v-else><span>ABOUT</span></div>
              <div class="nav_list" @click="GoNews"  v-if="$route.path=='/news'"><span style="color:rgb(149,149,149);">NEWS</span></div>
              <div class="nav_list" @click="GoNews"  v-else><span>NEWS</span></div>
              <div class="nav_list" @click="GoFAQs"  v-if="$route.path=='/FAQs'"><span style="color:rgb(149,149,149);">FAQS</span></div>
              <div class="nav_list" @click="GoFAQs"  v-else><span>FAQS</span></div>
              <div class="nav_list" @click="GoContact"  v-if="$route.path=='/contact'"><span style="color:rgb(149,149,149);">CONTACT</span></div>
              <div class="nav_list" @click="GoContact"  v-else><span>CONTACT</span></div> -->
              <div class="nav_list" v-for="(menu,index) in  tab.h_menu" :key="index" @click="navClick(menu.path)">
                <span>{{menu.name}}</span>
                <span class="iconfont icon-xiala" v-if="index==1"></span>
                  <div class="mouseover" v-if="index==1" @click.stop="aa">
                      <div class="mouserList" v-for="(item,index) in menu.child " :key="index">
                      <div class="listDetail_t" @click.stop="listDetail_t(item.cat_id)">{{item.name}}</div>
                      <div class="listDetail" v-for="(item,index) in item.child" :key="index" @click.stop="listDetail(item.path)">{{item.name}}</div>
                      </div>
               </div>
              </div>
              
              <!-- --------------------- -->
            </div>
          </div>
          <div class="nav_r">
            <span class="iconfont icon-sousuo" @click="search"></span>
            <div class="cart_icon">
             <span class="iconfont icon-gouwuche" @click="cartGo"></span>
             <div class="previous_number">{{cart_num}}</div>
            </div>
            <div class="total_prices" style="font-size:14px;margin-left:8px;font-weight:bold;"><span>${{cart_money}}</span></div>
            <div class="logAndReg" v-if="tab.is_login==false">
              <div class="logAndReg_l" @click="goLogin">Login /</div>
              <div class="logAndReg_r" @click="goReg">Regsiter</div>
            </div>
             <div class="logAndReg" v-else>
              <div class="logAndReg_l" @click="loginOut">Login Out</div>
            </div>
          </div>
         
          <!-- 搜索弹出框 -->
          <transition name="my">
          <div class="search_pop" v-if="close">
            <div class="search_t">
            <div class="search_title"><span class="iconfont icon-guanbi" @click="popclose"></span></div>
            <div class="search_whole">
              <div class="search_content">
                <input type="text" placeholder="Search..." v-model="goods_name"/>
                <!-- <div class="search_category">
                  <span>All Categories</span>
                  <span class="iconfont icon-xiala"></span>
                </div> -->
                <div class="search_pic"><span class="iconfont icon-sousuo" @click="searchGoods"></span></div>
              </div>
            </div>
            </div>
            <div class="search_b"></div>
          </div>
      
          </transition>
        </div>
        <!-- 登录注册位置 -->
        
      </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
 data(){
     return{
         close:false,
         htp:'http://gz.zhiruitech.cn',
         page:1,
         goods_name:''
     }
 },
 props:{
   tab:{
    //  currentIndex:'',
    //  h_menu:'',
    //  logo:'',
    //  total_price:'',
    //  is_login:'',
    //  cart_nums:''
   }
 },
 created(){
  //  this.cart_num=this.$store.state.cart_num
 },
 computed:{
    ...mapState({
        cart_num:'cart_num',
        cart_money:'cart_money'
     })
 },
 methods:{
      search(){
        this.close=true       
      },
      popclose(){
        this.close=false
      },
       cartGo(){
        this.$router.push('/cart')
      },
      listDetail_t(path){
        this.$router.push({path:'/product',query:{cat_id:path}})
      },
       listDetail(path){
        window.location.href=path
      },
      loginOut(){
        localStorage.setItem('login','')
        this.$router.push('/login')
      },
      navClick(path){
        this.$router.push(path)
        this.$emit('navClick',path)
      },
      searchGoods(){
         this.$ajax({
                url:'/api/goods/search_goods',
                data:{
                  page:this.page,
                  goods_name:this.goods_name
                }
            }).then(res=>{
              var id=res.list[0].goods_id
               if(res.status==200){
                 this.$router.push({path:'/productDetail',query:{goods_id:id}})
               }
            })
      },
      goLogin(){
        this.$router.push('/login')
      },
       goReg(){
        this.$router.push('/reg')
      }
 }
}
</script>

<style lang="scss" scoped>
     .nav{
        width: 100%;
        // height: 70px;
         background-color: #fff;
        display: flex;
        position: fixed;
        top: 0%;
        // float: left;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        box-shadow: 0 0 10px;
        z-index: 1000;
      .nav_whole{
        width: 90%;
        // height: 70px;
        display: flex;
        // float: left;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
     
        .nav_l{
          width: 106px;
          height: 60px;
          // background-color: red;
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
        .nav_c{
          // width: 55%;
          // height: 70px;
          display: flex;
          // justify-content: center;
          .nav_list_whole{
            width: 100%;  
            display: flex;
            align-items: center;
            // height: 70px;
           justify-content: space-around;
           .nav_list:hover{
             color:rgb(117,117,117);
           }
            .nav_list{
              font-size: 15px;
              font-weight: bold;
              height: 70px;
              padding: 0 17px;
              // flex: 1;
              line-height: 70px;
                  // 鼠标经过
  .mouseover{
    position: fixed;
    top:70px;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 420px;
    background-color: #fff;
    z-index: 1000;
    box-shadow: 0 0 20px black;
    display: flex;
    opacity: 0;
    // cursor: pointer;
    visibility: hidden;
    transition: all .3s;
    flex-wrap: wrap;
    .mouserList{
      width: 25%;
      height: 50%;
      display: flex;
      flex-direction: column;
      .listDetail_t{
        width: 100%;
        // height: 50px;
        text-align: left;
        padding-left: 25px;
        padding-top: 15px;
        line-height: 20px;
        font-size: 19px;
        font-weight: bold;
      }
      .listDetail{
        width: 100%;
        // height: 50px;
        text-align: left;
        padding-left: 25px;
        padding-top: 15px;
        line-height: 20px;
        font-size: 14px;
        font-weight: normal;
      }
       .listDetail:nth-child(1){
        width: 100%;
        // height: 50px;
        text-align: left;
        padding-left: 25px;
        padding-top: 15px;
        line-height: 20px;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
  .icon-xiala{
  font-size: 14px;
  margin-left: 10px;
  // padding-left: 10px;
}
            }
            .nav_list:nth-child(2):hover>.mouseover{
              // flex: 1;
              opacity: 1;
              visibility: visible;
            }
            .nav_list:hover{
              cursor: pointer;
            }
            .nav_list:nth-child(2):hover>.icon-xiala{
              color:rgb(149,149,149);
            }
            .nav_list:nth-child(2):hover>span{
              color:rgb(149,149,149);
            }
          }
        }
        .nav_r{
          // font-size: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;
        .icon-sousuo{
          font-size: 30px;
        }
        .cart_icon:hover{
          cursor: pointer;
        }
        .cart_icon{
          position: relative;
          .icon-gouwuche{
          font-size: 25px;
          margin-left: 15px;
        }
        .total_prices{
          span{
            font-size: 15px;
            color: red;
          }
          padding-left: 25px;
          
        }
        .previous_number{
          position: absolute;
          top: -13%;
          right: -14%;
          width: 15px;
          text-align: center;
          line-height: 15px;
          color: white;
          height:15px;
          font-size: 8px;
          border-radius: 50%;
          background-color: orange;
        }
        }
        .logAndReg{
        height: 70px;
        display: flex;
        margin-left: 20px;
        // width: 100px;
        // margin-left: 50px;
        align-items: center;
        flex-direction: row;
        // z-index: 999;
        .logAndReg_l{
          font-size: 18px;
        }
        .logAndReg_l:hover{
          cursor: pointer;
           color: rgb(117,117,117);
        }
        .logAndReg_r{
          font-size: 18px;
          padding-left: 5px;
         
        }
         .logAndReg_r:hover{
          cursor: pointer;
           color: rgb(117,117,117);
        }
      }
        }
        // .pop_pop{
        //   height: 100vh;
        //   width: 100%;
        //   position: relative;
        //   margin-top: 65px;
        // }
        .search_pop{
          position: absolute;
          top: 0;
          width: 100%;
          height: 100vh;
          // background: #000;
          // opacity: 0.2;
          display: flex;
          flex-direction: column;
          .search_t{
           position: absolute;
          top: 0;
          width: 100%;
          height: 300px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
            .search_title{
            width: 98%;
            padding-top: 25px;
            padding-right: 25px;
            // text-align: right;
            display: flex;
            justify-content: flex-end;
            span{
              font-size: 30px;
            }
          }
          .search_whole{
            display: flex;
            margin-top: 20px;
            justify-content: center;
            .search_content{
              display: flex;
              flex-direction: row;
              border-bottom: 2px solid rgb(117,117,117);
              input{
                width: 534px;
                height: 65px;
                text-align: left;
                font-size: 33px;
                border: none;
                outline: none;
                color:rgb(117,117,117);
              }
              .search_category{
                width: 167px;
                height: 65px;
                display: flex;
                flex-direction: row;
                line-height: 65px;
                span{
                   color: rgb(117,117,117);
                   font-size: 20px;
                }
                .icon-xiala{
                  font-size: 15px;
                  color: rgb(165,165,165);
                  padding-left: 20px;
                }
              }
              .search_pic{
                height: 65px;
                line-height: 65px;
                padding-left: 15px;
                span{
                  font-size: 23px;
                  color: rgb(117,117,117);
                }
              }
            }
          }
          }
          .search_b{
            margin-top: 300px;
            background-color: black;
            opacity: 0.7;
            position: absolute;
            width: 100%;
            height: 100%;
          }
        }
      .pop{
          //  transform: translateY(0px);
           animation: sport .6s;
       }
       @keyframes sport{
       0% {transform: translateY(-300px);}
        // 25% {transform: translateY(300px);}
       // 50% {transform: translateY(200px);}
        100% {transform: translateY(0px);}
      }
      .popclose{
           animation: sports .6s;
       }
       @keyframes sports{
       0% {transform: translateY(0px);}
      //   25% {transform: translateY(-100px);}
      //  50% {transform: translateY(-200px);}
        100% {transform: translateY(-300px);}
      }
       .my-enter{
         opacity: 0;
         transform: translateY(-300px);
       }
       .my-enter-to{
          opacity: 1;
         transform: translateY(0px);
       }
       .my-enter-active{
         transition: all .6s;
       }
        .my-leave{
         opacity: 1;
         transform: translateY(0px);
       }
       .my-leave-active{
          transition: all .6s;
       }
       .my-leave-to{
           opacity: 0;
          transform: translateY(-300px);
       }

      }

    }
</style>