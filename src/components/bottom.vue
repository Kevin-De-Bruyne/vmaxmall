<template>
        <!-- 底部 -->
      <div class="bottom">
        <div class="bottom_whole">
          <div class="bottom_list" v-for="(btm,index) in bottom" :key="index">
            <div class="info_title">{{btm.name}}</div>
            <div class="info_detail">
              <div class="info_detail_list" v-for="(item,index) in btm.child" :key="index">
                <span>{{item.name}}</span>
                 <!-- <div class="info_icon"> -->
                <img :src="htp+item.image" alt="" @click="iconClick(item.path)">
             <!-- </div> -->
              </div>
             
            </div>
          </div>
          <!-- <div class="bottom_list">
            <div class="info_title">产品推荐</div>
            <div class="info_detail">
              <div class="info_detail_list2">2.5D全覆盖钢化玻璃</div>
              <div class="info_detail_list2">2.5D圆边钢化玻璃</div>
              <div class="info_detail_list2">3D钢化玻璃</div>
              <div class="info_detail_list2">3D曲面钢化玻璃</div>
              <div class="info_detail_list2">防蓝光钢化玻璃</div>
              <div class="info_detail_list2">防蓝光钢化玻璃</div>
              <div class="info_detail_list2">防蓝光钢化玻璃</div>
              <div class="info_detail_list2">防蓝光钢化玻璃</div>
            </div>
          </div>
          <div class="bottom_list">
            <div class="info_title">导航</div>
            <div class="info_detail">
              <div class="info_detail_list3">家</div>
              <div class="info_detail_list3">产品展示</div>
              <div class="info_detail_list3">关于</div>
              <div class="info_detail_list3">常见问题</div>
              <div class="info_detail_list3">新闻</div>
              <div class="info_detail_list3">联系</div>
            </div>
          </div>
          <div class="bottom_list">
            <div class="info_title">通讯</div>
            <div class="info_icon">
              <span class="iconfont icon-facebook"></span>
              <span class="iconfont icon-gezi"></span>
              <span class="iconfont icon-instagram"></span>
              <span class="iconfont icon-in"></span>
              <span class="iconfont icon-shipin"></span>
            </div>
          </div> -->
        </div>
        <!-- 版权 -->
        <div class="overright">
          @2018Guangzhou Zhirui Technology Co., Limited All rights reserved
        </div>
        <!-- 编辑图标 -->
        <!-- <div class="edit_icon"><span class="iconfont icon-bianji"></span></div> -->
      </div>
</template>

<script>
export default {
    props:['bottom'],
    data(){
      return{
        htp:'http://gz.zhiruitech.cn'
      }
    },
    methods:{
      iconClick(path){
        window.location.href=path
      }
    }
}
</script>

<style lang="scss" scoped>
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
        justify-content: space-between;
        .bottom_list{
          max-width: 25%;
          // background-color: red;
          margin: 0 15px;
          flex: 1;
          // flex-direction: row!important;
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
              flex-direction: row;
              img{
                margin-left: 25px;
                cursor: pointer;
              }
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
            // display: flex;
            // flex-direction: row;
            // margin-top: 50px;
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