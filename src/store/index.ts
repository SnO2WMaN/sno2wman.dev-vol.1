import { Mutations, Getters, Actions } from '~/types/vuex.d.ts'

interface S {
	animated: {
		[key in AnimationName]: boolean
	}
}
export const state: () => S = () => ({
	animated: {
		index: false
	}
})

interface M {
	animated: AnimationName
}
export const mutations: Mutations<S, M> = {
	animated({ animated }, name) {
		animated[name] = true
	}
}

interface G {
	isAnimated: (name: AnimationName) => boolean
}
export const getters: Getters<S, G> = {
	isAnimated({ animated }) {
		return (name): boolean => animated[name]
	}
}

interface A {}
export const actions: Actions<S, A, G, M> = {}
