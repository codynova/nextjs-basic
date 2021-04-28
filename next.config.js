const ESLintPlugin = require('eslint-webpack-plugin')

// See docs and available options here:
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L63

module.exports = (phase) => ({
	webpack: (config) => {
		config.plugins.push(new ESLintPlugin({
			fix: true,
			files: [ 'components', 'pages', 'content' ],
			extensions: [ 'ts', 'tsx', 'js', 'jsx' ],
			overrideConfigFile: '.eslintrc.js',
		}))

		return config
	},
})