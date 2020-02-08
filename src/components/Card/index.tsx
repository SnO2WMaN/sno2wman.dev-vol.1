import React from 'react'
import styled from 'styled-components'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>
}

const StyledComponent = styled(Component)`
  box-shadow: 0 0 72px 4px rgba(0, 0, 0, 0.125);
`

const Card: React.FC<ContainerProps> = () => <StyledComponent />

export default Card
