import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ContainerProps = { className?: string; icon: IconDefinition; href: string }
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({ className, icon, children, href }) => {
  const router = useRouter()
  const selected = router.pathname === href
  return (
    <li className={classnames(className, { selected })}>
      <div className="icon-wrap">
        <FontAwesomeIcon icon={icon} fixedWidth />
      </div>
      <span>{children}</span>
      {!selected && (
        <Link href={href}>
          <a />
        </Link>
      )}
    </li>
  )
}

const StyledComponent = styled(Component)`
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  border-left: solid ${colors.accent1};
  border-left-width: 0;
  transition: box-shadow 0.1s, border-left-width 0.25s ease-out,
    background-color 0.25s;
  background-color: ${colors.whity4};
  user-select: none;
  > .icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    color: white;
    font-size: 16px;
    background-color: ${colors.blacky4};
    border-radius: 50%;
    box-shadow: -2px -2px 8px white, 2px 2px 8px rgba(0, 0, 0, 0.25);
    transition: background-color 0.125s ease;
  }
  > span {
    &::before {
      margin-right: 8px;
      border-left: 1px dotted ${colors.blacky4};
      content: '';
    }
    color: ${colors.blacky4};
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.15em;
  }

  > a {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: -4px -4px 12px rgba(255, 255, 255, 0.75) inset,
      4px 4px 12px rgba(0, 0, 0, 0.125) inset;
    opacity: 0;
    transition: opacity 0.1s ease-out;
    content: '';
  }

  :not(.selected):hover {
    z-index: 2;
    box-shadow: -4px -4px 12px white, 4px 4px 12px rgba(0, 0, 0, 0.125);
  }

  &.selected {
    z-index: 1;
    background-color: ${colors.whity2};
    > .icon-wrap {
      background-color: ${colors.accent1};
    }
    &::after {
      opacity: 1;
    }
  }
`

const Column: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default Column
