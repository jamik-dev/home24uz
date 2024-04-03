export const state = () => ({
  categories: null,
  category: null,
})

export const getters = {
  categories: state => state.categories,
  category: state => state.category,
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  async getCategories({ commit }) {
    return await this.$axiosURL.get('/categories')
      .then(response => {
        commit('SET_CATEGORIES', response.data.data)   
        console.log(response.data.data)
        return response.data.data;
      })
  },
  async getCategory({ commit }, slug) {
    return await this.$axiosURL.get(`/categories/${slug}`)
      .then(response => {
        commit('SET_CATEGORY', response.data)
        return response.data;
      })
  },
}

export const namespaced = true;