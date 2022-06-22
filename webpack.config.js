// 引入node的path模块
const { resolve } = require('path');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'main.js', // 输出的文件名
        path: path.resolve(__dirname, 'dist') // 输出文件的路径（__dirname指该配置文件所在的目录）
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/, // 针对这三种格式的文件使用file-loader处理
                use: {
                    loader: 'file-loader',
                    options: {
                        // 定义打包后文件的名称；
                        // [name]:原文件名，[hash]:hash字符串（如果不定义名称，默认就以hash命名，[ext]:原文件的后缀名）
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/' //  定义图片输出的文件夹名（在output.path目录下）
                    }
                }
            }
        ]
    },
    alias:{
        '@':resolve('src')
    }
}
