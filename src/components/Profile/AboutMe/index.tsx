import React from 'react'
import styled from 'styled-components'

import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <h2>ABOUT ME</h2>
    <div className="columns">
      <LeftColumn />
      <RightColumn />
    </div>
  </section>
)

const StyledComponent = styled(Component)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(225, 12.5%, 92.5%);
  padding: 48px 0;
  > h2 {
    margin-bottom: 32px;
    color: #2f2f2f;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 0.25em;
  }
  .columns {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0 96px;
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
