<template>
  <div class="FAQ">
      <!-- 导航栏 -->
      <tab-nav :h_menu="h_menu" :logo="logo"></tab-nav>
      <div class="faqWhole">
          <div class="faq_title"> FAQs</div>
          <div class="faq_content">
            <div class="faq_content_t">Shopping</div>
            <!-- <transition name=> -->
            <div class="faq_content_question" v-for="(item,index) in faqs" :key="index" @click="faqsClick(index)">
              <div class="question_t">
                <div class="question_icon" v-if="faqsIndex==index"><span class="iconfont icon-jiahao"></span></div>
                <div class="question_icon" v-else><span class="iconfont icon-jianhao"></span></div>
                <div class="question_title">{{item.problem}}</div>
              </div>
              <div class="question_b" v-if="faqsIndex==index">{{item.answer}}</div>
            </div>
           <!-- </transition> -->
          </div>
      </div>
           <!-- 底部 -->
      <bottom :bottom="bottom"></bottom>
  </div>
</template>

<script>
import TabNav from '../components/TabNav.vue'
import Bottom from '../components/bottom.vue'
export default {
  components: { TabNav,Bottom },
    data(){
        return{
          h_menu:[],
          faqs:[],
          faqsIndex:0,
          logo:'',
          bottom:[]
        }
    },
    methods:{
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
               this.h_menu=res.data.h_menu
               console.log(this.h_menu),
               this.logo=res.data.logo
            })
      },
      faqsClick(index){
        this.faqsIndex=index
      },
      getData(){
        this.$ajax({
                url:'/api/index/faqs',
                data:{
                 
                }
            }).then(res=>{
               this.faqs=res.info
            })
      }
    },
    created(){
      this.getNav();
      this.getData();
      this.getBottom();
    }
}
</script>

<style lang="scss" scoped>
    .FAQ{
        width: 100%;
        margin: 0;
        padding: 0;
        .faqWhole{
            padding: 140px 25% 0 25%;
            .faq_title{
                width: 100%;
                text-align: center;
                font-size: 45px;
                font-weight: bold;
            }
            .faq_content{
              width: 100%;
              display: flex;
              flex-direction: column;
              .faq_content_t{
                margin-top: 60px;
                font-size: 35px;
                font-weight: bold;
                text-align: left;
              }
              .faq_content_question{
                margin-top: 25px;
                display: flex;
                flex-direction: column;
                width: 100%;
                .question_t{
                  width: 100%;
                  height: 50px;
                  border: 2px solid black;
                  display: flex;
                  flex-direction: row;
                  .question_icon{
                    padding-left: 20px;
                    font-size: 18px;
                    line-height: 50px;
                    font-weight: bold;
                    .icon-jiahao{
                      font-size: 20px;
                    }
                    .icon-jianhao{
                      font-size: 20px;
                    }
                  }
                   .question_title{
                    padding-left: 20px;
                    font-size: 18px;
                     line-height: 50px;
                     font-weight: bold;
                  }
                }
                .question_t:hover{
                     background-color: black;
                     color: white;
                 }
                .question_b{
                  margin-top: 35px;
                  font-size: 15px;
                  text-align: center;
                }
              }
            }
        }
    }
</style>