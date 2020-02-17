import React from 'react'
import styled from 'styled-components'

import { SkillType } from '../../../data/skillset'
import Skill from './Skill'
import anime from 'animejs'

type ContainerProps = {
  className?: string
  category: string
  skills: { [key in string]: SkillType }
  delay: number
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({ className, skills, category, delay }) => {
  return (
    <div className={className}>
      <div className="title">
        <h3
          ref={reference =>
            anime
              .timeline({
                targets: reference,
              })
              .add({
                translateX: [`${-50}%`, 0],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeInOutCubic',
                delay,
              })
          }
        >
          {category}
        </h3>
        <div
          className="border"
          ref={reference =>
            anime
              .timeline({
                targets: reference,
              })
              .add({
                scaleX: [0, 1],
                duration: 500,
                easing: 'easeOutCubic',
                delay: delay + 500,
              })
          }
        />
      </div>
      <ul>
        {Object.entries(skills).map(([key, skill], i) => (
          <Skill skill={skill} key={key} delay={delay + 500 + i ** 1.1 * 50} />
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
    > .border {
      flex-grow: 2;
      content: '';
      height: 1px;
      transform-origin: left;
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

const CategoryColumn: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default CategoryColumn
