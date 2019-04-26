import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }]
})
