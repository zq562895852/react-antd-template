module.exports = (app) => {
	app.get('/some/path', function(req, res) {
		res.json({ custom: 'response' });
	});
	// 这里的端口与proxy  target保持一致，实际上请求的地址就是这个app的地址，app是devServer内部提供的服务器
	// 默认的服务器端口是3000
	app.listen(3001, () => {
		console.log('server running at 3001');
	});
};
