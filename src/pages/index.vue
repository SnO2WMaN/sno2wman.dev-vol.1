<template>
	<main>
		<div class="title-wrap">
			<div class="covers">
				<div class="cover"></div>
				<div class="cover"></div>
			</div>
			<h1 class="title">SnO2WMaN.dev</h1>
		</div>
		<div class="buttons">
			<LinkButton
				v-for="name in ['twitter', 'steam', 'github', 'patreon']"
				:key="name"
				class="button"
				:name="name"
			/>
		</div>
		<div class="text-wrap">
			<p>オタク / エンジニア / ピクセルアート</p>
			<p>このウェブサイトは仮設置です。</p>
		</div>
		<div class="shell-wrap">
			<p><span class="dollar">$ </span>npx sno2wman</p>
		</div>
	</main>
</template>

<script>
import LinkButton from '~/components/LinkButton.vue'

export default {
	components: { LinkButton },
	head() {
		return {
			title: 'index'
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.$el.classList.add('animated')
		})
	}
}
</script>

<style lang="scss" scoped>
main {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	& > .title-wrap {
		user-select: none;
		position: relative;
		padding: 0.25rem;
		overflow: hidden;
		& > .covers {
			position: absolute 0;
			size: 100%;
			z-index: 1;
			& > .cover {
				position: absolute 0;
				size: 100%;
				transform-origin: left;
				&:nth-of-type(1) {
					background: hsl(198, 83%, 65%);
					animation-delay: 0.5s;
				}
				&:nth-of-type(2) {
					background: hsl(198, 83%, 55%);
					animation-delay: 0.6s;
				}
				@keyframes title-cover {
					0% {
						transform: scaleX(0);
					}
					50% {
						transform: scaleX(1);
					}
					100% {
						transform: translateX(100%);
					}
				}
				animation: title-cover 0.25s both cubic-bezier(0.86, 0, 0.07, 1);
				animation-play-state: paused;
			}
		}
		& > .title {
			color: #1f1f1f;
			font-family: 'Raleway';
			font-size: 2.25rem;
			font-weight: 100;
			letter-spacing: 0.125rem;

			transform: translateX(-10%);
			opacity: 0;
			transition-delay: 0.5s;
			transition-duration: 0.5s;
			transition-timing-function: ease-out;
		}
	}
	& > .buttons {
		display: flex;
		margin-top: 1rem;
		margin-bottom: 1.5rem;
		& > .button {
			&:not(:last-of-type) {
				margin-right: 0.75rem;
			}
			@for $i from 1 through 4 {
				&:nth-of-type(#{$i}) {
					transition-delay: $i * 0.05s + 0.5s;
				}
			}
		}
	}
	& > .text-wrap {
		user-select: none;
		margin-bottom: 1.5rem;
		& > p {
			color: #1f1f1f;
			font-size: 0.8rem;
			font-weight: 400;
			font-family: 'Noto Sans JP', sans-serif;
			line-height: 1em;

			transform: translateX(-10%);
			opacity: 0;
			transition-duration: 1s;
			transition-timing-function: cubic-bezier(0.16, 0.695, 0.245, 0.885);

			&:nth-of-type(1) {
				transition-delay: 0.5s;
			}
			&:nth-of-type(2) {
				transition-delay: 0.6s;
			}

			&:not(:last-of-type) {
				margin-bottom: 0.5rem;
			}
		}
	}
	& > .shell-wrap {
		background-color: #2f2f2f;
		padding: 0.75rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		box-shadow: 0 2px 4px rgba(black, 0.25);
		border-radius: 1px;

		transform: translateY(10%);
		opacity: 0;
		transition-delay: 0.5s;
		transition-duration: 0.5s;
		transition-timing-function: cubic-bezier(0.18, 0.905, 0.345, 0.825);

		& > p {
			color: white;
			font-size: 0.9rem;
			font-weight: 400;
			font-family: 'Source Code Pro', monospace;
			line-height: 1.25em;
			& > .dollar {
				user-select: none;
			}
		}
	}
	&.animated {
		& > .title-wrap {
			& > .covers {
				& > .cover {
					animation-play-state: running;
				}
			}
			& > .title {
				transform: translateX(0);
				opacity: 1;
			}
		}
		& > .text-wrap {
			& > p {
				opacity: 1;
				transform: translateX(0);
			}
		}
		& > .shell-wrap {
			opacity: 1;
			transform: translateY(0);
		}
	}
}
</style>
