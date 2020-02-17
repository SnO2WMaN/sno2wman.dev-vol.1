import React from 'react'
import styled from 'styled-components'

import { SkillType } from '../../../data/skillset'
import Color from 'color'

type ContainerProps = {
  className?: string
  skill: SkillType
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({ className, skill }) => {
  const iconColor =
    Color(skill.color).luminosity() >= 0.65 ? '#2f2f2f' : 'white'
  return (
    <div className={className}>
      <div
        className="icon-wrapper"
        style={{
          backgroundColor: skill.color,
          fill: iconColor,
          color: iconColor,
        }}
      >
        {skill.icon}
      </div>
      <span>{skill.name}</span>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  padding: 4px 4px;
  background-color: hsl(225, 12.5%, 97.5%);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.125),
    -2px -2px 8px rgba(255, 255, 255, 0.5);
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: 6px;
    border-radius: 2px;
    > svg {
      width: 16px;
      height: 16px;
    }
    > img {
      width: 16px;
    }
  }
  > span {
    color: #2f2f2f;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
