import router from './router'
import store from './store'

import {getSession} from '@/utils/auth'
router.beforeEach((to, from, next) => {

    if(getSession()){   //判断登录状态
        store.commit('setLoginVal',true)
        if(to.path=='/login'){
            next('/')
        }else{
            next();
        }
    }else{
        store.commit('setLoginVal',false)
        if(to.path == '/login'){
            next()
        }else{
            next({path:'/login'})
        }
    }
})