import setting from './modules/setting';
import {
    createStore
} from 'vuex'

export const store = createStore({
    state: {},
    modules: {
        setting
    },
})
