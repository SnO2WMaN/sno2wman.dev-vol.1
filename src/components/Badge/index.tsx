import React from 'react'
import styled from 'styled-components'

import { IconDefinition } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
  icon: IconDefinition
  title: string
  theme: string
  href: string
}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({
  className,
  icon,
  title,
  theme,
  href,
  children,
}) => (
  <div className={className}>
    <div className="head">
      <div className="icon-wrap">
        <FontAwesomeIcon icon={icon} fixedWidth />
      </div>
      <span className="title">{title}</span>
    </div>
    <div className="body" style={{ backgroundColor: theme }}>
      <span>{children}</span>
    </div>
    <a rel="noopener noreferrer" target="_blank" href={href} />
  </div>
)

const StyledComponent = styled(Component)`
  position: relative;
  display: flex;
  align-items: stretch;
  font-size: 0.8rem;
  user-select: none;
  > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  > .head {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25em 0.5em;
    color: white;
    background-color: #2f2f2f;
    > .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.5em;
      font-size: 0.75em;
    }
    > .title {
      font-size: 0.75em;
      font-family: sans-serif;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.175em;
    }
  }
  > .body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5em;
    color: white;
    font-size: 0.75em;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
  }
`

const SideMenu: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default SideMenu
