export const state = () => ({
  brands: null,
  brand: null,
  categories: null,
  products: null
})

export const getters = {
  brands: state => state.brands,
  brand: state => state.brand,
  categories: state => state.categories,
  products: state => state.products
}

export const mutations = {
  SET_BRANDS(state, brands) {
    state.brands = brands;
  },
  SET_BRAND(state, brand) {
    state.brand = brand;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  }
}

export const actions = {
  async getBrands({ commit }) {
    return await this.$axiosURL.get('/brands')
      .then((response) => {
        commit('SET_BRANDS', response.data.brands);
      });
  },
  async getBrand({ commit }, slug) {
    return await this.$axiosURL.get('/brands/' + slug)
      .then((response) => {
        commit('SET_BRAND', response.data.brand);
        commit('SET_CATEGORIES', response.data.categories);
        commit('SET_PRODUCTS', response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const namespaced = true;