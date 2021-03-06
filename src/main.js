import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'swiper/swiper.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import Vant, { Toast } from 'vant'
import { Lazyload } from 'vant';
import 'vant/lib/index.css'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(Lazyload);

let baseurl = 'http://gz.zhiruitech.cn'
    // let baseurl = 'http://film.com'
Vue.prototype.baseURL = baseurl
axios.defaults.baseURL = baseurl
Vue.prototype.$ajax = ({ url, data = {}, headers = {}, methods = 'post' }) => {
    // data.token = localStorage.getItem('token')

    return new Promise((ok, err) => {
        // if(lurl){
        //   //避免重复请求
        //   err('请勿重新请求了')
        //   return
        // }
        // Toast.loading({
        //     duration: 0,
        //     forbidClick: true
        // })
        axios[methods](url,
            // 这里是否请求成功
            methods == 'post' ? data : { params: data }, { headers }).then(res => {
            console.log(res)
                // Toast.clear()
            if (res.data.status == 200 || res.data.code == 200 || res.data.status == 500) {
                // 这里是是否成功获取到数据
                ok(res.data)
                    // console.log(res.data)
            } else {
                console.log(res)
                Toast({
                        message: 'Please Login',
                        duration: 3000
                    })
                    // err(res)
                router.push('/login')
                return

            }
        }).catch(fill => {
            // console.log(fill)
            // Toast.clear()
            // Toast.fail('请求失败')

        })
    })

}
Vue.prototype.cart_num = 0
Vue.prototype.showtitle = (msg) => {
    return new Promise((ok, err) => {
        // if(lurl){
        //   err('请勿重新请求了亲')
        //   return
        // }
        Toast({
            message: msg,
            duration: 1500
        })
        setTimeout(() => {
            ok(msg)
        }, 1500);
    })
}
router.beforeEach((to, from, next) => {
    // if (to.meta.type == 'login') {
    //     next();
    //     document.documentElement.scrollTop = 0
    // } else {
    //     console.log(localStorage.getItem('login'))
    //     if (localStorage.getItem('login')) {
    //         next();
    //         document.documentElement.scrollTop = 0
    //             // setTimeout(() => {
    //             //     localStorage.clear();
    //             // }, 3600000)
    //     } else {
    //         next('/login');
    //         document.documentElement.scrollTop = 0
    //             // Toast({
    //             //     message: '请重新登录',
    //             //     duration: 1500
    //             // })
    //         return
    //     }
    // }
    document.documentElement.scrollTop = 0
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')