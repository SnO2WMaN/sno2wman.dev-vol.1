<template>
	<article>
		<section class="profile">
			<div class="title center">
				<h1>PROFILE</h1>
			</div>
			<div class="profile-text">
				<h1>近影</h1>
				<img src="~/assets/icon.gif" />
				<h1>これは何ですか？</h1>
				<p>フロントエンド方面の活動をしていて、学生をやっているらしいです。</p>
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
			<div class="title">
				<h1>DETAIL</h1>
			</div>
			<div class="detail-table">
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
			<div class="title">
				<h1>SOCIAL</h1>
			</div>
			<ul class="social-links">
				<li
					v-for="i in [
						'twitter',
						'github',
						'steam',
						'discord',
						'spotify',
						'pixiv',
						'patreon',
						'soundcloud'
					]"
					:key="i"
					class="social-link"
				>
					<div class="icon">
						<svg-icon
							v-if="typeof brandicons[i] === 'string'"
							class="svg"
							:name="brandicons[i]"
						/>
						<FontAwesomeIcon v-else :icon="brandicons[i]" fixed-width />
					</div>
				</li>
			</ul>
		</section>
		<section class="donate">
			<div class="title">
				<h1>DONATE</h1>
			</div>
			<ul class="donate-ways">
				<li class="donate-way">
					<div class="icon">
						<svg-icon class="svg" :name="brandicons['kyash']" />
					</div>
					<div class="contents">
						<p>Kyash</p>
						<strong>sno2wman</strong>
					</div>
				</li>
				<li class="donate-way">
					<div class="icon">
						<FontAwesomeIcon :icon="brandicons['bitcoin']" />
					</div>
					<div class="contents">
						<p>Bitcoin</p>
						<strong>13EKexdZYnjKaQQAVSrbtwegAN9iAeLBiG</strong>
					</div>
				</li>
				<li class="donate-way">
					<div class="icon">
						<FontAwesomeIcon :icon="brandicons['amazon']" />
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
				<li class="donate-way">
					<div class="icon">
						<FontAwesomeIcon :icon="brandicons['steam']" />
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
			</ul>
		</section>
		<section class="skills">
			<div class="title">
				<h1>SKILL</h1>
			</div>
			<div
				v-for="(category, categoryName) in badges"
				:key="categoryName"
				class="skills-category"
			>
				<div class="skills-category-title">
					<h1>{{ categoryName.toUpperCase() }}</h1>
				</div>
				<ul class="skill-badges">
					<li v-for="(badge, i) in category" :key="i" class="skill-badge">
						<div
							class="icon"
							:style="{
								'background-color': `#${
									Array.isArray(badge)
										? badge.length == 2
											? badge[0].hex
											: badge[1]
										: badge.hex
								}`
							}"
							:class="{
								black:
									0.72 <
									luminosity(
										`#${
											Array.isArray(badge)
												? badge.length == 2
													? badge[0].hex
													: badge[1]
												: badge.hex
										}`
									)
							}"
						>
							<svg-icon
								v-if="Array.isArray(badge) && typeof badge[0] === 'string'"
								class="svg"
								:name="badge[0]"
							/>
							<FontAwesomeIcon
								v-else-if="Array.isArray(badge) && badge.length !== 2"
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
								{{
									Array.isArray(badge)
										? badge.length === 2
											? badge[0].title
											: badge[2]
										: badge.title
								}}
							</p>
						</div>
						<span
							v-if="
								Array.isArray(badge) &&
									(badge.length === 2 || badge.length === 4)
							"
							class="perfect"
							>*</span
						>
					</li>
				</ul>
			</div>
		</section>
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
	faNodeJs
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
	// transition: 'aboutme',
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
		amazon: faAmazon
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
		discord: 'SnO2WMaN#9459',
		patreon: 'https://www.patreon.com/SnO2WMaN',
		annict: 'https://annict.jp/@SnO2WMaN',
		soundcloud: 'https://soundcloud.com/sno2wman'
	}

	@Provide()
	details = Object.entries({
		birthday: [faBirthdayCake, '2001.06.22'],
		age: [faUserClock, 18],
		gender: [faMars, 'Male'],
		live: [faUmbrellaBeach, 'JP -> AICHI -> NAGOYA'],
		religion: [faPastafarianism, 'Pastafarianism']
	})
		.map(({ 0: key, 1: v }) => [v[0], key.toUpperCase(), v[1]])
		.flat()

	@Provide()
	badges: {
		[key in string]: (
			| { hex: string; title: string; svg: string }
			| [IconDefinition | string, string, string, true?]
			| [{ hex: string; title: string; svg: string }, true])[]
	} = {
		lang: [
			iconHTML,
			['pug', 'a86454', 'Pug', true],
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
			['lerna', '1f1f1f', 'lerna', true],
			['renovate', 'ffe42e', 'Renovate']
		],
		ci: [
			iconCircleCI,
			['travis_ci', iconTravisCI.hex, iconTravisCI.title, true]
		],
		platform: [iconNetlify, [iconFirebase, true]],
		versioning: [iconGit, iconGithub, ['gitkraken', '1d958a', 'GitKraken']],
		editor: [iconVSCode],
		software: [['affinity', '4ecdfa', 'Affinity Designer']]
	}

	luminosity(color: string) {
		return Color(color).luminosity()
	}
}
</script>

<style lang="scss" scoped>
article {
	top: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	display: grid;
	width: 100%;
	max-width: 640px;
	padding-top: 15vh;
	padding-bottom: 10vh;
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
	h1 {
		color: var(--text-black);
		font-size: 1.25rem;
		font-family: 'Barlow', sans-serif;
		letter-spacing: 0.05em;
		line-height: 1em;
		overflow: hidden;
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 24px;
		border-bottom: 1px solid var(--text-black);
	}
	&.center {
		text-align: center;
		&::after {
			right: 0;
			margin: auto;
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
}

.profile-text {
	background-color: var(--text-black);
	padding: 36px 48px;
	margin: 24px;
	color: var(--base-black);
	font-family: 'Noto Sans JP', serif;
	font-feature-settings: 'palt';
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		size: 100%;
		top: 0;
		left: 0;
		background-image: url('~assets/point_9_black.png');
		background-attachment: fixed;
		opacity: 0.25;
	}
	img {
		size: 6rem;
		border-radius: 50%;
		border: var(--bg) 1px solid;
		margin-bottom: 8px;
		user-select: none;
		pointer-events: none;
	}
	p {
		font-size: 0.85rem;
		&:not(:last-of-type) {
			margin-bottom: 2px;
		}
	}
	h1 {
		font-weight: 700;
		font-size: 1.25rem;
		letter-spacing: 1px;
		margin-bottom: 8px;
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
	}
	.key {
		color: var(--text-black);
		font-family: 'Barlow', sans-serif;
		font-size: 0.75rem;
		line-height: 1em;
		letter-spacing: 1px;
		padding: 0 4px;
		user-select: none;
	}
	.content {
		color: var(--text-black);
		flex-grow: 2;
		text-align: left;
		line-height: 1em;
		font-size: 0.9rem;
		font-family: 'Roboto Mono', sans-serif;
		margin-left: 12px;
	}
}

.donate-ways {
	display: flex;
	flex-direction: column;
}

.donate-way {
	display: flex;
	& > .icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		size: 48px;
		font-size: 24px;
		color: white;
		fill: white;
		.svg {
			size: 24px;
		}
	}
	.contents {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		p {
			font-size: 0.8rem;
			font-family: 'Roboto', serif;
			color: var(--text-black);
			line-height: 1em;
			margin-bottom: 6px;
			user-select: none;
		}
		strong {
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
	}
}

.social-links {
	display: grid;
	grid-template-columns: repeat(4, 48px);
}

.social-link {
	height: 48px;
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		size: 100%;
		font-size: 24px;
		color: white;
		fill: white;
		.svg {
			size: 24px;
		}
	}
}

.skills-category {
	margin-bottom: 16px;
}

.skills-category-title {
	margin-bottom: 12px;
	user-select: none;
	h1 {
		font-family: 'Barlow', sans-serif;
		font-size: 0.8rem;
		color: var(--text-black);
		letter-spacing: 2px;
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
		justify-content: center;
		margin-left: 24px;
		margin-right: 24px;
	}
}

.skill-badge {
	display: flex;
	align-items: center;
	user-select: none;
	overflow: hidden;
	margin-right: 8px;
	margin-bottom: 8px;
	padding-right: 8px;
	background-color: #2f2f2f;
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		size: 24px;
		font-size: 16px;
		color: white;
		fill: white;
		& > .svg {
			size: 16px;
			font-size: 0;
		}
		&.black {
			color: #1f1f1f;
			fill: #1f1f1f;
		}
	}
	.text {
		flex-grow: 2;
		color: white;
		padding-left: 8px;
		background-color: #2f2f2f;
		& > p {
			font-weight: 300;
			font-family: 'Roboto', sans-serif;
			font-size: 0.8rem;
			line-height: 1em;
		}
	}

	.perfect {
		display: block;
		color: white;
		font-size: 0.8rem;
		font-family: 'Roboto', sans-serif;
		margin-left: 4px;
		line-height: 1em;
	}
}
</style>
