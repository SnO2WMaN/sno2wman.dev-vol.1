import React from 'react'
import styled from 'styled-components'

import Badge from '../../Badge'
import { faFileCertificate } from '@fortawesome/pro-solid-svg-icons'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <div className="badges">
      <Badge
        icon={faFileCertificate}
        title="LICENSE"
        theme="#499ee9"
        href="https://github.com/SnO2WMaN/sno2wman.dev/blob/master/LICENSE"
      >
        MIT
      </Badge>
    </div>
    <p>
      Copyright 2020 <a href="/">SnO2WMaN</a>.
    </p>
  </div>
)

const StyledComponent = styled(Component)`
  width: 100%;
  padding: 32px 24px;
  background-color: #fff;
  box-shadow: 0 0 72px 4px rgba(0, 0, 0, 0.125);
  > .badges {
    display: flex;
    margin-bottom: 8px;
    > :not(:last-child) {
      margin-right: 0.5rem;
    }
  }
  > p {
    color: #2f2f2f;
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    a {
      color: #2f2f2f;
      text-decoration: none;
    }
  }
`

const SideMenu: React.FC<ContainerProps> = () => <StyledComponent />

export default SideMenu
