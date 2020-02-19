import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import colors from '../../../colors'
import socials from '../../../data/accounts'
import brandcolors from '../../../data/brandcolors.json'
import { ScrollContainer } from '../../../store'
import SocialLink from './SocialLink'
import Color from 'color'
import { useTranslation } from 'react-i18next'
import { useWindowSize } from 'react-use'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const columns = Math.ceil(Math.sqrt(Object.values(socials).length))

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  const scrollContainer = ScrollContainer.useContainer()
  const { height: windowHeight } = useWindowSize()
  const ref = React.createRef<HTMLDivElement>()
  const [anime, setAnime] = useState(false)

  useEffect(() => {
    if (
      ref.current.offsetTop + ref.current.offsetHeight <=
      windowHeight + scrollContainer.scrollY
    )
      setAnime(true)
  }, [ref, scrollContainer.scrollY, windowHeight])
  return (
    <section className={className} ref={ref}>
      <ul className="links">
        {Object.entries(socials)
          .sort(
            ({ 0: a }, { 0: b }) =>
              ((Color(brandcolors[a]).hue() + 30) % 360) -
              ((Color(brandcolors[b]).hue() + 30) % 360)
          )
          .map(({ 0: key, 1: { icon, href } }, i, a) => (
            <SocialLink
              key={key}
              color={brandcolors[key]}
              href={href}
              row={(i % columns) / (columns - 1)}
              line={
                Math.floor(i / columns) / (Math.floor(a.length / columns) - 1)
              }
              animated={anime}
            >
              {icon}
            </SocialLink>
          ))}
      </ul>
      <h2>{t('profile.accounts.title')}</h2>
    </section>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  background-color: ${colors.whity3};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 0;
  > .links {
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: 24px;
  }
  > h2 {
    color: ${colors.blacky3};
    margin-top: 32px;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 0.25em;
  }
`

const LinksSection: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default LinksSection
