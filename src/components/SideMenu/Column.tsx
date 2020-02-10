import React from 'react'
import styled from 'styled-components'

import { IconDefinition } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ContainerProps = {
  icon: IconDefinition
  href: string
}
type Props = { className: string } & ContainerProps

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
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 64px;
  user-select: none;
  position: relative;
  > .icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: #2f2f2f;
    color: white;
    border-radius: 50%;
    font-size: 16px;
    margin-right: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
  > span {
    &::before {
      content: '';
      border-left: 1px dotted #2f2f2f;
      margin-right: 8px;
    }
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.15em;
  }
  > a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  transition: box-shadow 0.1s, border-left-width 0.25s ease-out;
  border-left: solid hsl(204, 40%, 69%);
  border-left-width: 0;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 48px rgba(0, 0, 0, 0.125) inset;
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }
  &.selected {
    z-index: 1;
    border-left-width: 16px;
    &::after {
      opacity: 1;
    }
  }
  :not(.selected):hover {
    box-shadow: 0 0 48px rgba(0, 0, 0, 0.125);
    z-index: 2;
  }
`

const Column: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default Column
