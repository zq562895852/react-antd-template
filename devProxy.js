 const server = require('./server/server')

const addProxy = () => (config) => {
	// 代理服务器 提供在服务器内部所有其他中间件之前执行自定义中间件的能力。
    config.before = server;
    //  提供在服务器内部所有其他中间件之后执行自定义中间件的能力。
     config.after = (app) => {
        //  ....
     }
	// 代理配置
	config.proxy = {
		'/api': {
			target: 'http://localhost:3001/',
			// // 如果接口跨域，需要进行这个参数配置
			changeOrigin: true,
			// devServer默认不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受，只要设置 secure: false 就行
			secure: false,
			pathRewrite: {
				'^/api': ''
			}
		}
	};

	return config;
 };

module.exports = { addProxy };

