import { resetRouter } from '../router'

export function resetTokenAndClearUser() {
    // 退出登陆 清除用户资料
    localStorage.setItem('token', '')
    localStorage.setItem('userImg', '')
    localStorage.setItem('userName', '')
    // 重设路由
    resetRouter()
}

// 货期获取系统当前“月-日”
export function getTodayDatetime() {
    let datetime = new Date()
    let Month = datetime.getMonth() + 1
    let today = datetime.getDate()
    return {
        Month,
        today,
    }
}

export const defaultDocumentTitle = '电池监控系统'
export function getDocumentTitle(pageTitle) {
    if (pageTitle) return `${defaultDocumentTitle} - ${pageTitle}`
    return `${defaultDocumentTitle}`
}
