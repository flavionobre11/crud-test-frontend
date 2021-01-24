import * as types from './mutation-types'

export default {
    [types.SET_EMPLOYERLIST] (state, payload) {
        state.employerList = payload
    }
}