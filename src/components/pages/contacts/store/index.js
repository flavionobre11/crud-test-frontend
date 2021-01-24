import * as actions from './actions'
import state from './state'
import mutations from './mutations'


export default {
    state,
    actions,
    mutations,
    namespaced: true
}

// o arquivo foi separado em partes para uma
// melhor organização.