const path = require('path');

module.exports = {
  //入口文件
  entry: './src/index.js',
  //出口哦
  output: {
    //输出的文件名
    filename: 'bundle.js',
    //输出的路径
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};