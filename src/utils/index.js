import { resetRouter } from '../router'

export function resetTokenAndClearUser() {
    // 退出登陆 清除用户资料
    localStorage.setItem('token', '')
    localStorage.setItem('userImg', '')
    localStorage.setItem('userName', '')
    // 重设路由
    resetRouter()
}

// 格式化时间日期
function parseDate(month, day) {
    return month.toString() + '-' + day.toString()
}

// 获取每月天数
function getMonthDayNum(month) {
    let day = 0
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        day = 31
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        day = 30
    } else if (month === 2) {
        day = 28
    } else {
        day = 0
    }
    return day
}

// 获取系统当前“月-日”
export function getDatetime() {
    let datetime = new Date()
    let thisMonth = datetime.getMonth() + 1
    let today = datetime.getDate()
    let sevenDays = []
    sevenDays.push(parseDate(thisMonth, today))
    for (let i = 1; i < 7; i++) {
        today -= 1
        if (today < 1) {
            thisMonth -= 1
            if (thisMonth < 1) {
                thisMonth = 12
            }
            today = getMonthDayNum(thisMonth)
        }
        sevenDays.push(parseDate(thisMonth, today))
    }
    return sevenDays
}

export const defaultDocumentTitle = '电池监控系统'
export function getDocumentTitle(pageTitle) {
    if (pageTitle) return `${defaultDocumentTitle} - ${pageTitle}`
    return `${defaultDocumentTitle}`
}
