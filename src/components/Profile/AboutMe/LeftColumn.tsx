import React from 'react'
import styled from 'styled-components'

import colors from '../../../colors'
import TextBalloon from './TextBalloon'
import { useTranslation } from 'react-i18next'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={className}>
      <TextBalloon className="balloon">
        <p className="greeting">{t('greeting')}</p>
        <div className="lines">
          {(t('profile.aboutme.lines', {
            returnObjects: true,
          }) as string[]).map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </TextBalloon>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .balloon {
    width: 100%;
    min-height: 160px;
  }
  .greeting {
    color: ${colors.blacky4};
    font-family: var(--sans-serif);
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 4px;
    font-feature-settings: 'palt';
  }
  .lines {
    > p {
      color: ${colors.blacky4};
      font-family: var(--sans-serif);
      font-size: 0.9rem;
      font-feature-settings: 'palt';
    }
  }
`

const TextColumn: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default TextColumn
