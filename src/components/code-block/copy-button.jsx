/** @jsx jsx */
import { useState, useContext } from "react"
import { jsx, IconButton, useThemeUI } from "theme-ui"
import { motion, useMotionValue, useTransform } from "framer-motion"
import useSound from "use-sound"
import { CODE_BLOCK_COPY_CLICK_TIMEOUT } from "../../utils/constants"
import biteSound from "../../assets/sounds/bite.mp3"
import { SoundContext } from "../sound-provider"
import SVG from "../svg"
import copyToClipboard from "./copy-to-clipboard"

const highlightCommentRegex = new RegExp(
  `\/\/ highlight-((start|end)\n|line)`,
  `g`
)

const CopyButton = ({ content, ...rest }) => {
  const [isClicked, setIsClicked] = useState(false)

  const [sound] = useContext(SoundContext)
  const [play] = useSound(biteSound)

  const {
    theme: {
      transitionDurations: [, duration],
    },
  } = useThemeUI()
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0, 0.5], [0, 1])

  const ariaLabelVerb = isClicked ? `Copied` : `Copy`
  const ariaLabel = `${ariaLabelVerb} to clipboard`

  const handleClick = () => {
    setIsClicked(true)
    copyToClipboard(content.replace(highlightCommentRegex, ``))
    if (sound) {
      play()
    }
    setTimeout(() => {
      setIsClicked(false)
    }, CODE_BLOCK_COPY_CLICK_TIMEOUT)
  }

  const clipboardIconVariants = {
    clicked: { opacity: 0 },
    unclicked: { opacity: 1 },
  }
  const checkmarkIconVariants = {
    clicked: { pathLength: 1 },
    unclicked: { pathLength: 0 },
  }

  return (
    <IconButton
      onClick={handleClick}
      aria-label={ariaLabel}
      sx={{ transition: `codeBlockCopyButton` }}
      {...rest}
    >
      <SVG sx={{ fill: `none` }}>
        {[
          `M20.8511 9.46338H11.8511C10.7465 9.46338 9.85107 10.3588 9.85107 11.4634V20.4634C9.85107 21.5679 10.7465 22.4634 11.8511 22.4634H20.8511C21.9556 22.4634 22.8511 21.5679 22.8511 20.4634V11.4634C22.8511 10.3588 21.9556 9.46338 20.8511 9.46338Z`,
          `M5.85107 15.4634H4.85107C4.32064 15.4634 3.81193 15.2527 3.43686 14.8776C3.06179 14.5025 2.85107 13.9938 2.85107 13.4634V4.46338C2.85107 3.93295 3.06179 3.42424 3.43686 3.04917C3.81193 2.67409 4.32064 2.46338 4.85107 2.46338H13.8511C14.3815 2.46338 14.8902 2.67409 15.2653 3.04917C15.6404 3.42424 15.8511 3.93295 15.8511 4.46338V5.46338`,
        ].map((d, key) => (
          <motion.path
            d={d}
            key={key}
            sx={{
              stroke: `primary`,
              strokeWidth: 2,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }}
            animate={isClicked ? `clicked` : `unclicked`}
            variants={clipboardIconVariants}
            transition={{ duration }}
          />
        ))}
        <motion.path
          d="M20 6L9 17L4 12"
          sx={{
            stroke: `secondary`,
            strokeWidth: 2,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }}
          animate={isClicked ? `clicked` : `unclicked`}
          variants={checkmarkIconVariants}
          transition={{ duration }}
          style={{
            pathLength,
            opacity,
          }}
        />
      </SVG>
    </IconButton>
  )
}

export default CopyButton
