import request from '@/utils/request'

// 后端接口的主机地址和端口号
const host = 'http://127.0.0.1'
const port = '8000'
export function fetchUserData(account, pwd) {
    return request({
        url: host + ':' + port + '/api/login?username=' + account.toString() + '&password=' + pwd.toString(),
        method: 'GET',
    })
}
