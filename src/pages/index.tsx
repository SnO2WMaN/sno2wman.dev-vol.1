import React from 'react'
import styled from 'styled-components'

import Card from '../components/Card'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <header>
      <Card>
        <p>A</p>
      </Card>
    </header>
  </div>
)

const StyledComponent = styled(Component)`
  width: 100%;
  > header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Container: React.FC<ContainerProps> = () => {
  return <StyledComponent />
}

export default Container
