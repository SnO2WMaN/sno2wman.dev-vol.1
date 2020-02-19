import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFileCertificate } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <footer className={className}>
      <div className={classnames('column', 'left')}>
        <div className="title">
          <p>SnO2WMaN.dev</p>
        </div>
        <a>{t('footer.copyright')}</a>
        <Link href="/license">
          <a>{t('footer.license')}</a>
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
}

const StyledComponent = styled(Component)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: 96px;
  padding: 16px 48px;
  background-color: ${colors.blacky4};
  .column {
    display: flex;
    align-items: center;
  }
  .title {
    margin-right: 24px;
    > p {
      color: ${colors.grey1};
      font-size: 0.9rem;
      font-family: 'Press Start 2P', sans-serif;
      letter-spacing: 0.1em;
    }
  }
  .left a {
    color: ${colors.grey1};
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    line-height: 3em;
    letter-spacing: 0.05em;
    text-decoration: none;
    :not(:last-of-type) {
      margin-right: 16px;
    }
  }
  .right a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: ${colors.grey1};
    font-size: 1.25rem;
    :not(:last-of-type) {
      margin-right: 8px;
    }
  }
`

const Footer: React.FC<ContainerProps> = properties => (
  <StyledComponent {...properties} />
)

export default Footer
