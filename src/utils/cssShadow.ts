import Color from 'color'

type Shadow = {
  x: number
  y: number
  blur?: number
  spread?: number
  inset?: boolean
  color: Color | string
}

function addUnit(n: number) {
  return n === 0 ? String(0) : `${n}px`
}

function parseShadow(shadow: Shadow) {
  return [
    addUnit(shadow.x),
    addUnit(shadow.y),
    shadow.blur && addUnit(shadow.blur),
    shadow.spread && addUnit(shadow.spread),
    shadow.inset && `inset`,
    shadow.color.toString(),
  ]
    .join(' ')
    .trim()
}

function parse(shadows: Shadow | Shadow[]) {
  if (Array.isArray(shadows)) {
    return shadows
      .reduce((pre, current) => `${parseShadow(current)},${pre}`, '')
      .slice(0, -1)
  }
  return parse([shadows])
}

export default parse
