import React from 'react'
import styled from 'styled-components'

import IconAnnict from '../../../assets/annict.svg'
import IconBookmeter from '../../../assets/bookmeter.svg'
import IconKofi from '../../../assets/ko-fi.svg'
import IconPixiv from '../../../assets/pixiv.svg'
import IconQiita from '../../../assets/qiita.svg'
import SocialLink from './SocialLink'
import {
  faBitcoin,
  faDiscord,
  faGithub,
  faKeybase,
  faNpm,
  faPatreon,
  faSoundcloud,
  faSpotify,
  faSteamSquare,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Color from 'color'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const socials = {
  'twitter': {
    href: 'https://twitter.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faTwitter} />,
    color: '#1da1f2',
  },
  'github': {
    href: 'https://github.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faGithub} />,
    color: '#24292e',
  },
  'spotify': {
    href: 'https://open.spotify.com/user/sno2wman',
    icon: <FontAwesomeIcon icon={faSpotify} />,
    color: '#1db954',
  },
  'pixiv': {
    href: 'https://www.pixiv.net/member.php?id=31358190',
    icon: <IconPixiv />,
    color: '#009cff',
  },
  'soundcloud': {
    key: 'soundcloud',
    href: 'https://soundcloud.com/sno2wman',
    icon: <FontAwesomeIcon icon={faSoundcloud} />,
    color: '#ff8800',
  },
  'discord': {
    key: 'discord',
    href: 'discord:SnO2WMaN#9459',
    icon: <FontAwesomeIcon icon={faDiscord} />,
    color: '#7289da',
  },
  'patreon': {
    href: 'https://www.patreon.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faPatreon} />,
    color: '#f86754',
  },
  'annict': {
    href: 'https://annict.jp/@SnO2WMaN',
    icon: <IconAnnict />,
    color: '#f85b73',
  },
  'ko-fi': {
    href: 'https://ko-fi.com/sno2wman',
    icon: <IconKofi />,
    color: '#29ABE0',
  },
  'npm': {
    icon: <FontAwesomeIcon icon={faNpm} />,
    color: '#cb3837',
    href: 'https://www.npmjs.com/~sno2wman',
  },
  'steam': {
    icon: <FontAwesomeIcon icon={faSteamSquare} />,
    color: '#1b2838',
    href: 'https://steamcommunity.com/id/SnO2WMaN',
  },
  'keybase': {
    icon: <FontAwesomeIcon icon={faKeybase} />,
    color: '#ff6f21',
    href: 'https://keybase.io/sno2wman',
  },
  'bookmeter': {
    href: 'https://bookmeter.com/users/1011664',
    icon: <IconBookmeter />,
    color: '#64bc4b',
  },
  'bitcoin': {
    href: 'bitcoin:13EKexdZYnjKaQQAVSrbtwegAN9iAeLBiG',
    icon: <FontAwesomeIcon icon={faBitcoin} />,
    color: '#f7931a',
  },
  'qiita': {
    href: 'https://qiita.com/SnO2WMaN',
    icon: <IconQiita />,
    color: '#55c500',
  },
  'twitch': {
    href: 'https://www.twitch.tv/sno2wman',
    icon: <FontAwesomeIcon icon={faTwitch} />,
    color: '#6441a5',
  },
  'youtube': {
    href: 'https://www.youtube.com/channel/UCz_DWmdSbXtBpi1qw3Gg5YQ',
    icon: <FontAwesomeIcon icon={faYoutube} />,
    color: '#ff0000',
  },
}
const columns = Math.ceil(Math.sqrt(Object.keys(socials).length))

const Component: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <ul className="links">
      {Object.entries(socials)
        .sort(
          ({ 1: { color: a } }, { 1: { color: b } }) =>
            ((Color(a).hue() + 30) % 360) - ((Color(b).hue() + 30) % 360)
        )
        .map(({ 0: key, 1: { icon, color, href } }, i, a) => (
          <SocialLink
            key={key}
            color={color}
            href={href}
            row={(i % columns) / (columns - 1)}
            line={
              Math.floor(i / columns) / (Math.floor(a.length / columns) - 1)
            }
          >
            {icon}
          </SocialLink>
        ))}
    </ul>
  </section>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 512px;
  background-color: hsl(225, 12.5%, 90%);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.125) inset;
  display: flex;
  align-items: center;
  justify-content: center;
  > .links {
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: 24px;
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
