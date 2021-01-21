import { http } from '@/services/axios/'
import * as types from './mutation-types'


// action que vai fazer o login e salvar 
// a response nos states
export const ActionLogin = ({ dispatch }, payload) => {
    return http.post('auth/login', payload).then(response => {
        dispatch('ActionSetEmployer', response.data.employer);
        dispatch('ActionSetToken', response.data.token);
    })
}

// action de salvar informacoes do employer no state
export const ActionSetEmployer = ({ commit }, payload) => {
    commit(types.SET_EMPLOYER, payload)
}

// action de salvar token no state
export const ActionSetToken = ({ commit }, payload) => {
    commit(types.SET_TOKEN, payload)
}