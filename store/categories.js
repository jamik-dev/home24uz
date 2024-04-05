export const state = () => ({
  categories: null,
  category: null,
  treeData: null,
  expandedKeys: [],
})

export const getters = {
  categories: (state) => state.categories,
  category: (state) => state.category,
  treeData: (state) => state.treeData,
  expandedKeys: (state) => state.expandedKeys,
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CATEGORY(state, category) {
    state.category = category
  },
  SET_TREE_DATA(state, treeData) {
    state.treeData = [...treeData]
    function fixCategories(treeCategories) {
      treeCategories.forEach((treeCategory) => {
        if(treeCategory.parentSlug) {
          treeCategory.slug = `${treeCategory.parentSlug}/${treeCategory.slug}`
        }
        treeCategory.children.forEach((subCategory) => {
          subCategory.slug = `${treeCategory.slug}/${subCategory.slug}`
          if(treeCategory.children) {
            subCategory.children.forEach((subSubCategory) => {
              subSubCategory.children = [];
              subSubCategory.slug = `${subCategory.slug}/${subSubCategory.slug}`
            });
          }
        })
      })
    }
    fixCategories(state.treeData)
  },
  SET_EXPANDED_KEYS(state, expandedKeys) {
    state.expandedKeys = expandedKeys
  },
}

export const actions = {
  async getCategories({ commit }) {
    return await this.$axiosURL.get('/categories').then((response) => {
      commit('SET_CATEGORIES', response.data.data)
      console.log(response.data.data)
      return response.data.data
    })
  },
  async getCategory({ commit }, slug) {
    return await this.$axiosURL.get(`/categories/${slug}`).then((response) => {
      commit('SET_CATEGORY', response.data)
      commit(
        'SET_EXPANDED_KEYS',
        response.data.category.parent
          ? [response.data.category.parent_id, response.data.category.id]
          : [response.data.category.id]
      )
      return response.data
    })
  },
}

export const namespaced = true
