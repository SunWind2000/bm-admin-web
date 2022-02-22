<template>
    <div class="login-vue" :style="bg">
        <div class="container">
            <p class="title">上海航天电源技术有限公司</p>
            <div class="input-c">
                <Input prefix="ios-contact" v-model="account" placeholder="用户名" clearable @on-blur="verifyAccount" />
                <p class="error">{{accountError}}</p>
            </div>
            <div class="input-c">
                <Input type="password" v-model="pwd" prefix="md-lock" placeholder="密码" clearable @on-blur="verifyPwd"
                @keyup.enter.native="submit" />
                <p class="error">{{pwdError}}</p>
            </div>
            <Button :loading="isShowLoading" class="submit" type="primary" @click="submit">登录</Button>
        </div>
    </div>
</template>

<script>
import { fetchUserData } from '../api'

export default {
    name: 'login',
    data() {
        return {
            account: '',
            pwd: '',
            accountError: '',
            pwdError: '',
            isShowLoading: false,
            bg: {},
        }
    },
    created() {
        this.bg.backgroundImage = 'url(' + require('../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
    },
    watch: {
        $route: {
            handler(route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true,
        },
    },
    methods: {
        verifyAccount() {
            if (this.account === '') {
                this.accountError = '账号不能为空'
            } else {
                this.accountError = ''
            }
        },
        verifyPwd() {
            if (this.pwd === '') {
                this.pwdError = '密码不能为空'
            } else {
                this.pwdError = ''
            }
        },
        submit() {
            fetchUserData(this.account, this.pwd).then(response => {
                console.log(response.data)
                if (response.data.status === 'success') {
                    this.isShowLoading = true
                    // 登陆成功 设置用户信息
                    localStorage.setItem('userImg', 'http://127.0.0.1:8000/users/upload' + response.data.data[0].fields.avatar)
                    localStorage.setItem('userName', response.data.data[0].fields.nickname)
                    localStorage.setItem('token', response.data.data[0].fields.email)
                    localStorage.setItem('email', response.data.data[0].fields.email)
                    localStorage.setItem('phone', response.data.data[0].fields.phone)
                    localStorage.setItem('gender', response.data.data[0].fields.gender)
                    localStorage.setItem('account', response.data.data[0].fields.username)
                    this.$router.push({ path: this.redirect || '/' })
                } else {
                    if (this.account !== 'admin') {
                        this.accountError = '账号错误，请重试'
                    }
                    if (this.pwd !== 'admin') {
                        this.pwdError = '密码错误，请重试'
                    }
                }
            })
            // fetchUserData().then(response => {
            //     console.log(response.data)
            // })
            // if (this.account === 'admin' && this.pwd === 'admin') {
            //     this.isShowLoading = true
            //     // 登陆成功 设置用户信息
            //     localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
            //     localStorage.setItem('userName', '管理员')
            //     // 登陆成功 假设这里是后台返回的 token
            //     localStorage.setItem('token', 'i_am_token')
            //     this.$router.push({ path: this.redirect || '/' })
            // } else {
            //     if (this.account !== 'admin') {
            //         this.accountError = '账号错误，请重试'
            //     }
            //
            //     if (this.pwd !== 'admin') {
            //         this.pwdError = '密码错误，请重试'
            //     }
            // }
        },
    },
}
</script>

<style>
.login-vue {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.login-vue .container {
    background: rgba(255, 255, 255, .5);
    width: 300px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
}
.login-vue .ivu-input {
    background-color: transparent;
    color: #fff;
    outline: #fff;
    border-color: #fff;
}
.login-vue ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, .8);
}
.login-vue ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, .8);
}
.login-vue .title {
    font-size: 16px;
    margin-bottom: 20px;
}
.login-vue .input-c {
    margin: auto;
    width: 200px;
}
.login-vue .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
}
.login-vue .submit {
    width: 200px;
}
.login-vue .account {
    margin-top: 30px;
}
.login-vue .account span {
    cursor: pointer;
}
.login-vue .ivu-icon {
    color: #eee;
}
.login-vue .ivu-icon-ios-close-circle {
    color: #777;
}
</style>
