import React from 'react'
import styled, { css } from 'styled-components'

type ContainerProps = { className?: string }
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({ className, children }) => (
  <div className={className}>
    <div className="triangle"></div>
    {children}
  </div>
)

const StyledComponent = styled(Component)`
  position: relative;
  background-color: hsl(225, 15%, 95%);
  filter: drop-shadow(4px 4px 24px rgba(0, 0, 0, 0.125))
    drop-shadow(-4px -4px 24px white);
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .triangle {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 32px;
    height: 32px;
    right: -16px;
    background-color: hsl(225, 15%, 95%);
    transform: rotateZ(45deg);
  }
`

const Balloon: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Balloon
