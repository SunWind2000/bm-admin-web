import request from '@/utils/request'

// 后端接口的主机地址和端口号
const host = 'http://127.0.0.1'
const port = '8000'

// 用户头像地址所在文件夹
export const avatarBaseUrl = host + ':' + port + '/upload/'

// 用户头像上传api地址
export const uploadApiUrl = host + ':' + port + '/api/upload-user-avatar/'

// 获取用户数据
export function fetchUserData(account, pwd) {
    return request({
        url: host + ':' + port + '/api/login?username=' + account.toString() + '&password=' + pwd.toString(),
        method: 'GET',
    })
}

// 个人信息更改提交
export function updateUserData(userData) {
    return request({
        url: host + ':' + port + '/api/update-user-data'
             + '?username=' + userData.username.toString()
             + '&nickname=' + userData.nickname.toString()
             + '&phone=' + userData.phone.toString()
             + '&gender=' + userData.gender.toString()
             + '&email=' + userData.email.toString(),
        method: 'GET',
    })
}

// 密码更改提交
export function updateUserPwd(userData) {
    return request({
        url: host + ':' + port + '/api/update-user-password'
             + '?username=' + userData.username.toString()
             + '&password=' + userData.password.toString(),
        method: 'GET',
    })
}

// 获取dashboard数据
export function getDashboardData() {
    return request({
        url: host + ':' + port + '/system/get-system-data',
        method: 'GET',
    })
}

// 获取单体电池数据
export function getBatteryData(batteryId) {
    return request({
        url: host + ':' + port + '/system/get-battery-cell-data'
             + '?batteryId=' + batteryId.toString(),
        method: 'GET',
    })
}

// 获取系统历史错误、报警信息
export function getSystemHistoryInfo() {
    return request({
        url: host + ':' + port + '/system/get-system-history-info',
        method: 'GET',
    })
}
