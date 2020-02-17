import React from 'react'
import styled from 'styled-components'

import skillset from '../../../data/skillset'
import Category from './Category'
import { useTranslation } from 'react-i18next'

type ContainerProps = { className?: string }
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <section className={className}>
      <h2>{t('profile.skillset.title')}</h2>
      <div className="skillset">
        {Object.entries(skillset).map(([category, skills], i, array) => (
          <Category
            category={category}
            skills={skills}
            key={category}
            delay={
              20 *
              array.slice(0, i).reduce((p, c) => p + c.length + 1, 0) ** 1.1
            }
          />
        ))}
      </div>
    </section>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  background-color: hsl(225, 12.5%, 85%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 64px;
  > h2 {
    margin-bottom: 32px;
    color: hsl(225, 12.5%, 45%);
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 0.25em;
  }
  .skillset {
    width: 100%;
    > :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`

const SkillsetSection: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default SkillsetSection
