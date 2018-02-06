import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'

Vue.use(VueI18n)

const messages = {
  en: require('./en.json')
}

export default new VueI18n({
  locale: store.getters['ui/language'],
  messages
})
