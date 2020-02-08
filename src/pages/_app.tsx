import React from 'react'
import styled from 'styled-components'

import '../styles/global.css'
import '../locales/i18n'
import SideMenu from '../components/SideMenu'

export const a = ({ Component, pageProps, className }) => (
  <>
    <div className={className}>
      <SideMenu />
      <div className="page-wrapper">
        <div className="width-fixer">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  </>
)

const StyledComponent = styled(a)`
  display: flex;
  overflow-y: hidden;
  .page-wrapper {
    display: flex;
    flex-grow: 2;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow-y: scroll;
  }
  .width-fixer {
    width: 100%;
    max-width: 960px;
    min-height: 100%;
  }
`

export default StyledComponent
