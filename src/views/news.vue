<template>
   <div class="news">
       <!-- 导航栏 -->
     <tab-nav :tab="tab"></tab-nav>
      <!-- 新闻部分 -->
      <div class="news_whole">
          <div class="news_t">NEWS</div>
           <div class="news_c">
            <div v-for="(item,index) in news" class="news_c_list" :key="index">
              <div class="news_c_list_t"><img :src="htp+item.path" alt=""></div>
              <div class="news_b">
                <div class="news_b1">{{item.title}}</div>
                <div class="news_b2">{{item.news_time}}</div>
                <div class="news_b3">{{item.content}}</div>
                <div class="news_b4">READ MORE</div>
              </div>
            </div>
          </div>
      </div>
      <div class="pages">
          <el-pagination
            background
            layout="pager,next"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :total="20"
            :current-page="page"
            >
          </el-pagination>
      </div>
          <!-- 底部 -->
      <bottom :bottom="bottom"></bottom>
   </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
import TabNav from "../components/TabNav.vue"
import Bottom from '../components/bottom.vue'

export default{
    data(){
        return{
            currentIndex:1,
            page:1,
            htp:'http://gz.zhiruitech.cn',
            news:[],
            h_menu:[],
            logo:'',
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
    components:{
      TabNav,
      Bottom
    },
    methods:{
      ...mapActions(['getdata_cart','getdata_home']),
        handleSizeChange(){

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
        handleCurrentChange(page){
          this.page=page
          console.log(this.page)
        },
        getData(){
          this.$ajax({
                url:'/api/index/us_news',
                data:{
                  page:this.page
                }
            }).then(res=>{
              this.news=res.list
              
            })
        },
         getNav(){
          this.$ajax({
                url:'/api/index/index',
                data:{
                 
                }
            }).then(res=>{
               this.tab.h_menu=res.data.h_menu
               console.log(this.h_menu)
               this.tab.logo=res.data.logo
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
      this.getData();
      this.getNav();
      this.getdata_home();
      this.getBottom();
    }
}
</script>

<style lang="scss" scoped>
    .news{
        width: 100%;
        margin: 0;
        padding: 0;
    .news_whole{
        padding: 90px 10% 0 10%;
        .news_t{
            width: 100%;
            text-align: center;
            font-size: 50px;
            font-weight: bold;
        }
        .news_c{
            width: 100%;
              display: flex;
              margin-top: 30px;
              flex-wrap: wrap;justify-content: center;
              .news_c_list{
                // flex: 1;
                width: 27%;
                margin: 25px 25px;
                // height: 250px;
                border-radius: 30px;
                .news_c_list_t{
                  height: 270px;
                  img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                  }
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
                  font-size: 18px;
                  margin-top: 20px;
                  text-align: left; 
                  margin-top: 40px;
                  text-decoration: line;
                  font-weight: bold;
              }
            }
              }
            }
    }
    .pages{
        margin-top: 65px;
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
</style>