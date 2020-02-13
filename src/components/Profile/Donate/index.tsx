import React from 'react'
import styled from 'styled-components'

import IconPepsi from '../../../assets/svg/pepsi.svg'
import Column from './Column'
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
      <Column title="BUY ME A PEPSI" icon={<IconPepsi />}>
        <WidgetButtonsList />
      </Column>
      <Column title="WISHLIST" icon={<FontAwesomeIcon icon={faHandsHeart} />}>
        <WishList />
      </Column>
    </div>
  </section>
)

const StyledComponent = styled(Component)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(225, 12.5%, 92.5%);
  padding: 48px 0;
  > h2 {
    color: #2f2f2f;
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
    grid-template-columns: auto 1fr;
    grid-row-gap: 32px;
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
