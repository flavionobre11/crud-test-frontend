import { http } from '@/services/axios/'
// import * as types from './mutation-types'


// action que vai fazer o login e salvar 
// a response nos states
export const ActionFindEmployer = ({ dispatch }) => {
    http.get('/clients/').then(res => {
        console.log(res.data)
    })
}