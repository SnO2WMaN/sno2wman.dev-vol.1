import React from 'react'
import styled from 'styled-components'

type ContainerProps = { background: string }
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className, children, background }) => (
  <div
    className={className}
    style={{
      background,
    }}
  >
    <h1>{children}</h1>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh / 3);
  box-shadow: 0 0 72px 4px rgba(0, 0, 0, 0.125);
  user-select: none;
  > h1 {
    color: #2f2f2f;
    font-size: 2rem;
    font-family: 'Press Start 2P', monospace;
    letter-spacing: 0.125em;
  }
`

const Hero: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default Hero
