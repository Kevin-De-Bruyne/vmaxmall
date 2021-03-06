<template>
  <div class="cart">
      <tab-nav :h_menu="h_menu" :logo="logo" :cart_num="cart_num" :total_price="total_price"/>
      <div class="cartwhole">
          <div class="cart_title">
              <div class="cart_image_item">Image</div>
              <div class="cart_product_item">Product Name</div>
              <div class="cart_price_item">Unit Price</div>
              <div class="cart_price_item">Specification</div>
              <div class="cart_quantity_item">Quantity</div>
              <div class="cart_total_item">Total</div>
              <div class="cart_action_item">Action</div>
          </div>
          <div class="cart_item" v-for="(item,index) in cart" :key="item.goods_name">
              <div class="cart_Image">
                  <img :src="item.original_img" alt="">
              </div>
              <div class="cart_name">{{item.goods_name}}</div>
              <div class="cart_price">${{item.goods_price}}</div>
              <div class="cart_prices">{{item.spec_key_name}}</div>
              <div class="cart_quantity"><el-input-number v-model="item.goods_num" :disabled="addAndDre" @change="handleChange(index)" :min="1" :max="10" label="描述文字"></el-input-number></div>
              <div class="cart_total">${{item.sum_price}}</div>
              <div class="cart_action"><span class="iconfont icon-delete" @click="deleteGoods(index)"></span></div>
          </div>
          <div class="question_title">WHAT WOULD YOU LIKE TO DO NEXT?</div>
          <div class="question_box" v-for="(item,i) in 1" :key="i">
              <div class="question_box_t" @click="question_show=!question_show">
                  <span>Special instructions for seller</span>
                  <span class="iconfont icon-arrow_right" :class="question_show==true?'rotate':''"></span>
              </div>
          </div>
           <div class="question_box_b" v-if="question_show==true">
               <textarea name="" id="" cols="30" rows="10" placeholder="Enter your note here"></textarea>
               <div class="caculate">Caculate shipping</div>
            </div>
            <div class="total">
                <div class="total_text">Total: <span class="total_price">${{total_price}}</span></div>
            </div>
            <div class="button_box">
                <div class="continue" @click="continueShop">Continue Shopping</div>
                <div class="checkout" @click="checkout">Check Out</div>
            </div>
      </div>
      
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
import {Toast} from 'vant'
import TabNav from '../components/TabNav.vue'
export default {
  components: { TabNav },
  data(){
      return{
          logo:'',
          h_menu:[],
          num:1,
          question_show:false,
          questionIndex:-1,
          cart:[],
        //   total_price:500,
          cart_num:'',
          cart_id:'',
          total_price:'',
          addAndDre:false
      }
  },
  created(){
      this.getNav();
      this.getData();
      this.getCart();
     this.getdata_home();
  },
  watch:{
      'goods_num'(newVal,oldVal){
          console.log(newVal)
          console.log(oldVal)
      }
  },
  methods:{
      ...mapActions(['getdata_cart','getdata_home']),
      questionClick(index){
          this.questionIndex=index
      },
      checkout(){
          this.$router.push({path:'/conOrder',query:{cart_num:this.cart_num,action:2,cart_id:this.cart_id}})
      },
      continueShop(){
           this.$router.push('/product')
      },
      getNav(){
          this.$ajax({
                url:'/api/index/index',
                data:{
                 
                }
            }).then(res=>{
               this.h_menu=res.data.h_menu
               this.logo=res.data.logo
               console.log(this.h_menu)
              
            })
        },
        deleteGoods(index){
            var token=localStorage.getItem('login')
            this.$ajax({
                url:'/api/cart/delete',
                data:{
                    id:this.cart[index].id,
                    token:token
                }   
            }).then(res=>{
               if(res.status==200){
                    Toast({
                        message:res.msg,
                        duration:3000
                    })
                   this.getData();
                this.getdata_cart();
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
                // this.cart_id=res.cart_list[0].id
                this.cart_num=res.cart_list.length
                console.log(this.cart_num)
                this.total_price=res.sum_price
                res.cart_list.forEach((item,index) => {
                    this.cart_id+='_'+item.id
                    console.log(this.cart_id)
                });
              this.cart_id=this.cart_id.slice(1,this.cart_id.length)
              console.log(this.cart_id)
                
            })
        },
        getData(){
            var token=localStorage.getItem('login')
             this.$ajax({
                url:'/api/cart/cart',
                data:{
                  token:token
                }
            }).then(res=>{
                this.cart=res.cart_list
                console.log(this.cart.length)
                 this.total_price=res.sum_price
            })
        },
         handleChange(index) {
             var token=localStorage.getItem('login')
             this.num=this.cart[index].goods_num
            this.$ajax({
             url:'api/cart/cart_num_cz',
             data:{
                 id:this.cart[index].id,
                 token:token,
                 number:this.num
              }
            }).then(res=>{
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
                    this.cart[index].goods_num=this.cart[index].goods_num-1
                    // this.addAndDre=true
                }
                
            })
            //  this.$store.state.goods_num=this.cart[index].goods_num
            //  console.log(this.$store.state.goods_num)
            // this.cart[index].goods_num++
            // this.$ajax({
            //  url:'api/cart/add_carts',
            //  data:{
            //      goods_id:this.cart[index].goods_id,
            //      token:token,
            //      spec_key:this.cart[index].spec_key,
            //      goods_num:this.cart[index].goods_num
            //   }
            // }).then(res=>{
            //     this.getData();
            // })
      }
  }
}
</script>

<style lang="scss" scoped>
 .cart{
     width: 100%;
    //  margin: 0;
    //  padding: 0;
     .cartwhole{
        //  max-width: 1300px;
         margin: 100px 13% 0 13%;
        //  height: 400px;
         display: flex;
         flex-direction: column;
         .cart_title{
             border-top: 1px solid rgb(238,238,238);
             border-bottom: 1px solid rgb(238,238,238);
             display: flex;
             height: 65px;
             justify-content: space-around;
             font-size: 17px;
             flex-direction: row;
            //  flex-wrap: wrap;
             .cart_image_item{
                 width: 125px;
                 line-height: 65px;
             }
              .cart_product_item{
                 width:358px;
                 line-height: 65px;
             }
              .cart_price_item{
                 width: 175px;
                 line-height: 65px;
             }
              .cart_quantity_item{
                 width: 185px;
                 line-height: 65px;
             }
              .cart_total_item{
                 width: 142px;
                 line-height: 65px;
             }
              .cart_action_item{
                 width: 110px;
                 line-height: 65px;
                 
             }
         }
         .cart_item{
             width: 100%;
             display: flex;
             height: 180px;
              border-bottom: 1px solid rgb(238,238,238);
             flex-direction: row;
             align-items: center;
             justify-content: space-around;

             .cart_Image{
                width: 125px;
                height: 125px;
                img{
                    width: 100%;
                    height: 100%;
                }
             }
            .cart_name{
                font-size: 20px;
                font-weight: bold;
                width: 358px;
                line-height: 25px;
                text-align: center;
            }
            .cart_price{
                font-size: 18px;
                text-align: center;
                width: 175px;
                
            }
             .cart_prices{
                font-size: 15px;
                text-align: center;
                width: 175px;
                
            }
            .cart_quantity{
                width: 185px;
                text-align: center;
            }
             .cart_total{
                width: 142px;
                text-align: center;
            }
             .cart_action{
                width: 110px;
                text-align: center;
                .icon-delete{
                    font-size: 25px;
                }
                .icon-delete:hover{
                    cursor: pointer;
                }
            }
         }
         .question_title{
             margin-top: 35px;
             font-size: 25px;
             text-align: left;
         }
         .question_box{
             display: flex;
             flex-direction: column;
             .question_box_t{
                 background-color: rgb(204,204,204);
                 font-size: 20px;
                 font-weight: bold;
                 padding-left: 20px;
                 height: 50px;
                 line-height: 50px;
                 text-align: left;
                 display: flex;
                 justify-content: space-between;
                 margin-top: 20px;
                 .icon-arrow_right{
                     font-size: 25px;
                     margin-right: 30px;
                 }
                 .rotate{
                     transform: rotate(90deg);
                 }
             }
        
         }
              .question_box_b{
                //  height: 134px;
                 padding: 15px;  
                 display: flex;
                 border: 1px solid rgb(238,238,238);
                 display: flex;
                 flex-direction: column;
                 transition: all .3ss;
                //  opacity: 0;
                 textarea{
                    //  width: 100%;
                     border-radius: 10px;
                     outline: none;
                     height: 134px;
                     padding: 10px;
                     resize: none;
                     border: 1px solid rgb(238,238,238);
                     font-size: 13px;
                 }
                 .caculate{
                     margin-top: 35px;
                     width: 154px;
                     height: 35px;
                     background-color: black;
                     color: white;
                     text-align: center;
                     line-height: 35px;
                 }
             }
             .total{
                 width: 100%;
                 display: flex;
                 margin-top: 35px;
                 justify-content: flex-end;
                 .total_text{
                     font-size: 20px;
                     font-weight: bold;
                     .total_price{
                         font-size: 18px;
                     }
                 }
             }
             .button_box{
                 margin-top: 35px;
                 display: flex;
                 justify-content: space-between;
                 .continue{
                     background-color: black;
                     width: 160px;
                     height: 35px;
                     font-weight: bold;
                     color: white;
                     line-height: 35px;
                 }
                 .continue:hover{
                     cursor: pointer;
                 }
                 .checkout{
                     background-color: black;
                     width: 100px;
                     height: 35px;
                     color: white;
                     font-weight: bold;
                     line-height: 35px;
                 }
                 .checkout:hover{
                     cursor: pointer;
                 }
             }
             
     }
 }
</style>