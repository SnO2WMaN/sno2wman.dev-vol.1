import React from 'react'
import styled from 'styled-components'

type ContainerProps = { icon: JSX.Element; theme: string; href: string }
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({
  className,
  children,
  icon,
  theme,
  href,
}) => (
  <li className={className}>
    <div
      className="icon-wrap"
      style={{
        backgroundColor: theme,
      }}
    >
      {icon}
    </div>
    <span>{children}</span>
    <a href={href} target="_blank" rel="noopener noreferrer" />
  </li>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.125), -4px -4px 24px white;
  background-color: hsl(225, 12.5%, 97.5%);
  padding: 8px;
  border-radius: 4px;
  position: relative;
  .icon-wrap {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-right: 16px;
    border-radius: 8px;
    color: white;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.125), -4px -4px 24px white;
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

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
