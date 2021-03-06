<template>
    <div class="content">
        <div class="left-box">

            <div class="flo-right">

            
            <div class="logo-img">
                <img class="" src="../images/phone.jpg" alt="">
            </div>
            

            <div class="butn-box">
                <div class="butn">
                    <img
                    class="img1"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDljZGUiIGQ9Ik0gMjAuOTA1IDkuNSBDIDIxLjE4NSA3LjQgMjAuOTA1IDYgMTkuNzgyIDQuNyBDIDE4LjU2NCAzLjMgMTYuNDExIDIuNiAxMy42OTcgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMy4xIDQuNjE1IDMuNiBMIDEuMzM5IDI1LjggQyAxLjMzOSAyNi4yIDEuNjIgMjYuNyAyLjA4OCAyNi43IEwgNi45NTYgMjYuNyBMIDYuNjc1IDI4LjkgQyA2LjU4MSAyOS4zIDYuODYyIDI5LjYgNy4yMzYgMjkuNiBMIDExLjM1NiAyOS42IEMgMTEuODI1IDI5LjYgMTIuMjkyIDI5LjMgMTIuMzg2IDI4LjggTCAxMi4zODYgMjguNSBMIDEzLjIyOCAyMy4zIEwgMTMuMjI4IDIzLjEgQyAxMy4zMjIgMjIuNiAxMy43OSAyMi4yIDE0LjI1OCAyMi4yIEwgMTQuODIxIDIyLjIgQyAxOC44NDUgMjIuMiAyMS45MzUgMjAuNSAyMi44NzEgMTUuNSBDIDIzLjMzOSAxMy40IDIzLjE1MyAxMS43IDIyLjAyOSAxMC41IEMgMjEuNzQ4IDEwLjEgMjEuMjc5IDkuOCAyMC45MDUgOS41IEwgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTSAyMC45MDUgOS41IEMgMjEuMTg1IDcuNCAyMC45MDUgNiAxOS43ODIgNC43IEMgMTguNTY0IDMuMyAxNi40MTEgMi42IDEzLjY5NyAyLjYgTCA1LjczOSAyLjYgQyA1LjI3MSAyLjYgNC43MSAzLjEgNC42MTUgMy42IEwgMS4zMzkgMjUuOCBDIDEuMzM5IDI2LjIgMS42MiAyNi43IDIuMDg4IDI2LjcgTCA2Ljk1NiAyNi43IEwgOC4yNjcgMTguNCBMIDguMTczIDE4LjcgQyA4LjI2NyAxOC4xIDguNzM1IDE3LjcgOS4yOTYgMTcuNyBMIDExLjYzNiAxNy43IEMgMTYuMjI0IDE3LjcgMTkuNzgyIDE1LjcgMjAuOTA1IDEwLjEgQyAyMC44MTIgOS44IDIwLjkwNSA5LjcgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA5LjQ4NSA5LjUgQyA5LjU3NyA5LjIgOS43NjUgOC45IDEwLjA0NiA4LjcgQyAxMC4yMzIgOC43IDEwLjMyNiA4LjYgMTAuNTEzIDguNiBMIDE2LjY5MiA4LjYgQyAxNy40NDIgOC42IDE4LjE4OSA4LjcgMTguNzUzIDguOCBDIDE4LjkzOSA4LjggMTkuMTI3IDguOCAxOS4zMTQgOC45IEMgMTkuNTAxIDkgMTkuNjg4IDkgMTkuNzgyIDkuMSBDIDE5Ljg3NSA5LjEgMTkuOTY4IDkuMSAyMC4wNjMgOS4xIEMgMjAuMzQzIDkuMiAyMC42MjQgOS40IDIwLjkwNSA5LjUgQyAyMS4xODUgNy40IDIwLjkwNSA2IDE5Ljc4MiA0LjYgQyAxOC42NTggMy4yIDE2LjUwNiAyLjYgMTMuNzkgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMyA0LjYxNSAzLjYgTCAxLjMzOSAyNS44IEMgMS4zMzkgMjYuMiAxLjYyIDI2LjcgMi4wODggMjYuNyBMIDYuOTU2IDI2LjcgTCA4LjI2NyAxOC40IEwgOS40ODUgOS41IFoiPjwvcGF0aD4KPC9zdmc+Cg==" alt="">
                    <img
                    class="img2"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg==" alt="">
                </div>
            </div>

            <div class="border">
                <span>OR</span>
            </div>

            <div class="title">
                Contact information
            </div>
            <div class="user-box">
                <div class="img-box">
                    <span class="iconfont icon-icon--my"></span>
                </div>

                <div class="text-box">
                    <div class="text1">
                        none nobody hu (1069617130@qq.com) 
                    </div>
                </div>
            </div>

            <div class="title m-b-20">
                Shipping address
            </div>

            <div class="wrap-box">
                <div class="ipt-box m-r-15">
                    <input type="text" placeholder="Consignee" v-model="consignee">
                </div>
                <!-- <div class="ipt-box">
                    <input type="text" placeholder="Last name">
                </div> -->
            </div>

                <!-- <div class="ipt-box">
                    <input type="text" placeholder="Company (optional)">
                </div> -->

            <div class="ipt-box">
                <input type="text" placeholder="Full address" v-model="address">
            </div>

            <!-- <div class="ipt-box">
                <input type="text" placeholder="Apartment, suite, etc. (optional)">
            </div> -->

            <div class="ipt-box">
                <input type="text" placeholder="City" v-model="city">
            </div>

            <div class="chilse-box">
                <!-- <el-select
                 class="m-r-10"
                 v-model="value" placeholder="Country/Region">
                    <el-option
                   
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <el-select 
                class="m-r-10"
                v-model="value" placeholder="Province">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
                <div class="ipt-box">
                    <input type="text" placeholder="Country" v-model="country">
                </div>
                <div class="ipt-box">
                    <input type="text" placeholder="Province" v-model="province">
                </div>
                <div class="ipt-box">
                    <input type="text" placeholder="District" v-model="district">
                </div>
            </div>
            <div class="ipt-box">
                <input type="text" placeholder="Zipcode" v-model="zipcode">
            </div>

            <div class="ipt-box">
                <input type="text" placeholder="Phone" v-model="mobile">
            </div>

            <div class="butn-bottom">
                <div class="submit-butn" @click="getOrder">
                    Continue to shipping
                </div>
            </div>

            <div class="xieyi-box">
                <span v-for="(item,index) in xieyi_arr" :key="index">{{item.name}}</span>
            </div>
            </div>
        </div>

        <div class="right-box">

            <div class="flo-left">

            
            <div class="shop-box">
                <div class="shop-item" v-for="(item,index) in goods" :key="index">
                    <div class="img-box">
                        <img :src="item.original_img" alt="" style="width:100%;height:100%;">
                        <div class="ra-box">
                            {{item.goods_num}}
                        </div>
                    </div>

                    <div class="neirong">
                        <div class="text-box">
                        <div class="text1">
                            {{item.goods_name}}
                          </div>
                        </div>
                        
                    </div>

                    <div class="price">
                        ${{item.shop_price * item.goods_num}}
                    </div>
                </div>
            </div>

            <div class="box1">
                <div class="box1-text1">
                    <div class="text1">
                        Subtotal
                    </div>
                    <div class="text2">
                        ${{total_amount}}
                    </div>
                </div>

                <div class="box1-text2">
                    <div class="text13">
                     <div class="text1">
                        Shipping
                     </div>
                    <div class="text3">${{shipping}}</div>
                    </div>
                    <div class="text2">
                        Calculated at next step
                    </div>
                </div>
            </div>

            <div class="box2">
                <div class="left">
                    <div class="text1">
                        Total
                    </div>
                </div>
                
                <div class="right">
                    <div class="text1">
                        USD
                    </div>
                    <div class="text2">
                        ${{total_amount}}
                    </div>
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
                xieyi_arr:[
                    {
                        name:'Refund policy',
                    },
                    {
                        name:'Shipping policy',
                    },
                    {
                        name:'Privacy policy',
                    },
                    {
                        name:'Terms of service',
                    }
                ],
                 options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                    value: '',
                    goods:[],
                    total_amount:'',
                    country:'',
                    province:'',
                    city:'',
                    district:'',
                    town:'',
                    address:'',
                    zipcode:'',
                    mobile:'',
                    consignee:'',
                    goods_num:'',
                    goods_id:'',
                    spec_key:'',
                    action:'',
                    shipping:''
            }
        },
        methods:{
            getData(){
                var token=localStorage.getItem('login')
                this.$ajax({
                url:'/api/cart/cart2',
                data:{
                    token:token,
                    goods_num:this.goods_num,
                    cart_id:this.cart_id,
                    action:this.action,
                    goods_id:this.goods_id,
                    spec_key:this.spec_key
                }
            }).then(res=>{
              this.goods=res.goods
              this.total_amount=res.total_amount
              this.shipping=res.shipping_fee
            })
            },
            getOrder(){
                var token=localStorage.getItem('login')
                 this.$ajax({
                url:'/api/cart/order',
                data:{
                    token:token,
                    goods_num:this.cart_num,
                    cart_id:this.cart_id,
                    action:this.action,
                    pay_type:1,
                    paypwd:123456,
                    country:this.country,
                    province:this.province,
                    city:this.city,
                    district:this.district,
                    // town:'dfdf',
                    goods_id:this.goods_id,
                    goods_num:this.goods_num,
                    spec_key:this.spec_key,
                    address:this.address,
                    zipcode:this.zipcode,
                    mobile:this.mobile,
                    consignee:this.consignee
                }
            }).then(res=>{
              console.log(res)
            })
            }
        },
        created(){
            this.goods_id=this.$route.query.goods_id
            this.goods_num=this.$route.query.goods_num,
            this.spec_key=this.$route.query.spec_key,
            this.action=this.$route.query.action,
            this.cart_num=this.$route.query.cart_num
            this.action=this.$route.query.action
            this.cart_id=this.$route.query.cart_id
            this.getData();
            // this.getOrder();
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        display: flex;
        .left-box{
            padding: 60px 66px 0 0;
            width: 60%;
            display: flex;
            flex-direction: row-reverse;
            .flo-right{
                width: 570px;

            }
            .logo-img{
                width: 130px;
                height: 50px;
                margin: 0 0 30px 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .butn-box{
                display: flex;
                justify-content: center;
                margin: 30px 0;
                .butn{
                    background: rgb(242,186,54);
                    width: 260px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 3px;
                    cursor: pointer;
                    .img1{
                        width: 15px;
                        height: 20px;
                        margin: 0 5px 0 0;
                    }
                    .img2{
                        width: 62px;
                        height: 20px;
                    }
                }
                .butn:hover{
                    opacity: .7;
                }
            }
            .title{
                font-size: 18px;
            }
            .border{
                border-bottom: 1px solid #eee;
                position: relative;
                margin: 30px 0;
                span{
                    display: inline-block;
                    padding: 0 10px;
                    background: white;
                    position: absolute;
                    left: 50%;
                    top: -5px;
                    color: #999;
                    line-height: 10px;
                    transform: translateX(-50%);
                    font-size: 14px;
                }
            }
            .user-box{
                display: flex;
                margin: 25px 0 50px 0;
                align-items: center;
                .img-box{
                    background: rgb(216,216,216);
                    border-radius: 6px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 10px 0 0;
                    .icon-icon--my{
                        color: rgb(67,140,255);
                        font-size: 33px;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right-box{
                    padding: 15px 0 0 0;
                    font-size: 12px;
                }
            }
            .wrap-box{
                display: flex;
                margin-top: 15px;
            }
            .ipt-box{
                    border: 1px solid #eee;
                    border-radius: 6px;
                    display: flex;
                    padding: 0 10px;
                    margin: 0 15px 15px 0;
                    height: 46px;
                    input{
                        flex: 1;
                        background: none;
                        outline: none;
                        font-size: 14px;
                        border: none;
                    }
            }
            .chilse-box{
                height: 46px;
                display: flex;
                width: 100%;
                padding:0 0 15px 0;
                input{
                    margin:0 15px 15px 0;
                    border: 1px solid #eee;
                    height: 40px;
                    border-radius:6px ;
                    border: none;
                    outline: none;
                    width: 25%
                }
                /deep/.el-input--suffix{
                    height: 100%;
                    input{
                        height: 100%;
                    }
                }
            }
            .butn-bottom{
                display: flex;
                flex-direction: row-reverse;
                margin: 30px 0 60px 0;
                .submit-butn{
                    width: 183px;
                    line-height: 60px;
                    height: 60px;
                    background: rgb(42,157,204);
                    color: white;
                    font-size: 14px;
                    text-align: center;
                    border-radius: 6px;
                    cursor: pointer;
                }
                .submit-butn:hover{
                    opacity: .7;
                }
            }
            .xieyi-box{
                display: flex;
                border-top: 1px solid #eee;
                padding: 25px 0;
                span{
                    cursor: pointer;
                    margin: 0 25px 0 0;
                    color: #2a9dcc;
                    font-size: 12px;
                }
                span:hover{
                    opacity: .4;
                }
            }
        }
        .right-box{
            background: rgb(250,250,250);
            border-left: 1px solid #eee;
            padding: 60px 0 0 40px;
            width: 40%;
            .flo-left{
                width: 420px;
            }
            .shop-box{
                padding:  0 0 20px 0;
                border-bottom: 1px solid rgba(175,175,175,0.34);
                .shop-item{
                    display: flex;
                    justify-content: space-between;
                    margin: 10px 0;
                    .img-box{
                        width: 64px;
                        height: 64px;
                        background: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid rgba(0,0,0,0.1);
                        border-radius: 10px;
                        position: relative;
                        flex: 0 0 auto;
                        padding: 4px;
                        .ra-box{
                            position: absolute;
                            right: -10px;
                            border-radius: 50%;
                            top:-10px;
                            width: 20px;
                            height: 20px;
                            text-align: center;
                            line-height: 20px;
                            font-size: 12px;
                            color: white;
                            background: rgb(128,128,128);
                        }
                    }
                    .neirong{
                        margin: 0 50px 0 15px;
                        .text-box{
                            display: flex;
                            align-items: center;
                         .text1{
                            font-size: 14px;
                        }
                        .text2{
                            font-size: 12px;
                        }
                        }
                       
                    }
                    .price{
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                    }
                }
            }
            .box1{
                border-bottom: 1px solid rgba(175,175,175,0.34);
                padding: 20px 0;
                .box1-text1{
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    margin: 0 0 10px 0;
                    
                }
                .box1-text2{
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    .text13{
                        display: flex;
                        flex-direction: row;
                        .text3{
                            padding-left: 15px;
                        }
                        .text2{
                        color: #717171;
                    } 
                    }
                  
                }
            }
            .box2{
                display: flex;
                justify-content: space-between;
                margin:  30px 0 0 0;
                .left{
                    font-size: 18px;
                }
                .right{
                    display: flex;
                    align-items: center;
                    .text1{
                        font-size: 14px;
                        margin:  0 10px 0 0;
                        color: #717171;
                    }
                    .text2{
                        font-size: 20px;

                    }
                }
            }
        }
    }
</style>