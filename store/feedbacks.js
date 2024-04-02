export const state = () => ({
  feedbacks: null,
})

export const getters = {
  feedbacks: state => state.feedbacks,
}

export const mutations = {
  SET_FEEDBACKS(state, feedbacks) {
    state.feedbacks = feedbacks
  },
}

export const actions = {
  async getFeedbacks({ commit }) {
    return await this.$axiosURL.get('/feedbacks')
      .then(response => {
        console.log(response.data.feedbacks)
        commit('SET_FEEDBACKS', response.data.feedbacks)   
        return response.data.feedbacks;
      })
  },
}

export const namespaced = true;