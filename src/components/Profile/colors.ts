/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */
import Color from 'color'

const whity1 = Color({ h: 232, s: 32, l: 90 })
const whity2 = Color({ h: whity1.hue(), s: 25, l: 92.5 })
const whity3 = Color({ h: whity1.hue(), s: 32, l: 92.5 })
const whity4 = Color({ h: whity1.hue(), s: 48, l: 97.5 })

const blacky1 = whity1.desaturate(0.25).darken(0.6)
const blacky2 = whity2.desaturate(0.25).darken(0.6)
const blacky3 = whity3.desaturate(0.25).darken(0.6)
const blacky4 = whity4.desaturate(0.5).darken(0.75)

const colors = {
  whity1: whity1.toString(),
  whity2: whity2.toString(),
  whity3: whity3.toString(),
  whity4: whity4.toString(),
  blacky1: blacky1.toString(),
  blacky2: blacky2.toString(),
  blacky3: blacky3.toString(),
  blacky4: blacky4.toString(),
}

export default colors
