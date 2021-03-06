<template>
  <div class="about">
      <tab-nav :h_menu="h_menu" :logo="logo"></tab-nav>
      <!-- 关于 -->
      <div class="about_whole" v-html="info">
        <!-- <div class="about_t">
          <div class="about_t_title">About VMAX</div>
          <div class="about_text">VMAX® is a technology oriented enterprise founded in 2005,Guangzhou China, who integrating the research, development, design and production screen protector of mobile phones,Tablet,PC, Watch,Camera,GPS... And provides millions of products to mobile device users throughout the world.</div>
          <div class="about_text2">As one of The leading manufacturer of screen protector in the industry with state-of-art technologies;.In order to offer better service for customers,VMAX® continuously improving the product quality inspection standards and the customer service.</div>
          <div class="about_t_img"><img src="../images/about_us.png" alt=""></div>
        </div>
        <div class="about_b">
          <div class="about_b_title">Our Advantage</div>
          <div class="about_b_toptwo">
            <p>1.100% Strictly Inspection before shipment &100% quality guarantee,free replacement for any defective items;</p>
            <p>2.Have obtained relevant ISO,BSCI, BV and SGS enterprise and relevant product certifications;</p>
          </div>
          <div class="about_b_img"><img src="../images/vertify.png" alt=""></div>
          <div class="about_wrapper">
            <p>3.Update you with new tempered glass screen protector market trend & help you catch selling chance such as SamsungS10/ S10plus/S10lite, Huawei P30/ Huawei P30pro…</p>
            <p>5.Providing OEM service, packing design for free, sign confidentiality agreement with customers to keep their business in safe;</p>
            <p>6.Supply shipping service, we are cooperating with FedEx, DHL, TNT , UPS and some forwarders, you can choice shipping way freely;</p>
            <p>Enrich product and models for choice, we have nearly all models for phones, tablets, can do customized size for tempered glass, PET and TPU film;</p>
            <p>7.Help you build your brand and void risks.Nice after sale service, we can supply free high quality pictures for your on line store, professional suggestion to help solve customers complaint;
            </p>
          </div>
          <div class="exhibition">
            <img src="../images/exhibition.png" alt="">
          </div>
          <p style="text-align:left;line-height:40px;margin-top:15px;">8.We attend many exhibitions all over the world every year, like IFA, Cebit, CES, MWC, Hongkong fairs and Canton fair to communicate with our customers face to face, know more about customers’ inquiry and improve our service all the time.</p>
          <div class="culture">
            <div class="culture_t">Our Culture: Sharing ·Passion ·Happiness·Responsibility</div>
            <div class="culture_b">
              <div class="culture_list">
                <img src="../images/culture.png" alt="">
                <div class="culture_span">Sharing ·Passion ·Happiness·Responsibility</div>
              </div>
              <div class="culture_list">
                <img src="../images/culture.png" alt="">
                <div class="culture_span">Sharing ·Passion ·Happiness·Responsibility</div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
        <!-- 底部 -->

      <bottom :bottom="bottom"></bottom>
  </div>
</template>

<script>
import TabNav from '../components/TabNav.vue'
import Bottom from '../components/bottom.vue'
export default {
  data(){
    return{
      info:'',
      h_menu:[],
      logo:'',
      bottom:[]
    }
  },
  components:{
        TabNav,
        Bottom
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
     getData(){
          this.$ajax({
                url:'/api/index/about_us',
                data:{
                  
                }
            }).then(res=>{
              this.info=res.info
            })
        },
        getNav(){
          this.$ajax({
                url:'/api/index/index',
                data:{
                 
                }
            }).then(res=>{
               this.h_menu=res.data.h_menu
               console.log(this.h_menu)
               this.logo=res.data.logo
            })
        }
  },
  created(){
    this.getData();
    this.getNav();
    this.getBottom();
  }
}
</script>

<style lang="scss" scoped>  
  .about{
    width: 100%;
    margin: 0;
    padding: 0;
    .about_whole{
      padding: 80px 10% 0 10%;
      .about_t{
        width: 100%;
        display: flex;
        flex-direction: column;
        .about_t_title{
          font-size: 38px;
          font-weight: bold;
          text-align: left;
          
        }
        .about_text{
            margin-top: 25px;
            font-size: 16px;
            text-align: left;
            line-height: 40px;
            // color: red;
          }
          .about_text2{
            margin-top: 25px;
            font-size: 16px;
            text-align: left;
            line-height: 40px;
          }
          .about_t_img{
            width: 100%;
            height: 232px;
            img{
              width: 100%;
              height: 100%;
            }
          }
      }
      .about_b{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        .about_b_title{
          font-size: 38px;
          font-weight: bold;
          text-align: left;
        }
        .about_b_toptwo{
            margin-top: 25px;
            line-height: 40px;
            text-align: left;
            font-size: 16px;
          }
        .about_b_img{
          margin-top: 30px;
          width: 100%;
          height: 497px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .about_wrapper{
          margin-top: 25px;
          line-height: 40px;
          text-align: left;
          font-size: 16px;
        }
        .exhibition{
          margin-top: 40px;
          height: 525px;
          width: 100%;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .culture{
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          .culture_t{
             font-size: 38px;
             font-weight: bold;
             text-align: center;
          }
          .culture_b{
            margin-top: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .culture_list{
              // width: 30%;
              display: flex;
              flex-direction: column;
              margin-left: 10px;
              img{
                width: 100%;
                height: 300px;
              }
              .culture_span{
                margin-top: 15px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>
