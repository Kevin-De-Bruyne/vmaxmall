<template>
    <div class="imgma_content">
        <div class="img-box" @mousemove="move" @mouseover="over" @mouseleave="leave">
            <img :src="src" ref="img" alt="">
        </div>
        <div class="white-box" v-show="img_show">
            <div class="bigimg"  :style="{'backgroundImage':`url(${src})`,backgroundPosition:`${x} ${y}`}">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['src'],
        data() {
            return {
                img_show:false,
                x:0,
                y:0,
                imgobj:{},
                width:0,
                height:0
            }
        },
        mounted() {
            this.imgobj=this.$refs.img
            setTimeout(() => {
            let img=new Image()
           console.log(this.src)
           img.src=this.src
           this.width=img.width
           this.height=img.height
           console.log(img.width,img.height)
            }, 500);
               
        },
        methods: {
            move(e){

                this.changes(e)
            },
            over(e){
                this.img_show=true
                this.changes(e)
            },
            changes(e){
               
                let x=e.offsetX
                let y=e.offsetY
                this.x=`-${x*(Math.ceil(this.width/this.imgobj.offsetWidth)/1.5)}px`
                this.y=`-${y*(Math.ceil(this.height/this.imgobj.offsetHeight)/1.5)}px`
                console.log(this.x)
                console.log(this.y)
            },
            leave(e){
                this.img_show=false
            }
        },
    }
</script>

<style lang="scss" scoped>
    .imgma_content{
        width: 100%;
        height: 100%;
        position: relative;
        .img-box{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 88;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .white-box{
            // background: white;
            z-index: 101;
            position: absolute;
            left: 100%;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .bigimg{
            width: 100%;
            height: 100%;
            margin-left: 30px;
            background-repeat: no-repeat;
        }
    }
</style>