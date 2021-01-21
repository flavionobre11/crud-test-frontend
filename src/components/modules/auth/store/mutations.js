import * as types from './mutation-types'

export default {
    [types.SET_EMPLOYER] (state, payload) {
        state.employer = payload
    },

    [types.SET_TOKEN] (state, payload) {
        state.token = payload
    }
}