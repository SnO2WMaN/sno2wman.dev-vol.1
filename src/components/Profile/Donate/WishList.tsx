import React from 'react'
import styled from 'styled-components'

import brandcolors from '../../../data/brandcolors.json'
import WishListColumn from './WishListColumn'
import {
  faBook,
  faBooks,
  faCubes,
  faGameConsoleHandheld,
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <ul className={className}>
      <WishListColumn
        icon={<FontAwesomeIcon icon={faBook} />}
        theme={brandcolors.amazon}
        href="https://www.amazon.jp/hz/wishlist/ls/BO23V3CPIPJO?ref_=wl_share"
      >
        {t('profile.donate.wishlists.books')}
      </WishListColumn>
      <WishListColumn
        icon={<FontAwesomeIcon icon={faBooks} />}
        theme={brandcolors.amazon}
        href="https://www.amazon.jp/hz/wishlist/ls/1NQARLKRX8PTF?ref_=wl_share"
      >
        {t('profile.donate.wishlists.comics')}
      </WishListColumn>
      <WishListColumn
        icon={<FontAwesomeIcon icon={faCubes} />}
        theme={brandcolors.amazon}
        href="https://www.amazon.jp/hz/wishlist/ls/2NHME83WUZWSR?ref_=wl_share"
      >
        {t('profile.donate.wishlists.things')}
      </WishListColumn>
      <WishListColumn
        icon={<FontAwesomeIcon icon={faGameConsoleHandheld} />}
        theme={brandcolors.steam}
        href="https://store.steampowered.com/wishlist/id/SnO2WMaN"
      >
        {t('profile.donate.wishlists.games')}
      </WishListColumn>
    </ul>
  )
}

const StyledComponent = styled(Component)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container
