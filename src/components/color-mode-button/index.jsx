/** @jsx jsx */
import { useState, useContext, useEffect, Fragment } from "react"
import { jsx, IconButton, useColorMode, useThemeUI } from "theme-ui"
import { Global } from "@emotion/react"
import useSound from "use-sound"
import { motion } from "framer-motion"
import { COLOR_MODE_EVENT_NAME } from "../../utils/constants"
import switchOnSound from "../../assets/sounds/switch-on.mp3"
import { SoundContext } from "../sound-provider"
import SVG from "../svg"

const ColorModeButton = props => {
  const [sound] = useContext(SoundContext)
  const [playSwitchOn] = useSound(switchOnSound)
  const [iconRotation, setIconRotation] = useState(0)
  const [colorMode, setColorMode] = useColorMode()
  const [isInTransition, setIsInTransition] = useState(false)
  const {
    theme: {
      transitionDurations: [duration],
    },
  } = useThemeUI()

  useEffect(() => {
    if (isInTransition) {
      setIsInTransition(false)
    }
  }, [isInTransition])

  const clickHandler = () => {
    const iconAngle = iconRotation === 0 ? 180 : 0
    const nextColorMode = `light` === colorMode ? `dark` : `light`

    setIconRotation(iconAngle)
    setIsInTransition(true)
    setColorMode(nextColorMode)
    dispatchColorModeEvent(nextColorMode)

    if (sound) {
      playSwitchOn()
    }
  }

  return (
    <Fragment>
      {isInTransition && <TansitionNuke />}
      <IconButton
        aria-label="Change color mode"
        onClick={clickHandler}
        sx={{
          color: `primary`,
          transition: `colorModeButton`,
          "&:hover": {
            color: `secondary`,
          },
        }}
        {...props}
      >
        <AnimatedSVG
          as={motion.svg}
          viewBox="0 0 32 32"
          transition={{ duration }}
          animate={{
            rotate: iconRotation,
            originX: `center`,
            originY: `center`,
          }}
        >
          <circle
            sx={{
              cx: 16,
              cy: 16,
              r: 14,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: 4,
            }}
          />
          <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
        </AnimatedSVG>
      </IconButton>
    </Fragment>
  )
}

// Disable all transitions on color mode change
const TansitionNuke = () => (
  <Global styles={{ "*": { transition: `none !important` } }} />
)

// Emit custom event that will be captured by Favicon component
const dispatchColorModeEvent = theme => {
  const colorModeEvent = new Event(COLOR_MODE_EVENT_NAME, {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  Object.defineProperty(colorModeEvent, `colorMode`, {
    value: theme,
  })
  document.dispatchEvent(colorModeEvent)
}

const AnimatedSVG = motion(SVG)

export default ColorModeButton
