export const state = () => ({
  showcases: null,
  showcase: null,
  categories: null
})

export const getters = {
  showcases: state => state.showcases,
  showcase: state => state.showcase,
  categories: state => state.categories
}

export const mutations = {
  SET_SHOWCASES(state, showcases) {
    state.showcases = showcases
  },
  SET_SHOWCASE(state, showcase) {
    state.showcase = showcase
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async getShowcases({ commit }) {
    return await this.$axiosURL.get('/showcases')
      .then(response => {
        commit('SET_SHOWCASES', response.data.showcases)   
        return response.data.showcases;
      })
  },
  async getShowcase({ commit }, slug) {
    return await this.$axiosURL.get(`/showcases/${slug}`)
      .then(response => {
        commit('SET_SHOWCASE', response.data.showcase) 
        commit('SET_CATEGORIES', response.data.categories)  
        return response.data;
      })
  },
}

export const namespaced = true;