module.exports = {
    devTest: { //部署到测试服务器上
        remotePath: '/app/', //部署到服务器的路径
        host: '192.168.13.75', //ip地址
        user: 'root', //帐号
        pass: 'bdgm;2015', //密码
        port: 9080 //端口
    },
    devDist: { //部署正式服务器上
        remotePath: '/app/', //部署到服务器的路径
        host: '192.168.13.75', //ip地址
        user: 'root', //帐号
        pass: 'bdgm;2015', //密码
        port: 9080 //端口
    },
    publicPath: '/app/', //程序在网站根路径地址
    target: 'http://localhost:3000/' //连接的服务器地址
}
