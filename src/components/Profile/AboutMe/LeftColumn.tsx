import React from 'react'
import styled, { keyframes } from 'styled-components'

import TextBalloon from './TextBalloon'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className, children }) => (
  <div className={className}>
    <TextBalloon className="balloon"></TextBalloon>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .balloon {
    width: 100%;
    min-height: 160px;
  }
  .text {
    font-family: 'Press Start 2P', sans-serif;
    color: #2f2f2f;
    letter-spacing: 0.1em;
  }
`

const Column: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Column
