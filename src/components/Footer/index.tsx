import React from 'react'
import styled from 'styled-components'

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFileCertificate } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import Link from 'next/link'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <footer className={className}>
    <div className={classnames('column', 'left')}>
      <div className="title">
        <p>SnO2WMaN.dev</p>
      </div>
      <a>&copy; 2020 SnO2WMaN</a>
      <Link href="/license">
        <a>LICENSE</a>
      </Link>
    </div>
    <div className={classnames('column', 'right')}>
      <a href="https://twitter.com/SnO2WMaN">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://github.com/SnO2WMaN/sno2wman.dev">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </footer>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 96px;
  padding: 16px 48px;
  background-color: hsl(242, 15%, 18%);
  display: grid;
  grid-template-columns: 2fr 1fr;
  .column {
    display: flex;
    align-items: center;
  }
  .title {
    margin-right: 24px;
    > p {
      color: hsl(242, 7%, 60%);
      font-family: 'Press Start 2P', sans-serif;
      font-size: 0.9rem;
      letter-spacing: 0.1em;
    }
  }
  .left a {
    color: hsl(242, 7%, 60%);
    letter-spacing: 0.05em;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    line-height: 3em;
    text-decoration: none;
    :not(:last-of-type) {
      margin-right: 16px;
    }
  }
  .right a {
    color: hsl(242, 7%, 60%);
    width: 36px;
    height: 36px;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    :not(:last-of-type) {
      margin-right: 8px;
    }
  }
`

const Footer: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default Footer
