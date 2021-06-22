const path = require('path');
const {
	override,
	overrideDevServer,
	addDecoratorsLegacy,
	fixBabelImports,
	addLessLoader,
	useEslintRc,
	addWebpackAlias,
	watchAll
} = require('customize-cra');
// 主题
const themeColor = require('./src/theme/theme-color-config.js');

// 代理配置
const { addProxy } = require('./devProxy')

module.exports = {
	webpack: override(
		// 别名配置
		addWebpackAlias({
			['@']: path.resolve(__dirname, 'src'),
			['assets']: path.resolve(__dirname, 'src/assets'),
			// 不要和axios同名，依赖会找不到
			['http']: path.resolve(__dirname, 'src/axios'),
			['components']: path.resolve(__dirname, 'src/components'),
			['config']: path.resolve(__dirname, 'src/config'),
			['examples']: path.resolve(__dirname, 'src/examples'),
			['hooks']: path.resolve(__dirname, 'src/hooks'),
			['layout']: path.resolve(__dirname, 'src/layout'),
			['pages']: path.resolve(__dirname, 'src/pages'),
			// 不要和redux同名，依赖会找不到
			['store']: path.resolve(__dirname, 'src/redux'),
			['router']: path.resolve(__dirname, 'src/router'),
			['theme']: path.resolve(__dirname, 'src/theme'),
			['utils']: path.resolve(__dirname, 'src/utils')
		}),
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
		watchAll(),
		addProxy()
		// watchAll()
	)
};
