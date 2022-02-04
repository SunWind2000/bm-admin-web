const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://xxxx/device/', // 对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    publicPath: './',
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
        config.module.rule('icons').include.add(resolve('src/assets/icons')).end().use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]',
        })
        .end()
    },
}
