import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3001',
    timeout:1000,
    headers:{
        'ContentType': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

const setBearerToken = token =>{
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export {http, setBearerToken}

// axios esta sendo utilizado nas actions do vuex
// verificar em components>modules>auth>store
