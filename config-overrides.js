const {
	override,
	overrideDevServer,
	addDecoratorsLegacy,
	fixBabelImports,
	addLessLoader,
	watchAll
} = require('customize-cra');
// 主题
const themeColor = require('./src/theme/theme-color-config.js')
module.exports = {
	webpack: override(
		// usual webpack plugin
        // 启用装饰器
        addDecoratorsLegacy(),
        // antd按需导入
		fixBabelImports('import', {
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: true
        }),
        // 配置antd的less属性
		addLessLoader({
			// lessOptions: {
				javascriptEnabled: true,
				modifyVars: { ...themeColor }
			// }
		})
	),
	devServer: overrideDevServer(
		// dev server plugin
		watchAll()
	)
};
