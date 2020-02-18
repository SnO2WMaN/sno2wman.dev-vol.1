import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import IconAnnict from '../../../assets/svg/annict.svg'
import IconBookmeter from '../../../assets/svg/bookmeter.svg'
import IconKofi from '../../../assets/svg/ko-fi.svg'
import IconKyash from '../../../assets/svg/kyash.svg'
import IconPixiv from '../../../assets/svg/pixiv.svg'
import IconQiita from '../../../assets/svg/qiita.svg'
import brandcolors from '../../../data/brandcolors.json'
import { ScrollContainer } from '../../../pages/store'
import SocialLink from './SocialLink'
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
import Color from 'color'
import { useTranslation } from 'react-i18next'
import { useWindowSize } from 'react-use'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const socials: {
  [key in string]: { href: string; icon: any; disable?: true }
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
const columns = Math.ceil(
  Math.sqrt(Object.values(socials).filter(({ disable }) => !disable).length)
)

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  const scrollContainer = ScrollContainer.useContainer()

  const { height: windowHeight } = useWindowSize()
  const ref = React.createRef<HTMLDivElement>()
  const [anime, setAnime] = useState(false)

  useEffect(() => {
    setAnime(
      anime ||
        ref.current.offsetTop + ref.current.offsetHeight <=
          windowHeight + scrollContainer.scrollY
    )
  }, [anime, ref, scrollContainer.scrollY, windowHeight])

  return (
    <section className={className} ref={ref}>
      <ul className="links">
        {Object.entries(socials)
          .sort(
            ({ 0: a }, { 0: b }) =>
              ((Color(brandcolors[a]).hue() + 30) % 360) -
              ((Color(brandcolors[b]).hue() + 30) % 360)
          )
          .filter(({ 1: { disable } }) => !disable)
          .map(({ 0: key, 1: { icon, href } }, i, a) => (
            <SocialLink
              key={key}
              color={brandcolors[key]}
              href={href}
              row={(i % columns) / (columns - 1)}
              line={
                Math.floor(i / columns) / (Math.floor(a.length / columns) - 1)
              }
              animated={anime}
            >
              {icon}
            </SocialLink>
          ))}
      </ul>
      <h2>{t('profile.accounts.title')}</h2>
    </section>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  height: 512px;
  background-color: hsl(225, 12.5%, 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .links {
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: 24px;
  }
  > h2 {
    margin-top: 32px;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 0.25em;
  }
`

const LinksSection: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default LinksSection
