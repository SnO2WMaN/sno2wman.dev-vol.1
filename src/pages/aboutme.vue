<template>
	<article @scroll="scroll">
		<div class="wrapper">
			<section class="profile">
				<div class="title center" animate>
					<h1>PROFILE</h1>
				</div>
				<div class="profile-text" animate>
					<div class="covers">
						<div class="cover"></div>
						<div class="cover"></div>
						<div class="cover"></div>
						<div class="cover"></div>
					</div>
					<h1>近影</h1>
					<img src="~/assets/icon.gif" />
					<h1>これは何ですか？</h1>
					<p>
						フロントエンド方面の活動をしていて、学生をやっているらしいです。
					</p>
					<p>ピクセルアートや、ボクセルアートをしたりもしています。</p>
					<p>得意なことはツイッターで、苦手なことはフェイスブックです。</p>
					<h1>趣味</h1>
					<p>主に表現の強いゲームが好きで、例えばこんなゲームが好きです。</p>
					<ul>
						<li><p>Hyper Light Drifter</p></li>
						<li><p>Hotline Miami</p></li>
						<li><p>RUINER</p></li>
						<li><p>Katana ZERO</p></li>
						<li><p>Doki Doki Literature Club</p></li>
						<li><p>Factorio</p></li>
					</ul>
					<h1>音楽</h1>
					<p>
						主にエレクトロニックミュージックが好きで、例えばこんな曲が好きです。
					</p>
					<ul>
						<li><p>Electrocado - Piddle Smell</p></li>
						<li><p>Mr.Bill &amp; Loom In Essance - Abba Ridge</p></li>
						<li><p>Tha Trickaz - Cloud City</p></li>
						<li><p>Vulpey - Sever</p></li>
						<li><p>Virtual Riot - Lunar</p></li>
						<li><p>Gorillaz - Feel Good Inc.</p></li>
						<li><p>ZUN - ハルトマンの妖怪少女</p></li>
					</ul>
				</div>
			</section>
			<section class="detail">
				<div class="title" animate>
					<h1>DETAIL</h1>
				</div>
				<div class="detail-table" animate>
					<div
						v-for="(detail, i) in details"
						:key="i"
						class="detail-table-line"
						:class="{ icon: i % 3 == 0, key: i % 3 == 1, content: i % 3 == 2 }"
					>
						<FontAwesomeIcon v-if="i % 3 == 0" :icon="detail" />
						<p v-else>{{ detail }}</p>
					</div>
				</div>
			</section>
			<section class="social">
				<div class="title" animate>
					<h1>SOCIAL</h1>
				</div>
				<ul class="social-links" animate>
					<li
						v-for="(link, i) in socials"
						:key="i"
						class="social-link"
						:class="i"
					>
						<div class="icon">
							<svg-icon
								v-if="typeof brandicons[i] === 'string'"
								class="svg"
								:name="brandicons[i]"
							/>
							<FontAwesomeIcon v-else :icon="brandicons[i]" fixed-width />
						</div>
						<a v-if="link.startsWith('discord:')" class="link" :href="link" />
						<a v-else class="link" :href="link" target="_blank" />
					</li>
				</ul>
			</section>
			<section class="donate">
				<div class="title" animate>
					<h1>DONATE</h1>
				</div>
				<ul class="donate-ways" animate>
					<li class="donate-way kyash">
						<a class="link" href="kyash://qr/u/3548793821849286552" />
						<div class="icon-wrap">
							<svg-icon class="svg icon" :name="brandicons['kyash']" />
						</div>
						<div class="contents">
							<p>Kyash</p>
							<strong>sno2wman</strong>
						</div>
					</li>
					<li class="donate-way amazon">
						<a
							class="link"
							target="_blank"
							href="https://www.amazon.jp/hz/wishlist/ls/2NHME83WUZWSR?ref_=wl_share"
						/>
						<div class="icon-wrap">
							<FontAwesomeIcon class="icon" :icon="brandicons['amazon']" />
						</div>
						<div class="contents">
							<p>Amazon Wishlist</p>
							<div class="icons">
								<FontAwesomeIcon
									v-for="key in [
										'book',
										'glass-cirtus',
										'cookie-bite',
										'theater-masks',
										'pills'
									]"
									:key="key"
									class="icon"
									:icon="icons[key]"
									fixed-width
								/>
							</div>
						</div>
					</li>
					<li class="donate-way steam">
						<a
							class="link"
							target="_blank"
							href="https://store.steampowered.com/wishlist/id/SnO2WMaN"
						/>
						<div class="icon-wrap">
							<FontAwesomeIcon class="icon" :icon="brandicons['steam']" />
						</div>
						<div class="contents">
							<p>Steam Wishlist</p>
							<div class="icons">
								<FontAwesomeIcon
									class="icon"
									:icon="icons['gamepad']"
									fixed-width
								/>
							</div>
						</div>
					</li>
					<li class="donate-way bitcoin">
						<a class="link" href="bitcoin:13EKexdZYnjKaQQAVSrbtwegAN9iAeLBiG" />
						<div class="icon-wrap">
							<FontAwesomeIcon class="icon" :icon="brandicons['bitcoin']" />
						</div>
						<div class="contents">
							<p>Bitcoin</p>
							<strong>13EKexdZYnjKaQQAVSrbtwegAN9iAeLBiG</strong>
						</div>
					</li>
				</ul>
			</section>
			<section class="skills">
				<div class="title center" animate>
					<h1>SKILL</h1>
				</div>
				<div
					v-for="(category, categoryName) in badges"
					:key="categoryName"
					class="skills-category"
					animate
				>
					<div class="skills-category-title">
						<h1>{{ categoryName.toUpperCase() }}</h1>
					</div>
					<ul class="skill-badges">
						<li v-for="(badge, i) in category" :key="i" class="skill-badge">
							<div
								class="icon"
								:class="{
									black:
										0.72 <
										luminosity(
											`#${Array.isArray(badge) ? badge[1] : badge.hex}`
										)
								}"
							>
								<div
									class="cover"
									:style="{
										'background-color': `#${
											Array.isArray(badge) ? badge[1] : badge.hex
										}`
									}"
								/>
								<svg-icon
									v-if="Array.isArray(badge) && typeof badge[0] === 'string'"
									class="svg"
									:name="badge[0]"
								/>
								<FontAwesomeIcon
									v-else-if="Array.isArray(badge)"
									class="icon"
									:icon="badge[0]"
								/>
								<!-- eslint-disable vue/no-v-html-->
								<div
									v-else-if="Array.isArray(badge)"
									class="svg"
									v-html="badge[0].svg"
								/>
								<div v-else class="svg" v-html="badge.svg" />
								<!-- eslint-enable -->
							</div>
							<div class="text">
								<p>
									{{ Array.isArray(badge) ? badge[2] : badge.title }}
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	</article>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'
import {
	faTwitter,
	faGithub,
	faDiscord,
	faPatreon,
	faSpotify,
	faSoundcloud,
	faVuejs,
	faBitcoin,
	faAmazon,
	faSteam,
	IconDefinition,
	faNodeJs,
	faTumblr,
	faMastodon
} from '@fortawesome/free-brands-svg-icons'
import {
	faBook,
	faGamepad,
	faGlassCitrus,
	faCookieBite,
	faTheaterMasks,
	faPills,
	faUserClock,
	faBirthdayCake,
	faMars,
	faUmbrellaBeach,
	faPastafarianism
} from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Color from 'color'

import iconHTML from 'simple-icons/icons/html5'
import iconCSS from 'simple-icons/icons/css3'
import iconSASS from 'simple-icons/icons/sass'
import iconESLint from 'simple-icons/icons/eslint'
import iconVue from 'simple-icons/icons/vue-dot-js'
import iconNuxt from 'simple-icons/icons/nuxt-dot-js'
import iconJS from 'simple-icons/icons/javascript'
import iconTS from 'simple-icons/icons/typescript'
import iconNode from 'simple-icons/icons/node-dot-js'
import iconPrettier from 'simple-icons/icons/prettier'
import iconNetlify from 'simple-icons/icons/netlify'
import iconFirebase from 'simple-icons/icons/firebase'
import iconVSCode from 'simple-icons/icons/visualstudiocode'
import iconTravisCI from 'simple-icons/icons/travisci'
import iconCircleCI from 'simple-icons/icons/circleci'
import iconGit from 'simple-icons/icons/git'
import iconGithub from 'simple-icons/icons/github'
import iconYarn from 'simple-icons/icons/yarn'
import iconWebpack from 'simple-icons/icons/webpack'

@Component({
	name: 'Page.Aboutme',
	head: { title: 'aboutme' },
	transition: 'default',
	components: { FontAwesomeIcon }
})
export default class extends Vue {
	@Provide()
	brandicons = {
		twitter: faTwitter,
		github: faGithub,
		steam: faSteam,
		discord: faDiscord,
		patreon: faPatreon,
		spotify: faSpotify,
		pixiv: 'pixiv',
		kyash: 'kyash',
		soundcloud: faSoundcloud,
		bitcoin: faBitcoin,
		amazon: faAmazon,
		annict: 'annict',
		tumblr: faTumblr,
		mastodon: faMastodon
	}

	@Provide()
	icons = {
		book: faBook,
		gamepad: faGamepad,
		'glass-cirtus': faGlassCitrus,
		'cookie-bite': faCookieBite,
		'theater-masks': faTheaterMasks,
		pills: faPills
	}

	@Provide()
	socials = {
		twitter: 'https://twitter.com/SnO2WMaN',
		github: 'https://github.com/SnO2WMaN',
		spotify: 'https://open.spotify.com/user/sno2wman',
		steam: 'https://steamcommunity.com/id/SnO2WMaN',
		discord: 'discord:SnO2WMaN#9459',
		patreon: 'https://www.patreon.com/SnO2WMaN',
		annict: 'https://annict.jp/@SnO2WMaN',
		soundcloud: 'https://soundcloud.com/sno2wman',
		pixiv: 'https://www.pixiv.net/member.php?id=31358190'
	}

	@Provide()
	details = Object.entries({
		birthday: [faBirthdayCake, '2001.06.22'],
		age: [faUserClock, 18],
		gender: [faMars, 'Male'],
		live: [faUmbrellaBeach, 'Japan,Nagoya'],
		religion: [faPastafarianism, 'Pastafarianism']
	})
		.map(({ 0: key, 1: v }) => [v[0], key.toUpperCase(), v[1]])
		.flat()

	@Provide()
	badges: {
		[key in string]: (
			| { hex: string; title: string; svg: string }
			| [IconDefinition | string, string, string])[]
	} = {
		lang: [
			iconHTML,
			['pug', 'a86454', 'Pug'],
			iconCSS,
			iconSASS,
			['postcss', 'dd3a0a', 'PostCSS'],
			iconJS,
			iconTS
		],
		build: [iconWebpack, ['parcel', 'e7dacb', 'Parcel']],
		framework: [
			[faNodeJs, iconNode.hex, iconNode.title],
			[faVuejs, iconVue.hex, iconVue.title],
			iconNuxt
		],
		tools: [
			iconESLint,
			iconPrettier,
			['stylelint', '1f1f1f', 'Stylelint'],
			['editorconfig', 'fefefe', 'EditorConfig'],
			iconYarn,
			['lerna', '1f1f1f', 'lerna'],
			['renovate', 'ffe42e', 'Renovate']
		],
		ci: [iconCircleCI, ['travis_ci', iconTravisCI.hex, iconTravisCI.title]],
		platform: [iconNetlify, iconFirebase],
		versioning: [iconGit, iconGithub, ['gitkraken', '1d958a', 'GitKraken']],
		editor: [iconVSCode],
		software: [['affinity', '4ecdfa', 'Affinity Designer']]
	}

	luminosity(color: string) {
		return Color(color).luminosity()
	}

	mounted() {
		this.$nextTick(() => {
			this.scroll()
		})
	}

	scroll() {
		const wh = window.innerHeight * 0.75
		const animators = Array.from(
			this.$el.querySelectorAll('[animate]:not(.animated)')
		)
		animators.forEach($e => {
			const { top } = $e.getBoundingClientRect()
			if (top <= wh) $e.classList.add('animated')
		})
	}
}
</script>

<style lang="scss" scoped>
article {
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
}
.wrapper {
	padding-top: 15vh;
	padding-bottom: 25vh;
	width: 100%;
	max-width: 640px;
	display: grid;
	margin: auto;
	grid-template-columns: 1fr auto;
	grid-template-areas:
		'profile profile'
		'detail  social'
		'detail  donate'
		'skills  skills';
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	@media screen and (max-width: 762px) {
		display: flex;
		flex-direction: column;
	}
}

section {
	@each $area in (profile, social, skills, history, donate, detail) {
		&.#{$area} {
			grid-area: $area;
		}
	}
	@media screen and (max-width: 762px) {
		&:not(:last-of-type) {
			margin-bottom: 24px;
		}
		&:not(.skills) {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
}

.title {
	user-select: none;
	padding-bottom: 8px;
	margin-bottom: 8px;
	position: relative;
	overflow: hidden;
	h1 {
		color: var(--text-black);
		font-size: 1.25rem;
		font-family: 'Barlow', sans-serif;
		letter-spacing: 0.05em;
		line-height: 1em;
		transform: translateY(100%);
		opacity: 0;
		transition: 0.25s 0.1s cubic-bezier(0.325, 0.855, 0.5, 0.925);
		transition-property: transform, opacity;
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 24px;
		border-bottom: 1px solid var(--text-black);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.125s cubic-bezier(0.77, 0, 0.175, 1);
	}
	&.center {
		text-align: center;
		&::after {
			right: 0;
			margin: auto;
			transform-origin: center;
		}
	}
	@media screen and (max-width: 762px) {
		text-align: center;
		margin-bottom: 12px;
		&::after {
			right: 0;
			margin: auto;
		}
	}
	&.animated {
		h1 {
			opacity: 1;
			transform: translateY(0);
		}
		&::after {
			transform: scaleX(1);
		}
	}
}

@keyframes cover-y-1 {
	from {
		transform: scaleY(0);
	}
	to {
		transform: scaleY(1);
		visibility: hidden;
	}
}
@keyframes cover-y-2 {
	from {
		transform: scaleY(1);
		visibility: hidden;
	}
	to {
		transform: scaleY(0);
		visibility: visible;
	}
}
@keyframes cover-x-1 {
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
		visibility: hidden;
	}
}
@keyframes cover-x-2 {
	from {
		transform: scaleX(1);
		visibility: hidden;
	}
	to {
		transform: scaleX(0);
		visibility: visible;
	}
}

.profile-text {
	padding: 36px 48px;
	margin: 24px;
	color: var(--base-black);
	font-family: 'Noto Sans JP', serif;
	font-feature-settings: 'palt';
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	$cover-duration: 0.5s;
	$glitchdelay: 0.15s;
	&::before {
		content: '';
		position: absolute;
		size: 100%;
		top: 0;
		left: 0;
		background-color: var(--text-black);
		visibility: hidden;
		transition: visibility 0s $cover-duration;
	}
	&::after {
		content: '';
		position: absolute;
		size: 100%;
		top: 0;
		left: 0;
		background-image: url('~assets/point_9_black.png');
		background-attachment: fixed;
		opacity: 0;
		transition: opacity 1s ($cover-duration * 2 + $glitchdelay)
			cubic-bezier(0.18, 0.92, 0.415, 0.95);
		z-index: 20;
	}
	& > .covers {
		position: absolute;
		size: 100%;
		top: 0;
		left: 0;
		z-index: 25;
		& > .cover {
			position: absolute;
			size: 100%;
			top: 0;
			left: 0;
			animation-fill-mode: both;
			animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
			animation-play-state: paused;
			&:nth-of-type(2n + 1) {
				animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
			}
			&:nth-of-type(2n) {
				animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
			}
			&:nth-of-type(1),
			&:nth-of-type(2) {
				animation-duration: $cover-duration;
				background-color: var(--base-black);
			}
			&:nth-of-type(1) {
				animation-name: cover-y-1;
				transform-origin: top;
			}
			&:nth-of-type(2) {
				animation-name: cover-y-2;
				animation-delay: $cover-duration + $glitchdelay;
				transform-origin: bottom;
			}
			&:nth-of-type(3),
			&:nth-of-type(4) {
				animation-duration: $cover-duration;
				background-color: var(--accent-color);
			}
			&:nth-of-type(3) {
				animation-name: cover-y-1;
				transform-origin: top;
				animation-delay: $glitchdelay;
			}
			&:nth-of-type(4) {
				animation-name: cover-y-2;
				animation-delay: $cover-duration;
				transform-origin: bottom;
			}
		}
	}
	&.animated {
		&::before {
			visibility: visible;
		}
		&::after {
			opacity: 0.4;
		}
		& > .covers > .cover {
			animation-play-state: running;
		}
	}

	img {
		size: 6rem;
		border-radius: 50%;
		border: var(--bg) 1px solid;
		user-select: none;
		pointer-events: none;
		transition: transform 0.2s ($cover-duration * 2 + $glitchdelay) + 0.125s
			cubic-bezier(0.7, 0.43, 0.175, 0.895);
		transform: scale(0);
	}
	p {
		font-size: 0.85rem;
		&:not(:last-of-type) {
			margin-bottom: 2px;
		}
	}
	& > p {
		opacity: 0;
		transform: translateY(-50%);
		transition: 0.75s cubic-bezier(0.165, 0.84, 0.44, 1);
		transition-property: opacity, transform;
		@for $i from 1 through 5 {
			&:nth-of-type(#{$i}) {
				transition-delay: ($cover-duration * 2 + $glitchdelay) +
					0.2s +
					($i - 1) *
					0.05s;
			}
		}
	}
	h1 {
		font-weight: 700;
		font-size: 1.25rem;
		letter-spacing: 1px;
		margin-bottom: 8px;
		opacity: 0;
		transition: 0.25s;
		transform: translateY(-50%);
		@for $i from 1 through 4 {
			&:nth-of-type(#{$i}) {
				transition-delay: ($cover-duration * 2 + $glitchdelay) +
					($i - 1) *
					0.1s;
			}
		}
		&:not(:first-of-type) {
			margin-top: 8px;
		}
	}
	ul {
		margin: 12px 0;
		width: 100%;
		padding-left: 48px;
		li {
			display: flex;
			&:not(:last-of-type) {
				margin-bottom: 12px;
			}
			p {
				white-space: nowrap;
				font-family: 'Roboto', 'Noto Sans JP', serif;
				font-size: 0.8rem;
				line-height: 1em;
				&::before {
					content: '-';
					margin-right: 8px;
				}
			}
		}
		opacity: 0;
		transition: 0.5s;
		transform: translateX(-10%);
		@for $i from 1 through 2 {
			&:nth-of-type(#{$i}) {
				transition-delay: ($cover-duration * 2 + $glitchdelay) +
					($i - 1) *
					0.15s +
					0.3s;
			}
		}
	}
	img,
	p,
	h1,
	ul {
		position: relative;
	}
	&.animated {
		h1 {
			opacity: 1;
			transform: translateY(0);
		}
		& > p {
			opacity: 1;
			transform: translateY(0);
		}
		img {
			transform: scale(1);
		}
		ul {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@media screen and (max-width: 762px) {
		padding: 24px 24px;
		margin: 12px;
		p {
			font-size: 0.8rem;
			text-align: left;
			&:not(:last-of-type) {
				margin-bottom: 8px;
			}
		}
		h1 {
			&:not(:first-of-type) {
				margin-top: 12px;
			}
		}
		ul {
			padding-left: 12px;
		}
	}
}

.detail-table {
	display: grid;
	grid-template-columns: auto auto 1fr;
	align-items: center;
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		size: 36px;
		font-size: 18px;
		color: white;
		opacity: 0;
		transform: scale(sqrt(2));
		transition: 0.4s cubic-bezier(0.115, 0.9, 0.375, 0.895);
		transition-property: transform, opacity;
	}
	.key {
		color: var(--text-black);
		font-family: 'Barlow', sans-serif;
		font-size: 0.75rem;
		line-height: 1em;
		letter-spacing: 1px;
		padding: 0 4px;
		user-select: none;
		opacity: 0;
		transform: rotateZ(1rad);
		transform-origin: left center;
		transition: 0.2s cubic-bezier(0.115, 0.9, 0.375, 0.895);
		transition-property: transform, opacity;
	}
	.content {
		color: var(--text-black);
		flex-grow: 2;
		text-align: left;
		line-height: 1em;
		font-size: 0.9rem;
		font-family: 'Roboto Mono', sans-serif;
		margin-left: 12px;
		opacity: 0;
		transform: translateX(10%);
		transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
		transition-property: transform, opacity;
	}
	@for $i from 1 through 3 * 5 {
		$d: ($i - 1) * 0.05s;
		& > *:nth-of-type(#{$i}) {
			transition-delay: $d;
		}
	}
	&.animated {
		.icon {
			opacity: 1;
			transform: scale(1);
		}
		.key {
			opacity: 1;
			transform: translateX(0) rotateZ(0);
		}
		.content {
			opacity: 1;
			transform: translateX(0);
		}
	}
}

.donate-ways {
	display: flex;
	flex-direction: column;
}

.donate-way {
	display: flex;
	position: relative;
	& > .link {
		visibility: hidden;
		position: absolute;
		size: 100%;
		z-index: 50;
		left: 0;
		top: 0;
	}
	& > .icon-wrap {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		size: 48px;
		font-size: 24px;
		color: white;
		fill: white;
		overflow: hidden;
		& > .icon {
			z-index: 1;
			transform: scale(0);
			transition: transform 0.25s cubic-bezier(0.49, 0.17, 0.135, 0.905);
			&.svg {
				size: 24px;
			}
		}
		&::before {
			content: '';
			position: absolute 0;
			margin: auto;
			border-style: solid;
			border-width: (48px / 2);
			border-radius: 50%;
			transform: scale(0);
			transition-property: transform, border-width;
			transition-duration: 0.2s, 0.325s;
			transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06),
				cubic-bezier(0.23, 1, 0.32, 1);
		}
		&::after {
			content: '';
			position: absolute 0;
			margin: auto;
			size: 48px;
			border-radius: 50%;
			transform: scale(0);
			transition: 0.2s transform cubic-bezier(0.13, 0.885, 0.405, 0.975);
			visibility: hidden;
		}
	}
	& > .contents {
		flex-grow: 2;
		padding: 0 12px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		overflow: hidden;
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			top: 0;
			bottom: 0;
			left: 0;
			margin: auto;
			transform: translateX(-101%);
			transition: transform 0.4s cubic-bezier(1, 0.055, 0.19, 0.93);
		}
		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto 0;
			width: 1px;
			height: (100% / (1 + sqrt(2)));
			transform: scaleY(0);
			transition: transform 0.2s cubic-bezier(1, 0.055, 0.19, 0.93);
			visibility: hidden;
		}
		& > p {
			font-size: 0.8rem;
			font-family: 'Roboto', serif;
			color: var(--text-black);
			line-height: 1em;
			margin-bottom: 6px;
			user-select: none;
			transform: translateY(50%);
			opacity: 0;
			transition: 0.3s cubic-bezier(0.38, 0.505, 0.125, 0.92);
			transition-property: opacity, transform;
		}
		& > strong {
			color: var(--text-black);
			font-size: 0.75rem;
			font-family: 'Roboto', serif;
			line-height: 1em;
			font-weight: 300;
		}
		& > .icons {
			display: flex;
			color: var(--text-black);
			font-size: 1rem;
			& > .icon:not(:last-of-type) {
				margin-right: 4px;
			}
		}
		& > p,
		& > strong,
		& > .icons {
			opacity: 0;
			transition: 0.3s cubic-bezier(0.135, 0.715, 0.44, 0.925);
			transition-property: opacity, transform;
		}

		& > p {
			transform: translateY(-100%);
		}

		& > strong,
		& > .icons {
			transform: translateY(100%);
		}
	}
	$social-colors: (
		steam: #171a21,
		amazon: $brandcolors-amazon-1,
		kyash: #1aaae2,
		bitcoin: #f7931a
	);
	@each $key, $color in $social-colors {
		&.#{$key} {
			& > .icon-wrap {
				&::before {
					border-color: $color;
				}
				&::after {
					background-color: $color;
				}
			}
			& > .contents {
				&::before,
				&::after {
					background-color: $color;
				}
			}
		}
	}
	@for $i from 1 through length($social-colors) {
		&:nth-of-type(#{$i}) {
			$d: ($i - 1) * 0.075s;
			& > .icon-wrap {
				& > .icon {
					transition-delay: $d + 0.55s;
				}
				&::before {
					transition-delay: $d, $d + 0.25s;
				}
			}
			& > .contents {
				&::before {
					transition-delay: $d + 0.25s;
				}
				& > p,
				& > strong,
				& > .icons {
					transition-delay: $d + 0.4s;
				}
			}
		}
	}
}

.donate-ways.animated {
	.donate-way {
		cursor: pointer;
		& > .link {
			visibility: visible;
		}
		& > .icon-wrap {
			& > .icon {
				transform: scale(1);
			}
			&::before {
				transform: scale(sqrt(2));
				border-width: 0;
			}
			&::after {
				visibility: visible;
			}
		}
		& > .contents {
			&::before {
				transform: translateX(101%);
			}
			&::after {
				visibility: visible;
			}
			& > p,
			& > strong,
			& > .icons {
				transform: translateY(0);
				opacity: 1;
			}
		}
		&:hover {
			& > .icon-wrap {
				&::after {
					transform: scale(sqrt(2));
				}
			}
			& > .contents {
				&::after {
					transform: scaleY(1);
				}
			}
		}
	}
}

.social-links {
	display: grid;
	grid-template-columns: repeat(5, 48px);
}

.social-link {
	height: 48px;
	position: relative;
	overflow: hidden;
	& > .icon {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		size: 100%;
		font-size: 24px;
		color: white;
		fill: white;
		z-index: 1;
		transform: scale(0);
		transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
		.svg {
			size: 24px;
		}
	}
	&::before {
		content: '';
		position: absolute 0;
		margin: auto;
		border-style: solid;
		border-width: (48px / 2);
		border-radius: 50%;
		transform: scale(0);
		transition-property: transform, border-width;
		transition-duration: 0.2s, 0.325s;
		transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06),
			cubic-bezier(0.23, 1, 0.32, 1);
	}

	&::after {
		content: '';
		position: absolute;
		size: 100% * sqrt(2);
		left: 50% * (1 - sqrt(2));
		top: 50% * (1 - sqrt(2));
		border-radius: 50%;
		transform: scale(0);
		transition: 0.2s transform cubic-bezier(0.13, 0.885, 0.405, 0.975);
		visibility: hidden;
	}
	$social-colors: (
		twitter: $brandcolors-twitter-1,
		github: $brandcolors-github-1,
		pixiv: $brandcolors-pixiv-1,
		spotify: $brandcolors-spotify-1,
		soundcloud: #ff5500,
		patreon: $brandcolors-patreon-1,
		discord: $brandcolors-discord-1,
		steam: #171a21,
		annict: #f85b73,
		amazon: $brandcolors-amazon-1
	);
	@each $key, $color in $social-colors {
		&.#{$key} {
			&::before {
				border-color: $color;
			}
			&::after {
				background-color: $color;
			}
		}
	}
	@for $i from 1 through length($social-colors) {
		&:nth-of-type(#{$i}) {
			$d: ($i - 1) * 0.05s;
			& > .icon {
				transition-delay: $d + 0.2s;
			}
			&::before {
				transition-delay: $d, $d + 0.2s;
			}
		}
	}
	& > .link {
		position: absolute;
		size: 100%;
		top: 0;
		left: 0;
		z-index: 20;
		visibility: hidden;
	}
	&:hover {
		&::after {
			transform: scale(1);
		}
	}
}

.social-links.animated {
	.social-link {
		& > .icon {
			transform: scale(1);
		}
		&::before {
			border-width: 0;
			transform: scale(sqrt(2));
		}
		&::after,
		& > .link {
			visibility: visible;
		}
	}
}

.skills-category {
	margin-bottom: 16px;
}

.skills-category-title {
	margin-bottom: 12px;
	user-select: none;
	& > h1 {
		font-family: 'Barlow', sans-serif;
		font-size: 0.8rem;
		color: var(--text-black);
		letter-spacing: 2px;
		transform: translateY(50%);
		opacity: 0;
		transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		transition-property: opacity, transform;
	}
	@media screen and (max-width: 762px) {
		text-align: center;
	}
}

.skill-badges {
	display: flex;
	flex-wrap: wrap;
	margin-bottom: -8px;
	@media screen and (max-width: 762px) {
		justify-content: flex-start;
		padding: 0 (50vw / (2 + sqrt(2)));
	}
}

.skill-badge {
	display: flex;
	align-items: center;
	user-select: none;
	margin-right: 8px;
	margin-bottom: 8px;
	padding-right: 8px;
	position: relative;
	&::after {
		content: '';
		position: absolute 0;
		size: 100%;
		background-color: #2f2f2f;
		transform: scaleX(0);
		transition: 0.3s cubic-bezier(0.92, 0.1, 0.02, 0.66);
		transform-origin: left;
	}
	& > .icon {
		display: flex;
		justify-content: center;
		align-items: center;
		size: 24px;
		font-size: 16px;
		color: white;
		fill: white;
		position: relative;
		overflow: hidden;
		& > .cover {
			z-index: 1;
			position: absolute 0;
			size: 100%;
			transform: scale(0);
			transition: 0.2s cubic-bezier(0.92, 0.1, 0.21, 0.765);
		}
		& > .svg {
			size: 16px;
			font-size: 0;
		}
		& > .svg,
		& > .icon {
			position: relative;
			z-index: 1;
			transform: scale(0);
			transition: 0.2s cubic-bezier(0.825, 0.06, 0.65, 0.865);
			transition-property: opacity, transform;
		}
		&.black {
			color: #1f1f1f;
			fill: #1f1f1f;
		}
	}
	& > .text {
		flex-grow: 2;
		color: white;
		padding-left: 8px;
		overflow: hidden;
		& > p {
			position: relative;
			z-index: 1;
			font-weight: 300;
			font-family: 'Roboto', sans-serif;
			font-size: 0.8rem;
			line-height: 1em;
			transform: translateX(-50%);
			opacity: 0;
			transition: 0.2s cubic-bezier(0.155, 0.825, 0.145, 0.855);
			transition-property: opacity, transform;
		}
	}
}

.skills-category {
	.skill-badge {
		@for $i from 1 through 8 {
			$d: ($i - 1) * 0.075s;
			&:nth-of-type(#{$i}) {
				&::after {
					transition-delay: $d;
				}
				& > .icon {
					& > .cover {
						transition-delay: $d + 0.1s;
					}
					& > .svg,
					& > .icon {
						transition-delay: $d + 0.25s;
					}
				}
				& > .text {
					& > p {
						transition-delay: $d + 0.25s;
					}
				}
			}
		}
	}
	&.animated {
		.skills-category-title {
			& > h1 {
				transform: translateY(0);
				opacity: 1;
			}
		}
		.skill-badge {
			&::after {
				transform: scaleX(1);
			}
			& > .icon {
				& > .cover {
					transform: scale(sqrt(2));
				}
				& > .svg,
				& > .icon {
					transform: scale(1);
				}
			}
			& > .text {
				& > p {
					transform: translateX(0);
					opacity: 1;
				}
			}
		}
	}
}
</style>
