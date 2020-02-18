import { useState } from 'react'

import { createContainer } from 'unstated-next'

export const ScrollContainer = createContainer(() => {
  const [scrollY, setScrollY] = useState<number>(0)
  return { scrollY, setScrollY }
})

export default {}
