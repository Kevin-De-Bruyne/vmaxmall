<template>
   <div class="product">
       <!-- 导航 -->
      <tab-nav :tab="tab"></tab-nav>
      <!-- 产品title -->
      <div class="product_title">
          <div class="product_title_content">PRODUCTS</div>
      </div>
      <!-- 商品 -->
      <div class="shop">
          <div class="shop_whole">
              <div class="shop_l">
                  <div class="shop_l_list">Product Categories</div>
                  <div class="shop_l_list" v-for="(item,index) in category" :key="index" @click="cateClick(index,item.id)">
                    <span :class="cateIndex==item.id ?'active':''">{{item.name}}</span>
                  </div>
              </div>
              <div class="shop_r">
                  <div class="shop_r_t">
                      <div class="shop_r_t_l"><div class="product_show">PRODUCTS</div></div>
                      <div class="shop_r_t_r">
                          <div class="showing">Showing 1–12 of 128 results</div>
                          <div class="default_sport">
                              <!-- <span>DEFAULT SPORT</span>
                              <div class="sport_icon"><span class="iconfont icon-xiala"></span></div> -->
                              <el-dropdown trigger="click" :tabindex="index">
                                <div class="el-dropdown-link">
                                <span>{{el_menu}}</span><i class="el-icon-arrow-down el-icon--right"></i>
                                <!-- <span>{{el_menu}}</span><i class="el-icon-arrow-down el-icon--left"></i> -->
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item,index) in sort" :key="index"  @click.native="elmenu(item.name)">Sort By {{item.name}}</el-dropdown-item>
                                </el-dropdown-menu>
                              </el-dropdown>
                              <!-- 升序或者降序 -->
                              <el-dropdown trigger="click" :tabindex="descindex">
                                <div class="el-dropdown-link">
                                <span>{{el_menus}}</span><i class="el-icon-arrow-down el-icon--right"></i>
                                <!-- <span>{{el_menu}}</span><i class="el-icon-arrow-down el-icon--left"></i> -->
                                </div>
                                <el-dropdown-menu slot="dropdown" class="el-dropdown-menus">
                                <el-dropdown-item v-for="(item,index) in paixu" :key="index"  @click.native="elmenus(item.name)">Sort By {{item.name}}</el-dropdown-item>
                                </el-dropdown-menu>
                              </el-dropdown>
                         </div>
                      </div>
                  </div>
                  <div class="shop_r_c" v-if="goodsList==''">暂无商品</div>
                  <div class="shop_r_c" v-else>
                          <div class="goods_list" v-for="(item,index) in goodsList" :key="index">
                              <div class="goods_list_t" @click="goodsDetail(item.goods_id)"><img :src="htp+item.original_img" alt=""></div>
                              <div class="goods_list_b"><span>{{item.goods_name}}</span></div>
                              <div class="goods_price" v-if="item.spec_goods_price==''">
                                <div class="goods_price_t">${{item.shop_price}}</div>
                                <div class="goods_price_b">${{item.market_price}}</div>
                              </div>

                                 <div v-if="img_show==true">
                <div v-for="(item,index) in item.spec_goods_price" :key="index">
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

                              <!-- <div class="text3-box" v-for="(item,index) in spec_goods" :key="index">
                                 <div  v-if="imgIndex==index">
                              <span class="text3-1">
                              ${{item.cost_price}}
                              </span>
                               <span class="text3-2">
                               ${{item.discount_price}}
                              </span>
                               </div>
                             </div> -->
                              
                <div v-for="(item,indexs) in item.spec_goods_price" :key="indexs">
                      <div class="guige-box" v-if="imgIndex==indexs">
                        <template>
                            <div class="guige_text">
                                <div class="guige">{{item.key_name}}</div>
                            </div>
                        </template>
                    </div> 
                   
                </div>
                  <div class="guige-box">
                    <div class="guige_title" v-if="img_show==false && item.spec_goods_price!=''">请选择规格:</div>
                        <template>
                          <div class="guige_whole">
                            <div class="guige_texts"  v-for="(item,index) in item.spec_goods_price" :key="index" @click="img(index,item.key,item)">
                              <div class="guige_image" :class="{'imgactive':imgIndex==index}"><img :src="item.original_img" alt="" /></div>
                            </div>
                          </div> 
                        </template>
                    </div> 
                         <div class="addTo"><div class="addToBox" @click="addtoCart(index)">+ Add To Cart</div></div>
                       </div>
                          
                  </div>
                  <div class="shop_r_b">
                   <el-pagination
                    background
                    layout="pager,next"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :total="sum_page">
                  </el-pagination>
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
            currentPage1:0,
            el_menu:'DEFAULT SPORT',
            el_menus:'desc',
            // h_menu:[],
            sort:[
              {
                name:'DEFAULT SPORT'
              },
              {
                name:'SALES NUM'
              },
              {
                name:'SHOP PRICE'
              },
              {
                name:'COMMENT COUNT'
              },
              {
                name:'LOW TO HIGH'
              },
               {
                name:'HIGH TO LOW'
              }
            ],
            paixu:[
              {
                name:'desc'
              },
              {
                name:'asc'
              },
            ],
            index:0,
            descindex:0,
            page:1,
            sum_page:0,
            goodsList:[],
            category:[],
            htp:'http://gz.zhiruitech.cn',
            sort_asc:'desc',
            logo:'',
            spec_color:[],
            colorIndex:-1,
            stIndex:-1,
            spec_storage:[],
            color_id:'',
            st_id:'',
            spec_key:'',
            imgIndex:-1,
            st_name:'',
            color_name:'',
            img_show:false,
            cart_num:0,
            total_price:'',
            spec_goods:[],
            cat_id:0,
            cateIndex:0,
            is_login:false,
            bottom:[],
            tab:{
            is_login:false,
            h_menu:[],
            logo:''
         }
        }
    },
    components:{
        TabNav,
        Bottom

    },
    mounted(){
      this.getBottom();
    },
    methods:{
      ...mapActions(['getdata_cart','getdata_home']),
        handleSizeChange(){

        }, 
    img(index,key,item){
        this.img_show=true
        // console.log(this.spec_goods[index].key_name)
        this.imgIndex=index
        if(this.img_show==false){
          this.spec_key=''
        }else{
          this.spec_key=key
        }
        
        
        console.log(item)
        // if(item==''){
        //   this.img_show=false
        //   this.spec_key=''
        // }
  
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
        cateClick(index,id){
          this.$router.push({path:'/product',query:{cat_id:id}})
          this.cateIndex=index
          this.cat_id=id
           this.$ajax({
                url:'/api/goods/gw_goods_list ',
                data:{
                 cat_id:this.cat_id,
                 sort:this.el_menu,
                 sort_asc:this.sort_asc,
                 page:this.page
                }
            }).then(res=>{
               this.goodsList=res.goods_list,
               console.log(this.goodsList[0].original_img)
               this.category=res.category
            })
        },
        addtoCart(index){
        // if(this.img_show==true){
        //   this.spec_key=''
        // }else{
        //   this.spec_key='1_3'
        // }
             Toast.loading({
                    duration:2000
                  })
          var token=localStorage.getItem('login')
           this.$ajax({
             url:'api/cart/add_carts',
             data:{
                 goods_id:this.goodsList[index].goods_id,
                 token:token,
                 spec_key:this.spec_key,
                 goods_num:1
              }
            }).then(res=>{
              this.spec_key=''
               if(res.status==200){
                  Toast({
                        message:res.msg,
                        duration:3000
                    })
                   
           this.getdata_cart();
               }else{
                 Toast({
                        message:res.msg,
                        duration:3000
                    })
               }
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
                this.tab.total_price=res.sum_price
            })
        },
        handleCurrentChange(page){
          this.page=page
          this.$ajax({
                url:'/api/goods/gw_goods_list ',
                data:{
                 cat_id:this.cat_id,
                 sort:this.el_menu,
                 sort_asc:this.sort_asc,
                 page:this.page
                }
            }).then(res=>{
               this.goodsList=res.goods_list,
               console.log(this.goodsList[0].original_img)
               this.category=res.category
            })
        },
        goodsDetail(id){
          console.log(id)
          this.$router.push({path:'/productDetail',query:{goods_id:id}})
        },
        elmenu(name){
          this.el_menu=name
          console.log(name)
           if(name=='LOW TO HIGH'){
            this.sort_asc='asc'
          }
           if(name=='HIGH TO LOW'){
            this.sort_asc='desc'
          }
          // if(name=='HIGH TO LOW'){
          //   this.sort_asc='desc'
          // }
          
           this.$ajax({
                url:'/api/goods/gw_goods_list ',
                data:{
                 cat_id:this.cat_id,
                 sort:this.el_menu,
                 sort_asc:this.sort_asc,
                 page:this.page
                }
            }).then(res=>{
               this.goodsList=res.goods_list,
               console.log(this.goodsList[0].original_img)
               this.category=res.category
            })
        },
        elmenus(name){
          this.el_menus=name
          console.log(name)
           if(name=='desc'){
            this.sort_asc='desc'
          }
           if(name=='asc'){
            this.sort_asc='asc'
          }
          // if(name=='HIGH TO LOW'){
          //   this.sort_asc='desc'
          // }
          
           this.$ajax({
                url:'/api/goods/gw_goods_list ',
                data:{
                 cat_id:this.cat_id,
                 sort:this.el_menu,
                 sort_asc:this.sort_asc,
                 page:this.page
                }
            }).then(res=>{
               this.goodsList=res.goods_list,
               console.log(this.goodsList[0].original_img)
               this.category=res.category
            })
        },
        getData(){
        this.$ajax({
                url:'/api/index/index',
                data:{
                 
                }
            }).then(res=>{
               this.tab.h_menu=res.data.h_menu
               console.log(this.h_menu)
               this.tab.logo=res.data.logo
            })
      },
     
      color(index){
        this.colorIndex=index
        this.color_id=this.spec_color[index].id
      },
      st(index){
        this.stIndex=index
        this.st_id=this.spec_storage[index].id
      },
      getGoodsList(){
          this.$ajax({
                url:'/api/goods/gw_goods_list ',
                data:{
                 cat_id:this.cat_id,
                 sort:this.el_menu,
                 sort_asc:this.sort_asc,
                 page:this.page
                }
            }).then(res=>{
               this.goodsList=res.goods_list,
              //  console.log(this.goodsList[0].spec_goods_price)
              //  console.log(this.goodsList[0].original_img)
               this.category=res.category,
               console.log(this.category)
               this.sum_page=res.sum_page,
               this.spec_color=res.spec_list[1].spec_item
               this.spec_goods=res.spec_goods_price
               this.spec_storage=res.spec_list[0].spec_item,
               this.color_name=res.spec_list[1].name
               this.st_name=res.spec_list[0].name
            })
      }
    },
    created(){
      console.log(this.cateIndex)
      var token=localStorage.getItem('login')
        this.cat_id=this.$route.query.cat_id
      console.log(this.cat_id)
    
      if(this.cat_id!=undefined){
        this.cateIndex=this.$route.query.cat_id
        this.cat_id=this.$route.query.cat_id
      }else{
        this.cateIndex=0
      }
      if(token==''){
       this.tab.is_login=false
     }else{
       this.tab.is_login=true
     }
      this.getData();
      this.getGoodsList();
      this.getdata_home();
    }
}
</script>

<style lang="scss" scoped>
  .el-pagination{
    transform: translateX(-15%);
  }
   .el-dropdown-menu{
       position: absolute;
       top: 260px!important;
       width: 220px!important;
       left:75%!important;
    } 
    .el-dropdown-menus{
       position: absolute;
       top: 260px!important;
       width: 220px!important;
       left:85%!important;
    } 
    .el-dropdown-menu__item{
      text-align: center;
    }
    .product{
        width: 100%;
        margin: 0;
        padding: 0;
    .product_title{
        width: 100%;
        background-color: rgb(241,229,231);
        display: flex;
        justify-content: center;
        margin-top: 70px;
        .product_title_content{
            // width: 20%;
            padding: 0 40px;
            height: 112px;
            background-color: white;
            text-align: center;
            line-height: 112px; 
            color: black;
            font-weight: bold;
            font-size:50px;
        }
    }
    .shop{
        padding: 60px 10% 30px 10%;
        .shop_whole{
            width: 100%;
            display: flex;
            flex-direction: row;
            .shop_l{
                display:flex;
                flex-direction: column;
                width: 25%;
                .shop_l_list{
                    font-size: 15px;
                    margin-bottom: 30px;
                    text-align: left;
                    .active{
                      font-size: 17px;
                      font-weight: bold;
                    }
                }
                .shop_l_list span:hover{
                  cursor: pointer;
                  // color: red;
                }
                 .shop_l_list:nth-child(1){
                    font-size: 23px;
                    margin-bottom: 30px;
                    font-weight: bold;
                    text-align: left;
                }
            }
            .shop_r{
                width: 100% ;
                padding-left: 40px;
                display: flex;
                flex-direction: column;
                .shop_r_t{
                    width: 100%;
                    // background-color: blue;
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    .shop_r_t_l{
                        display: flex;
                        width: 50%;
                        color:rgb(149,149,162);
                        font-size: 13px;
                    }
                    .shop_r_t_r{
                        display: flex;
                        width: 50%;
                        flex-direction: row;
                        justify-content: space-around;
                        .showing{
                            font-size: 13px;
                            color:rgb(149,149,162);
                            padding: 0 20px;
                        }
                        .default_sport{
                            width: 40%;
                            font-size: 13px;
                            color: black;
                            margin-left: 25px;
                            font-weight:bold;
                            display: flex;
                            justify-content:space-between;
                            .el-dropdown-link{
                              // padding: 0 40px;
                              width: 100%;
                              color: black;
                              display: flex;
                              justify-content:space-between;
                            }
                             .el-dropdown-link span{
                               margin-right: 60px;
                              //  font-size: 16px;
                              white-space: nowrap;
                             }
                            text{
                              padding-right: 50px;
                            }
                            .sport_icon{
                                margin-left: 60px;
                                color:rgb(149,149,162);
                            }
                        }
                    }
                }
                .shop_r_c{
                    width: 100%;
                    // margin-top: 10px;
                    // height: 400px;
                    display: flex;
                    flex-wrap: wrap;
                    .goods_list:hover{
                      cursor: pointer;
                    }
                
                    .goods_list:hover>.addTo>.addToBox{
                      opacity: 1;
                      visibility: visible;
                    }
                    .goods_list:hover{
                      box-shadow: rgba(0, 0, 0, 0.18) 0px 9px 7px 1px;;
                    }
                     .goods_list:hover>.guige-box{
                      visibility: visible;
                      // opacity: 1;
                    }
                      .goods_list:hover>div>.guige-box{
                      visibility: visible;
                      // opacity: 1;
                    }
                    .goods_list:hover>.goods_list_t img{
                      transform: scale(1.3);
                      cursor: pointer;
                
                    }
                    .goods_list{
                         width: 21%;
                         padding: 10px 15px 15px;
                         display: flex;
                         position: relative;
                         flex-direction: column;
                         .text3-box{
                font-size: 16px;
                margin: 0 0 10px 0;
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
                         .goods_list_t{
                             width: 100%;
                             height: 250px;
                             overflow: hidden;
                             img{
                                 width: 100%;
                                 height: 100%;
                             }
                         }
                         .goods_list_b{
                             width: 100%;
                             text-align: center;
                             margin-top: 20px;
                             height: 35px;
                             display: flex;
                             align-items: center;
                             span{
                              text-decoration: none;
                              font-size: 16px;
                              font-weight: bold;
                              
                             }
                         }
                         .goods_price{
                           margin-top: 20px;
                           display: flex;
                           flex-direction: row;
                           .goods_price_t{
                             font-size: 18px;
                             color:red;
                           }
                           .goods_price_b{
                             font-size: 18px;
                             color:black;
                             margin-left: 20px;
                             text-decoration: line-through;
                           }
                         }
                         .addTo{
                           margin-top: 20px;
                           display: flex;
                           width: 100%;
                           .addToBox{
                             width: 140px;
                             height: 40px;
                             background-color: black;
                             color: white;
                             text-align: center;
                             line-height: 40px;
                             font-size: 15px;
                             opacity: 0;
                             visibility: hidden;
                           }
                         }
                      .guige-box{
                        display: flex;
                        margin:5px 0 10px 0;
                        opacity: 1;
                        flex-direction: column;
                        visibility: hidden;
                        .guige_title{
                          font-size: 15px;
                          width: 100%;
                          margin-top: 5px;
                          text-align: left;
                        }
                       span{
                       font-size: 18px;
                       font-weight: bold;
                       line-height: 34px;
                     }
                     .guige_whole{
                       display: flex;
                       flex-direction: row;
                       margin-top: 15px;
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
                          padding: 0 10px;
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
                        margin: 0 5px 0 5px;
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
                    }
                    
                }
                .shop_r_b{
                    width: 100%;
                    margin-top: 24px;
                    height: 45px;
                    // background-color: yellow;
                     .number::v-deep{
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        
                    }
                    .el-pagination.is-background .el-pager li:not(.disabled).active::v-deep{
                        background-color:black;
                        color: white;
                    }
                     .el-pagination.is-background .el-pager li:not(.disabled):hover::v-deep{
                        background-color:black;
                        color: white;
                    }
                   .el-pager li.btn-quickprev::v-deep{
                        height: 50px;
                        // display: flex;
                        line-height: 50px;
                    }
                  .el-pager li.btn-quicknext::v-deep{
                        height: 50px;
                        line-height: 50px;
                    }
                   .el-pagination button::v-deep{
                        height: 50px;
                        line-height: 50px;
                    }
                }
            }

        }
    }

    }
</style>