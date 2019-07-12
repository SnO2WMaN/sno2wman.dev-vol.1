<template>
	<article>
		<section class="profile">
			<div class="title">
				<h1>PROFILE</h1>
			</div>
		</section>
		<section class="social">
			<div class="title">
				<h1>SOCIAL</h1>
			</div>
			<ul class="social-links">
				<li
					v-for="i in ['twitter', 'github', 'steam', 'discord']"
					:key="i"
					class="social-link"
				>
					<div class="social-link-icon">
						<FontAwesomeIcon :icon="brandicons[i]" />
					</div>
				</li>
			</ul>
		</section>
		<section class="history">
			<div class="title">
				<h1>HISTORY</h1>
			</div>
		</section>
	</article>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'
import {
	faTwitter,
	faGithub,
	faSteam,
	faDiscord
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as sno2wman from 'sno2wman'

@Component({
	name: 'Page.Aboutme',
	head: { title: 'aboutme' },
	transition: 'aboutme',
	components: { FontAwesomeIcon }
})
export default class extends Vue {
	@Provide()
	brandicons = {
		twitter: faTwitter,
		github: faGithub,
		steam: faSteam,
		discord: faDiscord
	}

	@Provide()
	sno2wman = sno2wman
}
</script>

<style lang="scss" scoped>
article {
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: auto 1fr;
	grid-template-areas:
		'profile history'
		'social  history';
}

section {
	@each $area in (profile, social, history) {
		&.#{$area} {
			grid-area: $area;
		}
	}
}

.title {
	user-select: none;
	h1 {
		color: var(--text-black);
		font-size: 1.25rem;
		font-family: 'Barlow', sans-serif;
		letter-spacing: 0.05em;
		line-height: 1em;
		overflow: hidden;
	}
}
</style>
