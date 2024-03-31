export const state = () => ({
  products: null,
  product: null,
  attributes: null
})

export const getters = {
  products: state => state.products,
  product: state => state.product,
  attributes: state => state.attributes
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
  SET_ATTRIBUTES(state, attributes) {
    state.attributes = attributes
  }
}

export const actions = {
  async getProducts({ commit }, {type, limit}) {
    return await this.$axiosURL.get('/products', {params: {type, limit}})
      .then(response => {
        commit('SET_PRODUCTS', response.data.products)   
        return response.data.products;
      })
  },
  async getProduct({commit}, slug) {
    return await this.$axiosURL.get(`/products/${slug}`)
      .then(response => {
        commit('SET_PRODUCT', response.data.product);
        commit('SET_ATTRIBUTES', response.data.attributes);   
        console.log(response.data);
        return response.data;
      })
  }
}

export const namespaced = true;