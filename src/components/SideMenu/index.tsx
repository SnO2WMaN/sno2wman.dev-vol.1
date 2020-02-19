import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import Column from './Column'
import {
  faBriefcase,
  faEnvelopeOpenText,
  faFileCertificate,
  faIdCard,
} from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

type ContainerProps = { className?: string }
type Props = {} & ContainerProps

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
          <Column className="column" key={key} icon={icon} href={`/${key}`}>
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
  background-color: ${colors.whity4};
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.125);
  & > .home {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 128px;
    background-color: ${colors.whity3};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
    user-select: none;
    > a {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    > span {
      color: ${colors.blacky3};
      font-size: 1rem;
      font-family: 'Press Start 2P', monospace;
      letter-spacing: 0.125em;
    }
  }
  > .columns {
    flex-grow: 2;
    overflow: hidden;
    > .column {
      &:not(:last-of-type) {
        margin-bottom: 12px;
      }
    }
  }
`

const SideMenu: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default SideMenu
