import React from 'react'
import styled from 'styled-components'

import IconKofi from '../../../assets/svg/ko-fi_nofill.svg'
import brandcolors from '../../../data/brandcolors.json'
import WidgetButton from './WidgetButton'
import {
  faAmazon,
  faBitcoin,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
  className?: string
  animated: boolean
}
type Props = {} & ContainerProps

const widgets = {
  'ko-fi': {
    title: 'Ko-fi',
    href: 'https://ko-fi.com/sno2wman',
    icon: <IconKofi />,
  },
  'patreon': {
    title: 'Patreon',
    href: 'https://www.patreon.com/bePatron?u=15331123',
    icon: <FontAwesomeIcon icon={faPatreon} />,
  },
  'amazon': {
    title: 'Amazon',
    href: 'https://www.amazon.jp/hz/wishlist/ls/30A2KIUKMP1MQ?ref_=wl_share',
    icon: <FontAwesomeIcon icon={faAmazon} />,
  },
  'bitcoin': {
    title: 'Bitcoin',
    href: 'bitcoin:13EKexdZYnjKaQQAVSrbtwegAN9iAeLBiG',
    icon: <FontAwesomeIcon icon={faBitcoin} />,
  },
}

const Component: React.FC<Props> = ({ className, animated }) => {
  return (
    <div className={className}>
      <ul>
        {Object.entries(widgets).map(([key, { title, href, icon }], i) => (
          <WidgetButton
            icon={icon}
            href={href}
            theme={brandcolors[key]}
            key={key}
            animated={animated}
            delay={i * 100}
          >
            {title}
          </WidgetButton>
        ))}
      </ul>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
`

const WidgetButtonsList: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default WidgetButtonsList
