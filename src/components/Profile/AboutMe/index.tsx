import React from 'react'
import styled from 'styled-components'

import colors from '../../../colors'
import TextColumn from './LeftColumn'
import AvatarColumn from './RightColumn'
import { useTranslation } from 'react-i18next'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <section className={className}>
      <h2>{t('profile.aboutme.title')}</h2>
      <div className="columns">
        <TextColumn />
        <AvatarColumn />
      </div>
    </section>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.whity1};
  padding: 48px 0;
  > h2 {
    margin-bottom: 32px;
    color: ${colors.blacky1};
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 0.25em;
  }
  .columns {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0 96px;
  }
`

const AboutMeSection: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default AboutMeSection
