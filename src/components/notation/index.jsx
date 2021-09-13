/** @jsx jsx */
import { useState, useContext, useEffect } from "react"
import { jsx, useThemeUI } from "theme-ui"
import { RoughNotation } from "react-rough-notation"
import { useInView } from "react-intersection-observer"
import { NotationContext } from "../notation-provider"

const Notation = ({
  threshold = 0.1,
  triggerOnce = true,
  type = `underline`,
  multiline = false,
  iterations = 3,
  strokeWidth = 1,
  padding = [5, 5, 5, 5],
  brackets = null,
  animate = true,
  animationDelay = 200,
  animationDuration = 1200,
  color = null,
  ...rest
}) => {
  // `NotationContext` includes `pageHeight` property that observes page
  // height changes. Its update triggers component rerender that fixes
  // `RoughNotation` positioning when the layout is shifted.
  const { isFontListLoaded } = useContext(NotationContext)
  const [show, setShow] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })

  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()

  useEffect(() => {
    if (isFontListLoaded && inView) {
      setShow(true)
    }
  }, [inView, isFontListLoaded])

  return (
    <span ref={ref}>
      <RoughNotation
        type={type}
        multiline={multiline}
        iterations={iterations}
        strokeWidth={strokeWidth}
        padding={padding}
        brackets={brackets}
        animate={animate}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        color={color ? color : primary}
        show={show}
        {...rest}
      />
    </span>
  )
}

/*
 * Notation Presets:
 *
 * - Underline
 * - Box
 * - Circle
 * - Highlight
 * - StrikeThrough
 * - CrossedOff
 * - BracketX
 * - BracketY
 * - BracketLeft
 * - BracketRight
 */
const Underline = props => <Notation {...props} multiline={true} />

const Box = props => <Notation {...props} type="box" />

const Circle = props => <Notation {...props} type="circle" />

const Highlight = props => (
  <Notation {...props} type="highlight" multiline={true} />
)

const StrikeThrough = props => (
  <Notation {...props} type="strike-through" multiline={true} strokeWidth={2} />
)

const CrossedOff = props => <Notation {...props} type="crossed-off" />

const BracketX = props => (
  <Notation
    {...props}
    type="bracket"
    brackets={[`left`, `right`]}
    strokeWidth={3}
  />
)

const BracketY = props => (
  <Notation
    {...props}
    type="bracket"
    brackets={[`top`, `bottom`]}
    strokeWidth={3}
  />
)

const BracketLeft = props => (
  <Notation {...props} type="bracket" brackets={`left`} strokeWidth={3} />
)

const BracketRight = props => (
  <Notation {...props} type="bracket" brackets={`right`} strokeWidth={3} />
)

export {
  Notation,
  Underline,
  Box,
  Circle,
  Highlight,
  StrikeThrough,
  CrossedOff,
  BracketX,
  BracketY,
  BracketLeft,
  BracketRight,
}
