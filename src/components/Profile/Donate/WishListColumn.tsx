import React, { useEffect } from 'react'
import styled from 'styled-components'

import anime from 'animejs'

type ContainerProps = {
  className?: string
  animated: boolean
  delay: number
  icon: JSX.Element
  title: string
  theme: string
  href: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({
  className,
  animated,
  delay,
  icon,
  title,
  theme,
  href,
}) => {
  const bgRef = React.createRef<HTMLDivElement>()
  const coverRef = React.createRef<HTMLDivElement>()
  const iconRef = React.createRef<HTMLDivElement>()
  const iconCoverRef = React.createRef<HTMLDivElement>()
  const charRefs = Array.from({ length: title.length }, () =>
    React.createRef<HTMLSpanElement>()
  )
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
          scaleX: [0, 1],
          duration: 350,
          easing: 'cubicBezier(0.755, 0.245, 0.000, 1.000)',
          delay,
        }),
      anime
        .timeline({
          targets: coverRef.current,
          autoplay: false,
        })
        .add({
          scaleX: [0, 1],
          duration: 400,
          easing: 'easeInQuint',
          delay,
        })
        .add({
          translateX: [0, `${101}%`],
          duration: 400,
          easing: 'easeOutQuint',
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
          delay: delay + 200,
        }),
      anime
        .timeline({
          targets: iconRef.current,
          autoplay: false,
        })
        .add({
          scale: [0.25, 1],
          rotateZ: [`${-60}deg`, 0],
          opacity: [0, 1],
          duration: 250,
          easing: 'easeOutCubic',
          delay: delay + 550,
        }),
      ...charRefs.map((charRef, i) =>
        anime
          .timeline({
            targets: charRef.current,
            autoplay: false,
          })
          .add({
            translateY: [`${50}%`, 0],
            opacity: [0, 1],
            duration: 150,
            easing: 'easeOutQuad',
            delay: delay + 500 + i * 40,
          })
      ),
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
      <div className="bg" ref={bgRef} />
      <div
        className="cover"
        ref={coverRef}
        style={{
          backgroundColor: theme,
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
        <div className="icon" ref={iconRef}>
          {icon}
        </div>
      </div>
      {title.split('').map((char, i) => (
        <span key={i} ref={charRefs[i]}>
          {char}
        </span>
      ))}
      <a href={href} target="_blank" rel="noopener noreferrer" />
    </li>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  filter: drop-shadow(4px 4px 24px rgba(0, 0, 0, 0.125))
    drop-shadow(-4px -4px 24px white);
  padding: 8px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  > .bg {
    background-color: hsl(225, 12.5%, 97.5%);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    transform-origin: left;
  }
  > .cover {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    transform-origin: left;
  }
  > .icon-wrap {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-right: 16px;
    border-radius: 8px;
    color: white;
    position: relative;
    overflow: hidden;
    > .cover {
      position: absolute;
      border-radius: 50%;
      top: ${((1 - Math.sqrt(2)) / 2) * 100}%;
      left: ${((1 - Math.sqrt(2)) / 2) * 100}%;
      width: ${Math.sqrt(2) * 100}%;
      height: ${Math.sqrt(2) * 100}%;
    }
  }
  > span {
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 0.25em;
    font-family: 'Montserrat', sans-serif;
  }
  > a {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
  }
`

const WishListsColumn: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default WishListsColumn
