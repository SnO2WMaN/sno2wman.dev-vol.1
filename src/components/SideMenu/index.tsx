import React from 'react'
import styled from 'styled-components'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>
}

const StyledComponent = styled(Component)`
  min-width: 320px;
  height: 100vh;
  background: hsl(172, 25%, 97%);
  box-shadow: 0 0 72px 4px rgba(0, 0, 0, 0.125);
`

const SideMenu: React.FC<ContainerProps> = () => <StyledComponent />

export default SideMenu
