export const state = () => ({
  banners: null,
})

export const getters = {
  banners: state => state.banners,
}

export const mutations = {
  SET_BANNERS(state, banners) {
    state.banners = banners
  },
}

export const actions = {
  async getBanners({ commit }, {type, limit}) {
    return await this.$axiosURL.get('/banners', {params: {type, limit}})
      .then(response => {
        commit('SET_BANNERS', response.data.banners)   
        return response.data.banners;
      })
  },
}

export const namespaced = true;