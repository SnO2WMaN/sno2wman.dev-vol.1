import NuxtConfiguration from '@nuxt/config'

const nuxtConfig: NuxtConfiguration = {
	mode: 'universal',
	srcDir: 'src/',
	modules: ['@nuxtjs/pwa', '@nuxtjs/svg-sprite', '@nuxtjs/style-resources'],
	css: ['minireset.css'],
	styleResources: {
		sass: ['mathsass']
	},
	workbox: {
		runtimeCaching: [
			{
				urlPattern: 'https://fonts.googleapis.com/.*',
				handler: 'cacheFirst',
				method: 'GET'
			},
			{
				urlPattern: 'https://fonts.gstatic.com/.*',
				handler: 'cacheFirst',
				method: 'GET'
			}
		]
	},
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
