import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:3001',
    timeout:1000,
    headers:{
        'ContentType': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

// axios esta sendo utilizado nas actions do vuex
// verificar em components>modules>auth>store
