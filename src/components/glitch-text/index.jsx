/** @jsx jsx */
import { jsx } from "theme-ui"
import { keyframes } from "@emotion/react"
import getRandomInt from "../../utils/get-random-int"

const maxClipPath = limit => (1 / (2 - (4 * (1 - limit)) ** 0.25)) * 100

const randClipPath = (maxClipPath, limit) =>
  getRandomInt(1, maxClipPath(limit)) + `%`

const randTextShadow = (minShadow, maxShadow) => {
  const shadow = getRandomInt(minShadow, maxShadow)

  return shadow === 0 ? randPosition() : shadow + `px`
}

const randColor = colors => colors[getRandomInt(0, colors.length - 1)]

const randPosition = (minPos, maxPos) => {
  const pos = getRandomInt(minPos, maxPos)

  return pos === 0 ? randPosition() : pos + `px`
}

const clipPath = (maxClipPath, limit) => `inset(
  ${randClipPath(maxClipPath, limit)} 0
  ${randClipPath(maxClipPath, limit)} 0
)`

const textShadow = (minShadow, maxShadow, colors) => `
  ${randTextShadow(minShadow, maxShadow)} 0 ${randColor(colors)}
`

const keys = keyframesNum =>
  Array.from({ length: keyframesNum + 1 }).map(
    (_, i) => i * (100 / (keyframesNum + 1)) + `%`
  )

const getAnimation = (
  keyframesNum,
  limit,
  minShadow,
  maxShadow,
  minPos,
  maxPos,
  colors
) => {
  const animation = {}

  const animationKeys = keys(keyframesNum)

  animationKeys.forEach(key => {
    animation[key] = {
      clipPath: clipPath(maxClipPath, limit),
      textShadow: textShadow(minShadow, maxShadow, colors),
      left: randPosition(minPos, maxPos),
    }
  })

  return keyframes(animation).toString()
}

const GlitchText = ({
  children,
  text,
  duration = `5000ms`,
  limit = 0.5,
  keyframesNum = 20,
  shadow = [-2, 2],
  position = [-5, 5],
  colors = [`red`, `green`, `blue`],
  backgroundColor = `#fff`,
  ...rest
}) => {
  const glitch1 = getAnimation(
    keyframesNum,
    limit,
    shadow[0],
    shadow[1],
    position[0],
    position[1],
    colors
  )

  const glitch2 = getAnimation(
    keyframesNum,
    limit,
    shadow[0],
    shadow[1],
    position[0],
    position[1],
    colors
  )

  return (
    <span
      sx={{
        "@media not screen and (prefers-reduced-motion: reduce)": {
          position: `relative`,
          display: `inline-block`,
          "&::before, &::after": {
            content: `"${text}"`,
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
          },
          "&::before": {
            backgroundColor,
            animationName: glitch1,
            animationTimingFunction: `linear`,
            animationDuration: duration,
            animationIterationCount: `infinite`,
          },
          "&::after": {
            backgroundColor,
            animationName: glitch2,
            animationTimingFunction: `linear`,
            animationDuration: duration,
            animationIterationCount: `infinite`,
          },
        },
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

export default GlitchText
