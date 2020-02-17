import React from 'react'
import styled from 'styled-components'

import { SkillType } from '../../../data/skillset'
import Skill from './Skill'

type ContainerProps = {
  className?: string
  category: string
  skills: { [key in string]: SkillType }
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({ className, skills, category }) => {
  return (
    <div className={className}>
      <div className="title">
        <h3>{category}</h3>
      </div>
      <ul>
        {Object.entries(skills).map(([key, skill]) => (
          <Skill skill={skill} key={key} />
        ))}
      </ul>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  .title {
    width: 10rem;
    margin-right: 16px;
    height: 32px;
    display: flex;
    align-items: center;
    h3 {
      color: hsl(225, 12.5%, 65%);
      font-size: 0.7rem;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0.25em;
      margin-right: 8px;
    }
    &::after {
      flex-grow: 2;
      content: '';
      height: 1px;
      background-color: hsl(225, 12.5%, 75%);
    }
  }
  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
