export const state = () => ({
  posts: null,
  post: null,
  other_posts: null,
})

export const getters = {
  posts: state => state.posts,
  post: state => state.post,
  other_posts: state => state.other_posts,
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  },
  SET_OTHER_POSTS(state, other_posts) {
    state.other_posts = other_posts
  },
}

export const actions = {
  async getPosts({ commit }, {limit}) {
    return await this.$axiosURL.get('/posts', {params: {limit}})
      .then(response => {
        commit('SET_POSTS', response.data.posts)   
        return response.data.posts;
      })
  },
  async getPost({ commit }, slug) {
    return await this.$axiosURL.get(`/posts/${slug}`)
      .then(response => {
        commit('SET_POST', response.data.post)   
        commit('SET_OTHER_POSTS', response.data.other_posts)
        return response.data;
      })
  }
}

export const namespaced = true;