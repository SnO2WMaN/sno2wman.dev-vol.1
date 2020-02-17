import React from 'react'
import styled from 'styled-components'

type ContainerProps = { icon: JSX.Element; href: string; theme: string }
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className, icon, href, theme }) => (
  <li className={className}>
    <div
      className="icon-wrap"
      style={{
        backgroundColor: theme,
      }}
    >
      {icon}
    </div>
    {href.startsWith('https') ? (
      <a href={href} rel="noopener noreferrer" target="_blank" />
    ) : (
      <a href={href} />
    )}
  </li>
)

const StyledComponent = styled(Component)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.125), -4px -4px 24px white;
  background-color: hsl(225, 12.5%, 97.5%);
  > .icon-wrap {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    > svg {
      width: 20px;
      height: 20px;
    }
  }
  > a {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  > span {
    font-weight: 400;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    font-family: 'Montserrat', sans-serif;
  }
`

const WidgetButton: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default WidgetButton
