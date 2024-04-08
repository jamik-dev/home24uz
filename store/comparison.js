export const state = () => ({
  comparison: null,
})

export const getters = {
  comparison: state => state.comparison,
}

export const mutations = {
  SET_COMPARISON(state, comparison) {
    state.comparison = comparison
  },
}

export const actions = {
  async getComparison({ commit }, products) {
    return await this.$axiosURL.post('/comparison', {products})
      .then(response => {
        commit('SET_COMPARISON', response)   
        return response.data;
      })
  },
}

export const namespaced = true;