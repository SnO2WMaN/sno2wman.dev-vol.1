import React from 'react'
import styled from 'styled-components'

import AboutMeSection from '../components/Profile/AboutMe'
import DonateSection from '../components/Profile/Donate'
import LinksSection from '../components/Profile/Links'
import SkillsetSection from '../components/Profile/Skillset'

type ContainerProps = { className?: string }
type Props = { scrollY: number } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <AboutMeSection />
      <LinksSection />
      <SkillsetSection />
      <DonateSection />
    </div>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
