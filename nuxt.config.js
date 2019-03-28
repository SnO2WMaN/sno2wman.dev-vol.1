require('dotenv').config()
const CaseSensitivePathPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
	srcDir: 'src',
	mode: 'universal',
	env: process.env,
	loading: false,
	server: {
		host: '0.0.0.0'
	},
	head: {
		titleTemplate: '%s - sno2wman.dev'
	},
	modules: [
		'@nuxtjs/icon',
		'@nuxtjs/meta',
		'@nuxtjs/style-resources',
		'nuxt-webfontloader',
		'nuxt-imagemin'
	],
	css: ['minireset.css'],
	styleResources: {
		scss: ['@brandcolors/sass']
	},
	webfontloader: {
		google: {
			families: ['Raleway:100', 'Noto Sans JP:400', 'Source Code Pro:400']
		}
	},
	meta: {},
	build: {
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
		plugins: [new CaseSensitivePathPlugin()]
	},
	imagemin: {}
}
