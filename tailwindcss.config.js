/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
	content: [
		'./layouts/**/*.html',
		'./content/**/*.md',
		'./content/**/*.html',
		'./src/**/*.ts',
		'./src/**/*.js',
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		// require('./plugin')({
		// 	charts: true,
		// 	forms: true,
		// 	tooltips: true,
		// 	datatables: true,
		// 	wysiwyg: true,
		// }),
	],
};
