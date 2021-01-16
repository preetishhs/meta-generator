import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    templateItems: {
      skinTitle:
        '{brand} {model} Skins, Wraps, Decals, Stickers Online India » Riggear',
      caseTitle:
        '{brand} {model} Cases, Mobile Covers, Back Covers, Online India » Riggear',
      skinDescription:
        "Buy best {brand} {model} mobile skins wraps and covers online from India's most trusted brand Riggear. Guaranteed High Quality {brand} {model} 3M Skins and wraps with at most precision.",
      caseDescription:
        '{brand} {model} phone case Online - Riggear offers best quality {model} mobile cover at a discounted price. The case has Slim profile with precise cut-outs and Raised edges for complete protection. Match with a Camera skin for added protection.',
      skinKeywords:
        'best {brand} {model} skins, best mobile skins India, best {brand} {model} wraps, best {model} skins, {brand} {model} skins india, best {brand} {model} carbon fiber skins, best {brand} {model} online, {brand} {model} camo skins, {brand} skins',
      caseKeywords:
        'best {brand} {model} back covers, best mobile cases India, {brand} {model} cases, best {model} cover, {brand} {model} mobile cover india, best {brand} {model} camo case, best {brand} {model} phone cover online, {brand} {model} skin cases',
    },
  },
  mutations: {
    updateItems(state, data) {
      state.templateItems = data
    },
  },
  actions: {},
  modules: {},
})
