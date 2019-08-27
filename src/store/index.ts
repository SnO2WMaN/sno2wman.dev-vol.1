export const state = () => ({
	animated: {
		index: false
	}
})

export const mutations = {
	animated({ animated }, name) {
		animated[name] = true
	}
}

export const getters = {
	isAnimated({ animated }) {
		return (name): boolean => animated[name]
	}
}

export const actions = {}
