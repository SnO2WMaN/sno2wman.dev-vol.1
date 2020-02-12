import React from 'react'
import styled from 'styled-components'

import IconAnnict from '../../../assets/annict.svg'
import IconKofi from '../../../assets/ko-fi.svg'
import IconPixiv from '../../../assets/pixiv.svg'
import SocialLink from './SocialLink'
import {
  faDiscord,
  faGithub,
  faNpm,
  faPatreon,
  faSoundcloud,
  faSpotify,
  faSteamSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Color from 'color'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <ul className="links">
      {[
        {
          key: 'twitter',
          href: 'https://twitter.com/SnO2WMaN',
          icon: <FontAwesomeIcon icon={faTwitter} />,
          color: '#1da1f2',
        },
        {
          key: 'github',
          href: 'https://github.com/SnO2WMaN',
          icon: <FontAwesomeIcon icon={faGithub} />,
          color: '#24292e',
        },
        {
          key: 'spotify',
          href: 'https://open.spotify.com/user/sno2wman',
          icon: <FontAwesomeIcon icon={faSpotify} />,
          color: '#1db954',
        },
        {
          key: 'pixiv',
          href: 'https://www.pixiv.net/member.php?id=31358190',
          icon: <IconPixiv />,
          color: '#009cff',
        },
        {
          key: 'soundcloud',
          href: 'https://soundcloud.com/sno2wman',
          icon: <FontAwesomeIcon icon={faSoundcloud} />,
          color: '#ff8800',
        },
        {
          key: 'discord',
          href: 'discord:SnO2WMaN#9459',
          icon: <FontAwesomeIcon icon={faDiscord} />,
          color: '#7289da',
        },
        {
          key: 'patreon',
          href: 'https://www.patreon.com/SnO2WMaN',
          icon: <FontAwesomeIcon icon={faPatreon} />,
          color: '#f86754',
        },
        {
          key: 'annict',
          href: 'https://annict.jp/@SnO2WMaN',
          icon: <IconAnnict />,
          color: '#f85b73',
        },
        {
          key: 'ko-fi',
          href: 'https://ko-fi.com/sno2wman',
          icon: <IconKofi />,
          color: '#29ABE0',
        },
        {
          icon: <FontAwesomeIcon icon={faNpm} />,
          color: '#cb3837',
          key: 'npm',
          href: 'https://www.npmjs.com/~sno2wman',
        },
        {
          icon: <FontAwesomeIcon icon={faSteamSquare} />,
          color: '#1b2838',
          key: 'steam',
          href: 'https://steamcommunity.com/id/SnO2WMaN',
        },
      ]
        .sort(
          ({ color: a }, { color: b }) =>
            ((Color(a).hue() + 60) % 360) - ((Color(b).hue() + 60) % 360)
        )
        .map(({ key, icon, color, href }, i, a) => (
          <SocialLink
            key={key}
            color={color}
            href={href}
            index={i / (a.length - 1)}
          >
            {icon}
          </SocialLink>
        ))}
    </ul>
    <IconPixiv />
  </section>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 512px;
  background-color: hsl(225, 12.5%, 90%);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.125) inset;
  > .links {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > :not(:last-child) {
      margin-right: 16px;
    }
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
