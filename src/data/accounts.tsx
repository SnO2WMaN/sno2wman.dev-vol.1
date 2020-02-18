import React from 'react'

import IconAnnict from '../assets/svg/annict.svg'
import IconBookmeter from '../assets/svg/bookmeter.svg'
import IconKofi from '../assets/svg/ko-fi.svg'
import IconKyash from '../assets/svg/kyash.svg'
import IconPixiv from '../assets/svg/pixiv.svg'
import IconQiita from '../assets/svg/qiita.svg'
import {
  faBitcoin,
  faCodepen,
  faDiscord,
  faGithub,
  faKeybase,
  faLastfmSquare,
  faNpm,
  faPatreon,
  faPaypal,
  faSoundcloud,
  faSpeakerDeck,
  faSpotify,
  faSteamSquare,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socials: {
  [key in string]: {
    href: string
    icon: JSX.Element
    disable?: true
  }
} = {
  'twitter': {
    href: 'https://twitter.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  'github': {
    href: 'https://github.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  'spotify': {
    href: 'https://open.spotify.com/user/sno2wman',
    icon: <FontAwesomeIcon icon={faSpotify} />,
  },
  'pixiv': {
    href: 'https://www.pixiv.net/member.php?id=31358190',
    icon: <IconPixiv />,
  },
  'soundcloud': {
    href: 'https://soundcloud.com/sno2wman',
    icon: <FontAwesomeIcon icon={faSoundcloud} />,
  },
  'discord': {
    href: 'discord:SnO2WMaN#9459',
    icon: <FontAwesomeIcon icon={faDiscord} />,
  },
  'patreon': {
    href: 'https://www.patreon.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faPatreon} />,
  },
  'annict': {
    href: 'https://annict.jp/@SnO2WMaN',
    icon: <IconAnnict />,
  },
  'ko-fi': {
    href: 'https://ko-fi.com/sno2wman',
    icon: <IconKofi />,
  },
  'npm': {
    icon: <FontAwesomeIcon icon={faNpm} />,
    href: 'https://www.npmjs.com/~sno2wman',
  },
  'steam': {
    icon: <FontAwesomeIcon icon={faSteamSquare} />,
    href: 'https://steamcommunity.com/id/SnO2WMaN',
  },
  'keybase': {
    icon: <FontAwesomeIcon icon={faKeybase} />,
    href: 'https://keybase.io/sno2wman',
  },
  'bookmeter': {
    href: 'https://bookmeter.com/users/1011664',
    icon: <IconBookmeter />,
  },
  'bitcoin': {
    href: 'bitcoin:13EKexdZYnjKaQQAVSrbtwegAN9iAeLBiG',
    icon: <FontAwesomeIcon icon={faBitcoin} />,
    disable: true,
  },
  'qiita': {
    href: 'https://qiita.com/SnO2WMaN',
    icon: <IconQiita />,
  },
  'paypal': {
    href: 'https://www.twitch.tv/sno2wman',
    icon: <FontAwesomeIcon icon={faPaypal} />,
    disable: true,
  },
  'twitch': {
    href: 'https://www.twitch.tv/sno2wman',
    icon: <FontAwesomeIcon icon={faTwitch} />,
    disable: true,
  },
  'youtube': {
    href: 'https://www.youtube.com/channel/UCz_DWmdSbXtBpi1qw3Gg5YQ',
    icon: <FontAwesomeIcon icon={faYoutube} />,
    disable: true,
  },
  'kyash': {
    href: 'kyash://qr/u/3548793821849286552',
    icon: <IconKyash />,
    disable: true,
  },
  'codepen': {
    href: 'https://codepen.io/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faCodepen} />,
    disable: true,
  },
  'lastfm': {
    href: 'https://www.last.fm/user/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faLastfmSquare} />,
  },
  'speakerdeck': {
    href: 'https://speakerdeck.com/sno2wman',
    icon: <FontAwesomeIcon icon={faSpeakerDeck} />,
  },
}

export default Object.fromEntries(
  Object.entries(socials)
    // .filter(([, { disable }]) => !disable)
    .map(([key, { href, icon }]) => [key, { href, icon }])
)
