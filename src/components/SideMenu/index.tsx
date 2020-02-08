import React from 'react'
import styled from 'styled-components'

import Column from './Column'
import License from './License'
import {
  faBriefcase,
  faEnvelopeOpenText,
  faFileAlt,
  faIdCard,
} from '@fortawesome/pro-solid-svg-icons'
import { useTranslation } from 'react-i18next'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={className}>
      <ul className="columns">
        {[
          { icon: faIdCard, key: 'profile' },
          { icon: faBriefcase, key: 'works' },
          { icon: faEnvelopeOpenText, key: 'contact' },
          { icon: faFileAlt, key: 'blog' },
        ].map(({ icon, key }) => (
          <Column icon={icon} key={key} href={`/${key}`}>
            {t(`sidenav-${key}`)}
          </Column>
        ))}
      </ul>
      <License />
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
  > .columns {
    flex-grow: 2;
  }
`

const SideMenu: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default SideMenu
