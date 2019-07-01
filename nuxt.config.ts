import NuxtConfiguration from '@nuxt/config'

const nuxtConfig: NuxtConfiguration = {
	mode: 'spa',
	srcDir: 'src/',
	modules: ['@nuxtjs/pwa', '@nuxtjs/svg-sprite'],
	css: ['minireset.css'],
	build: {
		cache: true,
		postcss: {
			plugins: {
				'postcss-short': {}
			}
		}
	}
}
export default nuxtConfig
