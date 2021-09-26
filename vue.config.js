module.exports = {
        publicPath: './',
        pages: {
            index: {
                entry: 'src/main.js',
                title: '仿网易云音乐'
            }
        },

        chainWebpack: config => {
            config.module
                .rule('swf')
                .test(/\.swf$/)
                .use('url-loader')
                .loader('url-loader')
                .options({
                    limit: 10000
                })
        },

        /*  pluginOptions: {
             'style-resources-loader': {
                 preProcessor: 'scss',
                 patterns: [
                     path.resolve(__dirname, './src/assets/baseStyle/var.scss'),
                     path.resolve(__dirname, './src/assets/baseStyle/mixin.scss')
                 ]
             }
         } */
        /*    devServer: {
               open: true,
               host: 'localhost',
               port: '8080',

               proxy: {
                   '/api': {
                      
                       target: 'https://autumnfish.cn',
                       changeOrigin: true,
                       ws: true,
                       secure: true,
                       pathRewrite: {
                           '^/api': ''
                       }
                   }

               },

           } */
        /*   https://autumnfish.cn */
        /*    http://music.cpengx.cn */
        /*  proxyTable: {
                '/api': {
                    target: 'http://localhost:8083/', //设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true, //這裡true表示实现跨域
                    pathRewrite: {
                        '^/api': '/' //这里理解成用‘/api’代替target里面的地址，后面组件
                        中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，
                        直接写‘/api/user/add’即可
                    }
                }
            } */
    }
    // vue.config.js