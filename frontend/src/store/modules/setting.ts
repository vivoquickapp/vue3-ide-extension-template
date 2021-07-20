import { SETTING } from "../mutation-types";

interface Settings {
  language: string;
  resource: string;
}

const state: Settings = {
  language: "zh-CN",
  resource: "",
};

const getters = {
  getLanguage: (state: Settings) => {
    return state.language;
  },
  getResource: (state: Settings) => {
    return state.resource;
  },
};

const actions = {
  changeLanguage({ commit }: any, language: string) {
    commit(SETTING.SET_LANGUAGE, language);
  },
  changeResource({ commit }: any, resource: string) {
    commit(SETTING.SET_RESOURCE, resource);
  },
};

const mutations = {
  [SETTING.SET_LANGUAGE](state: Settings, language: string) {
    state.language = language;
  },
  [SETTING.SET_RESOURCE](state: Settings, resource: string) {
    state.resource = resource;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
