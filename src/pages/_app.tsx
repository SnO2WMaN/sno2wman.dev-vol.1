import React from 'react'
import styled from 'styled-components'

import '../styles/global.css'
import '../locales/i18n'
import colors from '../colors'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import { ScrollContainer } from '../store'
import { useScroll } from 'react-use'

const Scroller: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const a = ScrollContainer.useContainer()
  const main = React.createRef<HTMLDivElement>()
  const { y } = useScroll(main)

  a.setScrollY(y)

  return (
    <div className={className} ref={main}>
      {children}
    </div>
  )
}

export const App = ({ Component, pageProps, className }) => {
  return (
    <div className={className}>
      <SideMenu className="sidemenu" />
      <ScrollContainer.Provider>
        <Scroller className="page-wrapper">
          <div className="width-fixer">
            <Component {...pageProps} scrollY={2} />
            <Footer />
          </div>
        </Scroller>
      </ScrollContainer.Provider>
    </div>
  )
}

const StyledComponent = styled(App)`
  display: flex;
  overflow-y: hidden;
  > .sidemenu {
    z-index: 10;
  }
  .page-wrapper {
    flex-grow: 2;
    height: 100vh;
    overflow-y: scroll;
    background-color: ${colors.bg};
  }
  .width-fixer {
    width: 100%;
    max-width: 920px;
    margin: 160px auto;
    overflow: hidden;
    box-shadow: -8px -8px 48px rgba(255, 255, 255, 0.75),
      8px 8px 48px rgba(0, 0, 0, 0.125);
  }
`

export default StyledComponent
