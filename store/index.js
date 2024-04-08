export const state = () => ({
  compares: [],
  favorites: [],
  carts: []
})

export const getters = {
  compares: state => state.compares,
  favorites: state => state.favorites,
  carts: state => state.carts,
}

export const mutations = {
  SET_COMPARES(state, payload) {
    state.compares = payload
  },
  SET_FAVORITES(state, payload) {
    state.favorites = payload
  },
  SET_CARTS(state, payload) {
    state.carts = payload
  }
}

export const actions = {
  loadFromLocalStorage({ commit }, name) {
    const data = JSON.parse(localStorage.getItem(name));
    if (data !== null) {
      commit('SET_' + name.toUpperCase(), data);
    }
  },
  saveLocalStorage({ dispatch }, {id, name} ) {
    console.log('saveLocalStorage', id, name)
    let storage = JSON.parse(localStorage.getItem(name)) || [];
    let index = storage.indexOf(id);
    if (index !== -1) {
      storage.splice(index, 1);
    } else {
      storage.push(id);
    }
    localStorage.setItem(name, JSON.stringify(storage));
    dispatch('loadFromLocalStorage', name);
  },
}