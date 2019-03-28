<template>
	<transition name="button">
		<div class="button" :class="name">
			<div class="icon-wrap">
				<FontAwesomeIcon :icon="icon" class="icon" />
			</div>
			<a :href="link" target="_blank" class="link"></a>
		</div>
	</transition>
</template>

<script>
import sno2wman from 'sno2wman'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faTwitter,
	faGithub,
	faSteam,
	faPatreon
} from '@fortawesome/free-brands-svg-icons'

export default {
	name: 'LinkButton',
	components: { FontAwesomeIcon },
	props: {
		name: {
			type: String,
			default: '',
			validator: value => Object.keys(sno2wman.socials).includes(value)
		}
	},
	computed: {
		link() {
			return sno2wman.socials[this.name]
		},
		icon() {
			return {
				twitter: faTwitter,
				github: faGithub,
				steam: faSteam,
				patreon: faPatreon
			}[this.name]
		}
	},
	mounted() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.$el.classList.add('animated')
			}, 500)
		})
	}
}
</script>

<style lang="scss" scoped>
.button {
	size: 2.5rem;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	@each $key,
		$value
			in (
				twitter: $brandcolors-twitter-1,
				github: $brandcolors-github-1,
				patreon: $brandcolors-patreon-1,
				steam: #2b3647
			)
	{
		&.#{$key} {
			background-color: $value;
		}
	}
	& > .link {
		position: absolute 0;
		z-index: 1;
		size: 100%;
	}
	& > .icon-wrap {
		size: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.125em;
		opacity: 0;
		transform: scale(0);
		transition-duration: 0.5s;
		transition-delay: 0.25s;
		transition-timing-function: cubic-bezier(0.18, 0.905, 0.345, 0.825);
		& > .icon {
			color: white;
		}
	}
	transform: scale(0);
	transition-duration: 0.5s;
	transition-timing-function: cubic-bezier(0.18, 0.905, 0.345, 0.825);
	&.animated {
		transform: scale(1);
		& > .icon-wrap {
			opacity: 1;
			transform: scale(1);
		}
	}
}
</style>
