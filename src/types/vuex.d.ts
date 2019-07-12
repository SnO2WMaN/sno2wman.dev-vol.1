import { Context } from '@nuxt/vue-app'

interface Commit<M> {
	<K extends keyof M>(type: K, payload: M[K]): Promise<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface Dispatch<A> {
	<K extends keyof A>(type: K, payload: A[K]): Promise<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type Mutations<S, M> = {
	[K in keyof M]: (state: S, payload: M[K]) => void
}
export type Getters<S, G> = { [K in keyof G]: (state: S) => G[K] }

export interface Actions<S, M, G, A> {
	[key: string]: (
		vuex: {
			state: S
			commit: Commit<M>
			dispatch: Dispatch<A>
			getters: G
		},
		ctx: Context
	) => void
}
