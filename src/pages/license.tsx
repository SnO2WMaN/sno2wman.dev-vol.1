import React from 'react'
import styled from 'styled-components'

import Hero from '../components/Hero'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <Hero background="#afcfcf">LICENSE</Hero>
  </div>
)

const StyledComponent = styled(Component)`
  width: 100%;
  overflow: hidden;
`

const Container: React.FC<ContainerProps> = () => {
  return <StyledComponent />
}

export default Container
