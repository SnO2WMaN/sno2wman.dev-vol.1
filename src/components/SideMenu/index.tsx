import React from 'react'
import styled from 'styled-components'

import License from './License'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="wrap"></div>
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
  > .wrap {
    flex-grow: 2;
  }
`

const SideMenu: React.FC<ContainerProps> = () => <StyledComponent />

export default SideMenu
