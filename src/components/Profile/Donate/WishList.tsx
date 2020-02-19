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

type ContainerProps = {
  className?: string
  animated: boolean
}
type Props = {} & ContainerProps

const list = {
  books: {
    icon: <FontAwesomeIcon icon={faBook} />,
    theme: brandcolors.amazon,
    href: 'https://www.amazon.jp/hz/wishlist/ls/BO23V3CPIPJO?ref_=wl_share',
  },
  comics: {
    icon: <FontAwesomeIcon icon={faBooks} />,
    theme: brandcolors.amazon,
    href: 'https://www.amazon.jp/hz/wishlist/ls/1NQARLKRX8PTF?ref_=wl_share',
  },
  things: {
    icon: <FontAwesomeIcon icon={faCubes} />,
    theme: brandcolors.amazon,
    href: 'https://www.amazon.jp/hz/wishlist/ls/2NHME83WUZWSR?ref_=wl_share',
  },
  games: {
    theme: brandcolors.steam,
    icon: <FontAwesomeIcon icon={faGameConsoleHandheld} />,
    href: 'https://store.steampowered.com/wishlist/id/SnO2WMaN',
  },
}

const Component: React.FC<Props> = ({ className, animated }) => {
  const { t } = useTranslation()
  return (
    <div className={className}>
      {Object.entries(list).map(([key, { icon, theme, href }], i) => (
        <WishListColumn
          key={key}
          animated={animated}
          icon={icon}
          theme={theme}
          href={href}
          title={t(`profile.donate.wishlists.${key}`)}
          delay={i * 100}
        />
      ))}
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`

const WishList: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default WishList
