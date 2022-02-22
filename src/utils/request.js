import axios from 'axios'

const service = axios.create({
    baseURL: window.location.origin,
    timeout: 60000,
})

service.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.Authorization = localStorage.getItem('token')
    }

    return config
}, (error) => Promise.reject(error))

service.interceptors.response.use(response => {
    const res = response.data

    // 如果接口正常，直接返回数据
    return res
}, (error) => Promise.reject(error))

export default service
