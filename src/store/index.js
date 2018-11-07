import Vue from 'vue'
import Vuex from 'vuex'
import center from './modules/center';

const state={
    isRed:false
}

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    modules:{
        center
    }
})

export default store