import React from 'react'
import styled from 'styled-components'

import DonateSection from '../components/Profile/Donate'
import LinksSection from '../components/Profile/Links'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <LinksSection />
    <DonateSection />
  </div>
)

const StyledComponent = styled(Component)`
  width: 100%;
  user-select: none;
  overflow: hidden;
  > header {
    height: 512px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > img {
      width: 128px;
      height: 128px;
      border-radius: 12.5%;
      margin-bottom: 24px;
    }
    > p {
      color: #2f2f2f;
      font-size: 1.25rem;
      letter-spacing: 0.1em;
      font-family: 'Press Start 2P', sans-serif;
    }
  }
`

const Container: React.FC<ContainerProps> = () => {
  return <StyledComponent />
}

export default Container
