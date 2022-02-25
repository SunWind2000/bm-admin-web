# 基于Vue的轻量级电池监控管理系统

### 一、相关依赖
* [vue-router](https://router.vuejs.org/zh/)
* [iview](https://www.iviewui.com/docs/guide/install)
* [axios](https://www.kancloud.cn/yunye/axios/234845)
* [vuex](https://vuex.vuejs.org/zh/)

### 二、功能

#### 登录页
* 一周七天自动切换不同的壁纸（建议自己配置）

#### 标签栏
* 点击标签切换页面
* 刷新当前标签页
* 关闭其他标签/关闭所有标签

**注意：** 组件的名称和路由的名称一定要一致，例如 `Home.vue` 组件名称 `name: home`，则在路由文件中也要给它设置为 `name: home`，否则页面内容不能缓存

```js
// 在router文件中
{
    path: 'home',
    name: 'home',
    component: () => import('../views/Home.vue')
}

// 在Home.vue中
export default {
    name: 'home'
}
```

#### 侧边栏
* 伸展/收缩
* 页面宽度过小自动收缩
* 多级菜单（利用iView组件）

#### 用户相关
* 消息通知
* 用户头像
* 基本资料

#### 动态菜单栏
* 根据数据动态生成菜单
* 在菜单项上添加 hidden 属性可以隐藏该菜单项，但还是可以正常访问页面，具体请看 DEMO 及其相关代码

#### 面包屑
* 展示当前页面的路径

#### 权限控制
* 如果在未登陆的情况下访问指定页面 将会重定向到登陆页

#### [eslint + vscode 自动格式化代码](https://github.com/woai3c/Front-end-articles/blob/master/eslint-vscode-format.md)
具体配置方法请点击上面的链接，如果不需要 eslint，请将相关依赖卸载以及根目录下的 `.eslintrc.js` 删除。

#### [jest 单元测试](https://vue-test-utils.vuejs.org/zh/guides/testing-single-file-components-with-jest.html)
如果不需要，请卸载相关依赖及删除根目录下的 `tests` 目录

#### 页面标题 `document.title`
在 `src/utils/index` 下可设置默认的 `title`，在每个路由配置项上可设置对应的 `title`，具体示例请看代码

#### 其它
* 利用`axios`拦截器 实现了`ajax`请求前展示`loading` 请求结束关闭`loading`


### 三、使用
#### 下载
```
git clone git@github.com:SunWind2000/bm-admin-web.git

cd bm-admin-web

npm install
```

#### 开发/预览
```
npm run serve
```

#### 打包（应用到生产环境）
````
npm run build
````
打包后的文件不能放在服务器根目录，否则会出现空白页面。

如果确实要把文件放在服务器根目录则需要更改打包的路径，打开 `vue.config.js` 文件，将如下代码删去即可。
```js
publicPath: './',
```

#### 配套的后端项目地址
[battery-monitor](https://github.com/SunWind2000/battery-monitor)

### 四、License
MIT

