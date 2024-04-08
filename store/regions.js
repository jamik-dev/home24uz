export const state = () => ({
  regions: null,
})

export const getters = {
  regions: state => state.regions,
}

export const mutations = {
  SET_REGIONS(state, regions) {
    state.regions = regions
  },
}

export const actions = {
  async getRegions({ commit }) {
    return await this.$axiosURL.get('/regions')
      .then(response => {
        commit('SET_REGIONS', response.data.regions)   
        return response.data.regions;
      })
  },
}

export const namespaced = true;