import React from 'react'
import styled from 'styled-components'

type ContainerProps = { icon: JSX.Element; title: string }
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className, icon, title, children }) => (
  <div className={className}>
    <div className="title">
      <div className="icon-wrap">{icon}</div>
      <h3>{title}</h3>
    </div>
    {children}
  </div>
)

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
      color: #2f2f2f;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      margin-right: 16px;
      > svg {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      color: #2f2f2f;
      font-size: 0.75rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      letter-spacing: 0.25em;
    }
  }
`

const Column: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Column
