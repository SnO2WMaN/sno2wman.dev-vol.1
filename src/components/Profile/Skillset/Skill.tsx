import React from 'react'
import styled from 'styled-components'

import { SkillType } from '../../../data/skillset'
import anime from 'animejs'
import Color from 'color'

type ContainerProps = {
  className?: string
  skill: SkillType
  delay: number
}
type Props = {} & ContainerProps

const coverAnimation = (
  reference: HTMLElement,
  delay: number,
  ease: string[]
) =>
  anime
    .timeline({
      targets: reference,
    })
    .add({
      translateX: [`-${101}%`, 0],
      delay,
      duration: 250,
      easing: ease[0],
    })
    .add({
      translateX: [0, `${101}%`],
      duration: 250,
      easing: ease[1],
    })

const Component: React.FC<Props> = ({ className, skill, delay }) => {
  const iconColor =
    Color(skill.color).luminosity() >= 0.65 ? '#2f2f2f' : 'white'

  return (
    <div className={className}>
      <div
        className="bg"
        ref={reference =>
          anime
            .timeline({
              targets: reference,
            })
            .add({
              opacity: [0, 1],
              duration: 100,
              easing: 'easeOutSine',
              delay: delay + 200,
            })
        }
      />
      <div className="covers">
        {[
          [0.55, 0.055, 0.675, 0.19],
          [0.895, 0.03, 0.685, 0.22],
          [0.95, 0.05, 0.795, 0.035],
        ]
          .map(({ 0: x1, 1: y1, 2: x2, 3: y2 }) => [
            `cubicBezier(${x1}, ${y1}, ${x2}, ${y2})`,
            `cubicBezier(${1 - x1}, ${1 - y1}, ${1 - x2}, ${1 - y2})`,
          ])
          .map((_, i, { length }) => (
            <div
              className="cover"
              key={i}
              style={{
                backgroundColor: Color(skill.color)
                  .saturate((i - length / 2) * 0.15)
                  .lighten((i - length / 2) * 0.15)
                  .toString(),
              }}
              ref={reference => coverAnimation(reference, delay, _)}
            />
          ))}
      </div>
      <div className="icon-wrapper">
        <div
          className="cover"
          style={{
            backgroundColor: skill.color,
          }}
          ref={reference =>
            anime
              .timeline({
                targets: reference,
              })
              .add({
                scale: [0, 1],
                duration: 350,
                easing: 'easeInCubic',
                delay: delay + 250,
              })
          }
        />
        <div
          className="icon"
          style={{
            fill: iconColor,
            color: iconColor,
          }}
          ref={reference =>
            anime
              .timeline({
                targets: reference,
              })
              .add({
                scale: [0.5, 1],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutExpo',
                delay: delay + 600,
              })
          }
        >
          {skill.icon}
        </div>
      </div>
      <span
        ref={reference =>
          anime
            .timeline({
              targets: reference,
            })
            .add({
              opacity: [0, 1],
              translateX: [`${-25}%`, 0],
              duration: 500,
              easing: 'easeOutCubic',
              delay: delay + 350,
            })
        }
      >
        {skill.name}
      </span>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  padding: 4px 4px;
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(225, 12.5%, 97.5%);
    z-index: 0;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.125),
      -2px -2px 8px rgba(255, 255, 255, 0.5);
  }
  .covers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow: hidden;
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .icon-wrapper {
    width: 24px;
    height: 24px;
    margin-right: 6px;
    border-radius: 2px;
    z-index: 1;
    position: relative;
    overflow: hidden;
    > .cover {
      position: absolute;
      z-index: 0;
      top: ${((1 - Math.sqrt(2)) * 100) / 2}%;
      left: ${((1 - Math.sqrt(2)) * 100) / 2}%;
      width: ${100 * Math.sqrt(2)}%;
      height: ${100 * Math.sqrt(2)}%;
      border-radius: 50%;
    }
    > .icon {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {
        width: 16px;
        height: 16px;
      }
      > img {
        width: 16px;
      }
    }
  }
  > span {
    color: #2f2f2f;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    flex-grow: 2;
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
