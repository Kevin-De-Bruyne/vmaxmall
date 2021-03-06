<template>
    <div class="cart_content">
        <div class="img-box">
            <img :src="data.original_img" alt="">
        </div>
        <div class="name-box">
            {{data.goods_name}}
        </div>
        <div class="price-box">
            {{data.goods_price}}
        </div>
        <div class="count-box">
            <el-input-number v-model="data.goods_num"  :min="1"  label="描述文字"></el-input-number>
        </div>
        <div class="total-box">
            {{total_price}}
        </div>
        <div class="delete-box">
            <span class="iconfont icon-iconfontshanchu5"
            @click="deletes()"
            ></span>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default{
        props:['data'],
        computed:{
            total_price(){
                return (this.data.goods_price*this.data.goods_num).toFixed(2)
            }
        },
        watch:{
            'data.goods_num'(news,old){
                this.ajax({
                    url:'api/cart/cart_num_cz',
                    data:{
                        id:this.data.id,
                        number:news
                    }
                }).then(res=>{
                    this.setcart_num({
                        cart_money:res.cart_money,
                        cart_num:res.cart_num
                    })
                })
            }
        },
        methods: {
            ...mapMutations({
                setcart_num:'setcart_num'
            }),
            deletes(){
                this.ajax({
                    url:'api/cart/delete',
                    data:{
                        id:this.data.id
                    }
                }).then(res=>{
                     this.setcart_num({
                        cart_money:res.cart_money,
                        cart_num:res.cart_num
                    })
                    this.$emit('deletes')
                    console.log(res);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .cart_content{
        display: flex;
        padding: 20px 0;
        align-items: center;
        text-align: center;
        border-bottom: 1px solid #eee;
        .img-box{
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #eee;
            border-radius: 3px;
            width: 125px;
            height: 100px;
        }
        .name-box{
            line-height: 25px;
            padding: 0 50px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            width: 358px;
        }
        .price-box{
            width: 175px;
            font-size: 16px;

        }
        .count-box{
            width: 185px;
            text-align: center;
        }
        .total-box{
            width: 142px;
            text-align: right !important;
            font-size: 16px;
        }
        .delete-box{
            width: 110px;
            cursor: pointer;
            text-align: right !important;
        }
    }
</style>