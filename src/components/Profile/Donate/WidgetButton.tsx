import React, { useEffect } from 'react'
import styled from 'styled-components'

import colors from '../colors'
import anime from 'animejs'
import Color from 'color'

type ContainerProps = {
  className?: string
  animated: boolean
  delay: number
  icon: JSX.Element
  href: string
  theme: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({
  className,
  icon,
  delay,
  href,
  theme,
  animated,
}) => {
  const bgRef = React.createRef<HTMLDivElement>()
  const coverRef = React.createRef<HTMLDivElement>()
  const iconRef = React.createRef<HTMLDivElement>()
  const iconCoverRef = React.createRef<HTMLDivElement>()

  let timelines: anime.AnimeTimelineInstance[]
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timelines = [
      anime
        .timeline({
          targets: bgRef.current,
          autoplay: false,
        })
        .add({
          scale: [0, 1],
          duration: 500,
          easing: 'easeInOutCubic',
          delay,
        }),
      anime
        .timeline({
          targets: coverRef.current,
          autoplay: false,
        })
        .add({
          scale: [1, 0],
          opacity: [0, 1],
          duration: 350,
          easing: 'easeInOutCubic',
          delay: delay + 100,
        }),
      anime
        .timeline({
          targets: iconCoverRef.current,
          autoplay: false,
        })
        .add({
          opacity: [0, 1],
          scale: [0, 1],
          duration: 350,
          easing: 'easeInCubic',
          delay: delay + 250,
        }),
      anime
        .timeline({
          targets: iconRef.current,
          autoplay: false,
        })
        .add({
          scale: [0.25, 1],
          rotateZ: [`${60}deg`, 0],
          opacity: [0, 1],
          duration: 250,
          easing: 'easeOutCubic',
          delay: delay + 600,
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
    <div className={className}>
      <div className="bg" ref={bgRef} />
      <div
        className="cover"
        ref={coverRef}
        style={{
          backgroundColor: Color(theme)
            .lighten(0.25)
            .toString(),
        }}
      />
      <div className="icon-wrap">
        <div
          className="cover"
          ref={iconCoverRef}
          style={{
            backgroundColor: theme,
          }}
        />
        <div ref={iconRef} className="icon">
          {icon}
        </div>
      </div>
      {href.startsWith('https') ? (
        <a href={href} rel="noopener noreferrer" target="_blank" />
      ) : (
        <a href={href} />
      )}
    </div>
  )
}
const StyledComponent = styled(Component)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.125))
    drop-shadow(-4px -4px 12px white);
  overflow: hidden;
  > .bg {
    background-color: ${colors.whity4};
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
  }
  > .cover {
    position: absolute;
    border-radius: 50%;
    top: ${((1 - Math.sqrt(2)) / 2) * 100}%;
    left: ${((1 - Math.sqrt(2)) / 2) * 100}%;
    width: ${Math.sqrt(2) * 100}%;
    height: ${Math.sqrt(2) * 100}%;
  }
  > .icon-wrap {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
    z-index: 1;
    > .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {
        position: relative;
        width: 20px;
        height: 20px;
        z-index: 1;
      }
    }
    > .cover {
      z-index: -1;
      border-radius: 50%;
      position: absolute;
      top: ${((1 - Math.sqrt(2)) / 2) * 100}%;
      left: ${((1 - Math.sqrt(2)) / 2) * 100}%;
      width: ${Math.sqrt(2) * 100}%;
      height: ${Math.sqrt(2) * 100}%;
    }
  }
  > a {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const WidgetButton: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default WidgetButton
