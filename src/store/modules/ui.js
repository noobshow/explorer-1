import * as types from '../mutation-types'

export default {
  namespaced: true,
  state: {
    language: 'en',
    nightMode: false,
    priceChart: true,
    headerType: null,
    mainMenuVisible: false,
  },
  mutations: {
    [types.SET_UI_LANGUAGE](state, payload) {
      state.language = payload.value
    },
    [types.SET_UI_NIGHT_MODE](state, payload) {
      state.nightMode = payload.value
    },
    [types.SET_UI_HEADER_TYPE](state, payload) {
      state.headerType = payload.value
    },
    [types.SET_UI_MENU_VISIBLE](state, payload) {
      state.mainMenuVisible = payload.value
    },
    [types.SET_UI_PRICE_CHART](state, payload) {
      state.priceChart = payload.value
    },
  },
  actions: {
    setLanguage: ({ commit }, value) => {
      commit({
        type: types.SET_UI_LANGUAGE,
        value,
      })
    },
    setNightMode: ({ commit }, value) => {
      localStorage.setItem('nightMode', value)

      value = JSON.parse(value)

      commit({
        type: types.SET_UI_NIGHT_MODE,
        value,
      })
    },
    setHeaderType: ({ commit }, value) => {
      commit({
        type: types.SET_UI_HEADER_TYPE,
        value,
      })
    },
    setMenuVisible: ({ commit }, value) => {
      commit({
        type: types.SET_UI_HEADER_TYPE,
        value: null,
      })

      commit({
        type: types.SET_UI_MENU_VISIBLE,
        value,
      })
    },
    setPriceChart: ({ commit }, value) => {
      localStorage.setItem('priceChart', value)

      value = JSON.parse(value)

      commit({
        type: types.SET_UI_PRICE_CHART,
        value,
      })
    },
  },
  getters: {
    language: state => state.language,
    nightMode: state => state.nightMode,
    priceChart: state => state.priceChart,
    headerType: state => state.headerType,
    mainMenuVisible: state => state.mainMenuVisible,
  },
}
