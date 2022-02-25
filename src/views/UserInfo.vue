<template>
    <div>
        <Row :gutter="20">
            <!-- 个人资料 -->
            <Col :xs="24" :sm="24" :md="8" :lg="6" :xl="5" style="margin-bottom: 10px;padding-left: 30px;width: 350px">
                <Card class="box-card">
                    <div slot="title" class="clearfix"><h3>个人信息</h3></div>
                    <div>
                        <div style="text-align: center;">
                            <img :src="userImg" class="avatar"/>
                        </div><br />
                        <div class="user-info">
                            <ul>
                                <li><div style="height: 100%"><Icon type="ios-key" />登录账号：
                                    <span class="user-right">{{ username }}</span>
                                </div></li><hr><br />
                                <li><Icon type="md-contact" />用户昵称：<span class="user-right">{{ nickname }}</span></li><hr><br />
                                <li><Icon type="ios-phone-portrait" />手机号码：<span class="user-right">{{ phone }}</span></li><hr><br />
                                <li><Icon type="ios-mail" />用户邮箱：<span class="user-right">{{ email }}</span></li><hr><br />
                            </ul>
                        </div>
                    </div>
                </Card>
            </Col>
            <!-- 用户资料 -->
            <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="17">
                <Card class="box-card">
                    <Tabs>
                        <TabPane label="基本资料" name="first">
                            <Form ref="form" style="margin-top: 10px;" v-model="formItem1" :label-width="80">
                                <FormItem label="昵称" required="true">
                                    <Input placeholder="请输入昵称" v-model="formItem1.nickname" style="width: 35%" />
                                    <span style="color: #C0C0C0;margin-left: 10px;">用户昵称不作为登录使用</span>
                                </FormItem>
                                <FormItem label="手机号" required="true">
                                    <Input placeholder="请输入手机号码" v-model="formItem1.phone" style="width: 35%" />
                                    <span style="color: #C0C0C0;margin-left: 10px;">设置后可以使用手机号码登录</span>
                                </FormItem>
                                <FormItem label="性别">
                                    <RadioGroup v-model="formItem1.gender" style="width: 178px">
                                        <Radio label="male">男性</Radio>
                                        <Radio label="female">女性</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="邮箱" required="true">
                                    <Input placeholder="请输入电子邮箱" v-model="formItem1.email" style="width: 35%" />
                                    <span style="color: #C0C0C0;margin-left: 10px;">设置后可以使用电子邮箱登录</span>
                                </FormItem>
                                <FormItem label="">
                                    <Button size="small" type="primary" style="width: 75px" @click="doSubmit1(false)">保存配置</Button>
                                </FormItem>
                            </Form>
                        </TabPane>
                        <TabPane label="更改密码" name="second">
                            <Form ref="form" style="margin-top: 10px;" v-model="formItem2" :label-width="100">
                                <FormItem label="旧密码" required="true">
                                    <Input
                                        type="password"
                                        placeholder="请输入旧密码"
                                        v-model="formItem2.oldPassword"
                                        style="width: 35%"
                                        password
                                    />
                                </FormItem>
                                <FormItem label="新密码" required="true">
                                    <Input
                                        type="password"
                                        placeholder="请输入新密码"
                                        v-model="formItem2.newPassword"
                                        style="width: 35%"
                                        password
                                    />
                                </FormItem>
                                <FormItem label="确认新密码" required="true">
                                    <Input
                                        type="password"
                                        placeholder="请再次输入新密码"
                                        v-model="formItem2.confirmNewPassword"
                                        style="width: 35%"
                                        password
                                    />
                                </FormItem>
                                <FormItem label="">
                                    <Button type="primary" size="small" style="width: 75px" @click="doSubmit2(false)">修改密码</Button>
                                </FormItem>
                            </Form>
                        </TabPane>
                        <TabPane label="上传头像" name="third">
                            <Form ref="form" style="margin-top: 10px;">
                                <FormItem label="">
                                    <Upload
                                        multiple
                                        type="drag"
                                        action="//jsonplaceholder.typicode.com/posts/">
                                        <div style="padding: 20px 0">
                                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                            <p>点击或拖拽文件上传</p>
                                        </div>
                                    </Upload>
                                </FormItem>
                                <FormItem label="">
                                    <Button type="primary" size="small" style="width: 75px" @click="doSubmit3(false)">上传头像</Button>
                                </FormItem>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import { updateUserData, updateUserPwd } from '../api'

export default {
    name: 'userInfo',
    data() {
        return {
            userImg: localStorage.getItem('userImg'),
            username: localStorage.getItem('account'),
            nickname: localStorage.getItem('userName'),
            phone: localStorage.getItem('phone'),
            email: localStorage.getItem('email'),
            formItem1: {
                nickname: localStorage.getItem('userName'),
                phone: localStorage.getItem('phone'),
                gender: 'male',
                email: localStorage.getItem('email'),
            },
            formItem2: {
                oldPassword: '',
                newPassword: '',
                confirmNewPassword: '',
            },
        }
    },
    methods: {
        doSubmit1(noDesc) {
            if (this.formItem1.nickname === '') {
                this.$Message.warning({
                    background: true,
                    content: '昵称不能为空',
                })
            } else if (this.formItem1.phone === '') {
                this.$Message.warning({
                    background: true,
                    content: '手机号不能为空',
                })
            } else if (this.formItem1.email === '') {
                this.$Message.warning({
                    background: true,
                    content: '邮箱账号不能为空',
                })
            } else {
                let updateData = {
                    username: localStorage.getItem('account'),
                    nickname: this.formItem1.nickname,
                    phone: this.formItem1.phone,
                    gender: this.formItem1.gender,
                    email: this.formItem1.email,
                }
                updateUserData(updateData).then(response => {
                    if (response.data.status === 'success') {
                        this.nickname = this.formItem1.nickname
                        this.email = this.formItem1.email
                        this.phone = this.formItem1.phone
                        localStorage.setItem('userName', this.formItem1.nickname)
                        localStorage.setItem('phone', this.formItem1.phone)
                        localStorage.setItem('gender', this.formItem1.gender)
                        localStorage.setItem('email', this.formItem1.email)
                        this.$Notice.success({
                            title: '成功',
                            desc: noDesc ? '' : '修改基本资料配置成功',
                        })
                    } else {
                        this.$Notice.error({
                            title: '失败',
                            desc: noDesc ? '' : response.data.error_msg,
                        })
                    }
                })
            }
        },
        doSubmit2(noDesc) {
            if (this.formItem2.oldPassword === '') {
                this.$Message.warning({
                    background: true,
                    content: '旧密码不能为空',
                })
            } else if (this.formItem2.newPassword === '') {
                this.$Message.warning({
                    background: true,
                    content: '新密码不能为空',
                })
            } else if (this.formItem2.confirmNewPassword === '' || this.formItem2.newPassword !== this.formItem2.confirmNewPassword) {
                this.$Message.error({
                    background: true,
                    content: '两次输入的新密码不一致，请检查后提交',
                })
            } else {
                let updatePwd = {
                    username: localStorage.getItem('account'),
                    password: this.formItem2.newPassword,
                }
                updateUserPwd(updatePwd).then(response => {
                    console.log(response.data)
                    if (response.data.status === 'success') {
                        this.$Notice.success({
                            title: '成功',
                            desc: noDesc ? '' : '修改密码成功',
                        })
                    } else {
                        this.$Notice.error({
                            title: '失败',
                            desc: noDesc ? '' : response.data.error_msg,
                        })
                    }
                })
            }
        },
        doSubmit3(noDesc) {
            this.$Notice.success({
                title: '成功',
                desc: noDesc ? '' : '头像上传成功',
            })
        },
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container {
    padding: 20px 20px 45px 20px;
    height: 650px;
    overflow: auto;
}
.box-card {
    margin-bottom: 5px;
    span {
      margin-right: 28px;
    }
}
.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
::v-deep .box-card {
    margin-bottom: 5px;
    span {
      margin-right: 28px;
    }
}
.user-info {
    padding-left: 0;
    list-style: none;
    li {
        border-bottom: 1px solid #F0F3F4;
        padding: 11px 0;
        font-size: 13px;
    }
    .user-right {
        text-align: right;
        a {
            color: #317EF3;
        }
    }
}
</style>
