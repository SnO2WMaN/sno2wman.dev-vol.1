import React, { useEffect } from 'react'
import styled from 'styled-components'

import CSSShadow from '../../../utils/cssShadow'
import anime from 'animejs'
import Color from 'color'

type ContainerProps = {
  className?: string
  animated: boolean
  href: string
  color: string
  row: number
  line: number
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({
  className,
  children,
  color,
  href,
  row,
  line,
  animated,
}) => {
  const delay = 75 * (row + line + 1) * (row + line)
  const backRef = React.createRef<HTMLDivElement>()
  const iconRef = React.createRef<HTMLDivElement>()
  const maskRef = React.createRef<HTMLDivElement>()
  let timelines: anime.AnimeTimelineInstance[]
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timelines = [
      anime
        .timeline({
          targets: backRef.current,
          autoplay: animated,
        })
        .add({
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutCubic',
          delay: delay + 500,
        }),
      anime
        .timeline({
          targets: iconRef.current,
          autoplay: animated,
        })
        .add({
          scale: [0, 1],
          duration: 750,
          easing: 'easeOutElastic(1, .625)',
          delay: delay + 500,
        }),
      anime
        .timeline({
          targets: maskRef.current,
          autoplay: animated,
        })
        .add({
          scale: [0, 1],
          duration: 350,
          easing: 'easeInExpo',
          delay,
        })
        .add({
          delay: 50,
          borderWidth: 0,
          opacity: { value: 0, easing: 'easeInOutExpo' },
          duration: 500,
          easing: 'easeOutExpo',
        }),
    ]
  }, [animated])

  useEffect(
    () => {
      if (animated) timelines.forEach(timeline => timeline.play())
    },
    [animated] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return (
    <li className={className}>
      <div
        className="back"
        style={{
          backgroundColor: Color.hsl(Color(color).hue(), 75, 97.5).toString(),
          boxShadow: CSSShadow([
            { x: -2, y: -2, blur: 8, color: Color('white').fade(0.25) },
            { x: 2, y: 2, blur: 16, color: Color(color).fade(0.625) },
          ]),
        }}
        ref={backRef}
      />
      <div
        className="hoverer"
        style={{
          borderColor: color,
        }}
      />
      <div className="icon-wrap" style={{ color, fill: color }} ref={iconRef}>
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
        ref={maskRef}
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
    > svg,
    > img {
      width: 24px;
      height: 24px;
    }
    > img {
      object-fit: contain;
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

const SocialLink: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default SocialLink
