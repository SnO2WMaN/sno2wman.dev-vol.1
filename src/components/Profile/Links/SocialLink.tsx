import React from 'react'
import styled from 'styled-components'

import CSSShadow from '../../../utils/cssShadow'
import anime from 'animejs'
import Color from 'color'

type ContainerProps = {
  href: string
  color: string
  index: number
}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({
  className,
  children,
  color,
  href,
  index,
}) => {
  const delay = ((index ** 4 + index ** (1 / 2)) / 2) * 600
  return (
    <li className={className}>
      <div
        className="back"
        style={{
          backgroundColor: Color.hsl(Color(color).hue(), 75, 97.5).toString(),
          boxShadow: CSSShadow([
            { x: -2, y: -2, blur: 16, color: Color('white').fade(0.25) },
            { x: 2, y: 2, blur: 16, color: Color(color).fade(0.75) },
          ]),
        }}
        ref={reference =>
          anime
            .timeline({
              targets: reference,
            })
            .add({
              opacity: [0, 1],
              duration: 500,
              easing: 'easeOutCubic',
              delay: delay + 500,
            })
        }
      />
      <div
        className="hoverer"
        style={{
          borderColor: color,
        }}
      />
      <div
        className="icon-wrap"
        style={{ color, fill: color }}
        ref={reference =>
          anime
            .timeline({
              targets: reference,
            })
            .add({
              scale: [0, 1],
              duration: 500,
              easing: 'easeOutElastic(1, .625)',
              delay: delay + 600,
            })
        }
      >
        {children}
      </div>
      {href.startsWith('https') ? (
        <a href={href} rel="noopener noreferrer" target="_blank" />
      ) : (
        <a href={href} />
      )}
      <div
        style={{
          borderColor: color,
        }}
        className="mask"
        ref={reference =>
          anime
            .timeline({
              targets: reference,
            })
            .add({
              scale: [0, 1],
              duration: 500,
              easing: 'easeInExpo',
              delay,
            })
            .add({
              borderWidth: 0,
              opacity: { value: 0, easing: 'easeInOutExpo' },
              duration: 500,
              easing: 'easeOutExpo',
            })
        }
      />
    </li>
  )
}

const StyledComponent = styled(Component)`
  position: relative;
  width: 48px;
  height: 48px;
  > .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 50%;
    z-index: 0;
  }
  > .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-style: solid;
    border-width: 24px;
    z-index: 1;
  }
  > .icon-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: white;
    z-index: 2;
    > svg {
      width: 24px;
      height: 24px;
    }
  }
  > a {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  > .hoverer {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-style: solid;
    border-width: 0;
    transition: border-width 0.125s ease-out;
  }
  :hover {
    > .hoverer {
      border-width: 2px;
    }
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
