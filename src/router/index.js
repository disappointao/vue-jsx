import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/home'
import baseForm from "../views/baseForm/baseForm";
Vue.use(VueRouter)

const router  = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home/form'
        },
        {
            path:'/home',
            name:'home',
            component:Home,
            children: [
                {
                    path: 'form',
                    component:baseForm
                }
            ]
        }
    ]
})
export default router;
