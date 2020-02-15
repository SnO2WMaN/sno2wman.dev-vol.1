import React from 'react'
import styled from 'styled-components'

import Column from './Column'
import {
  faBriefcase,
  faEnvelopeOpenText,
  faFileCertificate,
  faIdCard,
} from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={className}>
      <div className="home">
        <Link href={'/'}>
          <a />
        </Link>
        <span>SnO2WMaN.dev</span>
      </div>
      <ul className="columns">
        {[
          { icon: faIdCard, key: 'profile' },
          { icon: faBriefcase, key: 'works' },
          { icon: faEnvelopeOpenText, key: 'contact' },
          { icon: faFileCertificate, key: 'license' },
        ].map(({ icon, key }) => (
          <Column key={key} icon={icon} href={`/${key}`}>
            {t(`sidenav.${key}`)}
          </Column>
        ))}
      </ul>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 72px 4px rgba(0, 0, 0, 0.125);
  & > .home {
    width: 100%;
    height: 128px;
    background: white;
    box-shadow: 0 0 72px 4px rgba(0, 0, 0, 0.125);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    z-index: 1;
    > a {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    > span {
      letter-spacing: 0.125em;
      font-size: 1rem;
      color: #2f2f2f;
      font-family: 'Press Start 2P', monospace;
    }
  }
  > .columns {
    flex-grow: 2;
    overflow: hidden;
  }
`

const SideMenu: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default SideMenu
