export const state = () => ({
  navLinks: [
    { id: 1, name: 'gifts', active: false },
    { id: 2, name: 'furniture', active: false },
    { id: 3, name: 'technique', active: true },
    { id: 4, name: 'textile', active: false },
    { id: 5, name: 'dish', active: false },
    { id: 6, name: 'plumbing', active: false },
    { id: 7, name: 'construction', active: false },
    { id: 8, name: 'penal', active: false },
    { id: 9, name: 'stock', active: false },
  ],
})

export const getters = {
  navLinks: state => state.navLinks,
}

export const mutations = {
  SET_NAV_LINKS(state, id) {
    state.navLinks.forEach((link) => {
      link.active = link.id === id;
    })
  },
}

export const actions = {

}