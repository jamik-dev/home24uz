export const state = () => ({
  showcases: null,
  showcase: null,
  categories: null,
  expandedKeys: [],
})

export const getters = {
  showcases: state => state.showcases,
  showcase: state => state.showcase,
  categories: state => state.categories,
  expandedKeys: state => state.expandedKeys
}

export const mutations = {
  SET_SHOWCASES(state, showcases) {
    state.showcases = showcases
  },
  SET_SHOWCASE(state, showcase) {
    state.showcase = showcase
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories.filter((obj, index, self) =>
    index === self.findIndex((t) => (
        t.id === obj.id
    ))
);
  },
  SET_EXPANDED_KEYS(state, expandedKeys) {
    let id = this.$router.currentRoute.query.category;
    state.expandedKeys.push(parseInt(id));
    function loopThroughCategories(categories, parent_id) {
      categories.forEach(category => {
        if(category.id == id && parent_id) {
          state.expandedKeys.push(parent_id);
        }
        if (category.children) {
          loopThroughCategories(category.children, category.id)
        }
      })
    }
    loopThroughCategories(expandedKeys, null);
    state.expandedKeys = [...new Set(state.expandedKeys)];  
  }
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
    return await this.$axiosURL.get(`/showcases/${slug}`, {params: {...this.$router.currentRoute.query}})
      .then(response => {
        commit('SET_SHOWCASE', response.data.showcase) 
        commit('SET_CATEGORIES', response.data.categories)  
        commit('SET_EXPANDED_KEYS', response.data.categories)
        return response.data;
      })
  },
}

export const namespaced = true;