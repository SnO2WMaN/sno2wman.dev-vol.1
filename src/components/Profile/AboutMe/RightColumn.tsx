import React from 'react'
import styled from 'styled-components'

import ImageMe from '../../../assets/me.png'
import colors from '../../../colors'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <div className="avatar">
      <img src={ImageMe} />
    </div>
    <h4 className="name">SnO2WMaN</h4>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .avatar {
    width: 160px;
    padding: 16px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.whity4};
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.125), -4px -4px 24px white;
    > img {
      user-select: none;
      border-radius: 8px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.125), -2px -2px 8px white;
    }
  }
  .name {
    color: ${colors.blacky1};
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    margin-top: 24px;
    font-family: 'Press Start 2P', sans-serif;
  }
`

const AvatarColumn: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default AvatarColumn
