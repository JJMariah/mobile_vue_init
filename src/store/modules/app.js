import shop from '../../api/shop'

const state = {
//   items: [],
//   checkoutStatus: null
}

// getters
const getters = {
//   cartProducts: (state, getters, rootState) => {
//     return state.items.map(({ id, quantity }) => {
//       const product = rootState.products.all.find(product => product.id === id)
//       return {
//         title: product.title,
//         price: product.price,
//         quantity
//       }
//     })
//   }
}
// actions
const actions = {
//   addProductToCart ({ state, commit }, product) {
//     commit('setCheckoutStatus', null)
//   }
}

// mutations
const mutations = {
//   setCheckoutStatus (state, status) {
//     state.checkoutStatus = status
//   }
}

export default {
    /* vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之
        后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名*/
  namespaced: true, 
  state,
  getters,
  actions,
  mutations
}