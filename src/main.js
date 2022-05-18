import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import AboutUs from "./components/pages/AboutUs.vue";
import ShoppingCart from "./components/pages/Shopping_CartPage.vue";
import ShopPage from "./components/pages/ShopPage.vue";
import SignUpComp from "./components/pages/SignUp.vue";
import DetailsPage from "./components/pages/DetailsPage.vue";
import ConfirmPage from './components/pages/Confirm.vue'
import ErrorPage from './components/pages/ErrorPage.vue';
import axios from 'axios';
import GAuth from 'vue3-google-oauth2'

const gAuthOption = {
    clientId: '666912510989-ner1vdbr1qpsgpnngqjpft2rb5emjnkb.apps.googleusercontent.com',
    scope: 'email',
    prompt: 'consent',
    fetch_basic_profile: false
}

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: "/home",
        component: HomePage,
    },
    {
        path: "/about",
        component: AboutUs,
    },
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/shopping",
        component: ShoppingCart,
    },
    {
        path: "/shop",
        component: ShopPage,
    },
    {
        path: "/products/:id",
        component: DetailsPage,
    },
    {
        path: "/signup",
        component: SignUpComp,
    },
    {
        path: "/confirm",
        component: ConfirmPage,
    },
    {
        path: '/:Notfound(.*)*',
        component: ErrorPage
    },
]

axios.defaults.baseURL = 'http://localhost:3000/';
const router = createRouter({
    history: createWebHistory(),
    routes
})

library.add(fas, fab);
createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .use(GAuth, gAuthOption)
    .mount('#app');
