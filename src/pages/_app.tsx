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
    justify-content: center;
    overflow-y: scroll;
    height: 100vh;
  }
  .width-fixer {
    width: 100%;
    max-width: 920px;
    margin: 160px 0;
    min-height: calc(100vh - 120px);
    box-shadow: 0 0 72px 16px rgba(0, 0, 0, 0.125);
  }
`

export default StyledComponent
