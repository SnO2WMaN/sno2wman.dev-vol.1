import React, { useEffect } from 'react'
import styled from 'styled-components'

import colors from '../../../colors'
import anime from 'animejs'

type ContainerProps = {
  className?: string
  animated: boolean
  icon: JSX.Element
  title: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({
  className,
  icon,
  title,
  children,
  animated,
}) => {
  const iconRef = React.createRef<HTMLDivElement>()
  const titleRef = React.createRef<HTMLHeadingElement>()

  let timelines: anime.AnimeTimelineInstance[]
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timelines = [
      anime
        .timeline({
          targets: iconRef.current,
          autoplay: false,
        })
        .add({
          scale: [0, 1],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutBack',
        }),
      anime
        .timeline({
          targets: titleRef.current,
          autoplay: false,
        })
        .add({
          rotateZ: [`${30}deg`, 0],
          opacity: [0, 1],
          duration: 500,
          delay: 250,
          easing: 'easeOutElastic(1, 1.125)',
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
      <div className="title">
        <div ref={iconRef} className="icon-wrap">
          {icon}
        </div>
        <h3 ref={titleRef}>{title}</h3>
      </div>
      {children}
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  padding: 16px 48px;
  .title {
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 36px;
    > .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      margin-right: 16px;
      color: ${colors.blacky2};
      > svg {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      color: ${colors.blacky2};
      font-size: 0.75rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      letter-spacing: 0.25em;
      transform-origin: left;
    }
  }
`

const Column: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Column
