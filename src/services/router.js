import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginComponent from './components/pages/login/LoginComponent'
import RecoveryComponent from './components/pages/recovery/RecoveryComponent'

Vue.use(VueRouter);

const Router = new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'/'
        },
        {
            path:'/',
            redirect:LoginComponent
        },
        {
            path:'/recovery',
            redirect: RecoveryComponent
        }
    ]
})

export default Router

