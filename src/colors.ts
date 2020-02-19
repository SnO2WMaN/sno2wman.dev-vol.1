/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */
import Color from 'color'

const baseHue = 222

const bg = Color({ h: baseHue, s: 32, l: 92 })

const whity1 = Color({ h: baseHue, s: 32, l: 90 })
const whity2 = Color({ h: whity1.hue(), s: 25, l: 92.5 })
const whity3 = Color({ h: whity1.hue(), s: 32, l: 95 })
const whity4 = Color({ h: whity1.hue(), s: 48, l: 97.5 })
const whity5 = Color({ h: whity1.hue(), s: 24, l: 95 })

const blacky1 = whity1.desaturate(0.25).darken(0.6)
const blacky2 = whity2.desaturate(0.25).darken(0.6)
const blacky3 = whity3.desaturate(0.25).darken(0.6)
const blacky4 = whity4.desaturate(0.5).darken(0.75)

const grey1 = Color({ h: whity1.hue(), s: 22, l: 70 })

const accent1 = Color({ h: whity1.hue(), s: 75, l: 58 })

const colors = {
  bg: bg.toString(),
  whity1: whity1.toString(),
  whity2: whity2.toString(),
  whity3: whity3.toString(),
  whity4: whity4.toString(),
  whity5: whity5.toString(),
  blacky1: blacky1.toString(),
  blacky2: blacky2.toString(),
  blacky3: blacky3.toString(),
  blacky4: blacky4.toString(),
  grey1: grey1.toString(),
  accent1: accent1.toString(),
}

export default colors
