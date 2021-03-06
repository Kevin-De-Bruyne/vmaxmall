import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/product'
import News from '../views/news'
import Contact from '../views/contact'
import FAQs from '../views/FAQs'
import ProductDetail from '../views/productDetail'
import Login from '../views/login'
import Reg from '../views/reg'
import Password from '../views/password'
import Cart from '../views/cart'
import ConOrder from '../views/conOrder'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            redirect: "/home",
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/product',
            name: 'product',
            component: Product
        },
        {
            path: '/conOrder',
            name: 'conOrder',
            component: ConOrder
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            meta: {
                type: 'login'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/reg',
            name: 'reg',
            component: Reg
        },
        {
            path: '/forget_password',
            name: 'password',
            component: Password
        },
        {
            path: '/FAQs',
            name: 'FAQs',
            component: FAQs
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/productDetail',
            name: 'productDetail',
            component: ProductDetail
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    ]
})