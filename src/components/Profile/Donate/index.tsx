import React from 'react'
import styled from 'styled-components'

import IconPepsi from '../../../assets/svg/pepsi.svg'
import WidgetButtonsList from './WidgetButtonsList'
import WishList from './WishList'
import { faHandsHeart } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <h2>
      <span>DONATE</span> / <span>WISHLIST</span>
    </h2>
    <div className="columns">
      <div className="column">
        <div className="column-title">
          <div className="icon-wrap">
            <IconPepsi />
          </div>
          <h3>BUY ME A PEPSI</h3>
        </div>
        <WidgetButtonsList />
      </div>
      <div className="column">
        <div className="column-title">
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faHandsHeart} />
          </div>
          <h3>WISHLIST</h3>
        </div>
        <WishList />
      </div>
    </div>
  </section>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 512px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(225, 12.5%, 92.5%);
  > h2 {
    color: #2f2f2f;
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 0.25em;
  }
  .columns {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .column {
    display: flex;
    flex-direction: column;
    padding: 16px 48px;
  }
  .column-title {
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 36px;
    > .icon-wrap {
      color: #2f2f2f;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      margin-right: 16px;
      > svg {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      color: #2f2f2f;
      font-size: 0.75rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      letter-spacing: 0.25em;
    }
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
