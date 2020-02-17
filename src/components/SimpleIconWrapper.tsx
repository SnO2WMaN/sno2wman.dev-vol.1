import React from 'react'

import parse from 'html-react-parser'
import SimpleIcons from 'simple-icons'

type ContainerProps = { className?: string; name: string }
type Props = {} & ContainerProps

const SimpleIcon: React.FC<Props> = ({ className, name }) => {
  if (!Object.keys(SimpleIcons).includes(name))
    throw new Error(`'${name}' is not included in simple-icons`)
  const { svg } = SimpleIcons[name]
  return <>{parse(svg)}</>
}

export default SimpleIcon
