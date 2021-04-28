module.exports = {
	extends: [],
	root: true,
	parser: '@babel/eslint-parser',
	parserOptions: {
		jsx: true,
		ecmaVersion: 11,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'eslint-plugin-react',
		'eslint-plugin-react-hooks',
		'@babel/eslint-plugin',
	],
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
	},
}
