export const state = () => ({
  check: {
    authorized: false,
    message: null,
  }
})

export const getters = {
  banners: state => state.banners,
}

export const mutations = {
  SET_AUTH_CHECK(state, check) {
    state.check = check;
  },
}

export const actions = {
  async authCheck({ commit }, phone_number) {
    return await this.$axiosURL.post('/check', phone_number.replace(/\D/g, ''))
      .then(response => {
        commit('SET_AUTH_CHECK', response.data)   
        return response.data;
      })
  },
}

export const namespaced = true;