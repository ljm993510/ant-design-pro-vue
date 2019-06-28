import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en_us from './en-us'
import zh_cn from './zh-cn'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  // fallbackLocale: defaultLanguage,
  messages:{
    'zh-CN': zh_cn,
    'en-US': en_us
  }
})
export default i18n