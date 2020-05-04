// vue.config.js
// https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
	
	devServer: {
		proxy: {
			'/dataApi': {
				target: 'http://121.199.44.50:8989/',//需要代理的地址
				changeOrigin: true,  //是否跨域
				//secure: false,  // 设置支持https协议的代理
				pathRewrite: {
					'^/dataApi': '/'   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
				}
			}
		}
	}
  
}
