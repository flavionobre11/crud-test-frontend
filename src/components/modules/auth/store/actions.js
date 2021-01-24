import { http } from '@/services/axios/'
import * as storage from '../storage'
import * as types from './mutation-types'


// action que vai fazer o login e salvar 
// a response nos states
export const ActionLogin = ({ dispatch }, payload) => {
    return http.post('auth/login', payload).then(response => {
        dispatch('ActionSetEmployer', response.data.employer);
        dispatch('ActionSetToken', response.data.token);
    })
}

export const ActionCheckToken = ({ dispatch, state }) => {
    if (state.token) {
        return Promise.resolve(state.token)
    }

    const token = storage.getLocalToken();

    if (!token){
        return Promise.reject(new Error ('token invalido.'))
    }

    dispatch('ActionSetToken', token);
    return dispatch('ActionLoadSession')
}



export const ActionLoadSession = ({ dispatch }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { token, employer } } = await http.get('/employer/load_session')
            dispatch('ActionSetEmployer', employer);
            dispatch('ActionSetToken', token);
            resolve()
        } catch (err) {
            dispatch('ActionSingOut');
            reject(err);
        }
    })
}

// action de salvar informacoes do employer no state
export const ActionSetEmployer = ({ commit }, payload) => {
    commit(types.SET_EMPLOYER, payload)
}

// action de salvar token no state
export const ActionSetToken = ({ commit }, payload) => {
    storage.setLocalToken(payload);
    storage.setHeaderToken(payload);
    commit(types.SET_TOKEN, payload);
}

export const ActionSingOut = ({ dispatch }) =>{
    storage.setHeaderToken('');
    storage.deleteLocalToken('');

    dispatch('ActionSetEmployer', {});
    dispatch('ActionSetToken', '');
}