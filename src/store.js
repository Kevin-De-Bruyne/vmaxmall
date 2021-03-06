import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart_num: 0,
        cart_money: 0,
    },
    getters: {

    },
    mutations: {
        getdata_cart(state, data) {
            var token = localStorage.getItem('login')
            Vue.prototype.$ajax({
                url: 'api/cart/cart',
                data: {
                    token: token
                }
            }).then(res => {
                console.log(res);
                this.commit('setcart_num', {
                    cart_money: res.sum_price,
                    cart_num: res.number
                })
            })
        },
        getdata_home(state, data) {
            var token = localStorage.getItem('login')
            Vue.prototype.$ajax({
                url: 'api/index/index',
                data: {
                    token: token
                }
            }).then(res => {
                console.log(res);
                this.commit('setcart_index', {
                    cart_money: res.data.cart_money,
                    cart_num: res.data.cart_num
                })
            })
        },
        setcart_num(state, { cart_num, cart_money }) {
            state.cart_num = cart_num
            state.cart_money = cart_money
        },
        setcart_index(state, { cart_num, cart_money }) {
            state.cart_num = cart_num
            state.cart_money = cart_money
        }
    },
    actions: {
        getdata_cart(context, data) {
            context.commit('getdata_cart', data)
        },
        getdata_home(context, data) {
            context.commit('getdata_home', data)
        },
    }
})