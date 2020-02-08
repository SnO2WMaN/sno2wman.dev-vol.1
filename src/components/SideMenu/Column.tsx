import React from 'react'
import styled from 'styled-components'

import { IconDefinition } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

type ContainerProps = {
  icon: IconDefinition
  href: string
}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className, icon, children, href }) => (
  <li className={className}>
    <div className="icon-wrap">
      <FontAwesomeIcon icon={icon} fixedWidth />
    </div>
    <span>{children}</span>
    <Link href={href}>
      <a />
    </Link>
  </li>
)
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
  }
`

const Column: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default Column
