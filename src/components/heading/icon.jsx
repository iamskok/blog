/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useBreakpointIndex } from "@theme-ui/match-media"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import IconLink from "../icon-link"

const Icon = ({ id, ariaLabel, threshold = 0.1, triggerOnce = true }) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })

  const {
    theme: {
      transitionDurations: [, , , duration],
    },
  } = useThemeUI()

  const iconVariants = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration },
    },
  }

  const isMobile = useBreakpointIndex() === 0

  return (
    <span ref={ref} id={id}>
      {!isMobile && (
        <IconLink
          target={false}
          rel={false}
          href={`#${id}`}
          aria-label={ariaLabel}
          sx={{
            scrollMarginTop: 3,
            color: `primary`,
            "&:hover": {
              color: `secondary`,
            },
          }}
        >
          <motion.path
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            sx={{
              strokeWidth: 2,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              fill: `none`,
              stroke: `currentColor`,
            }}
            animate={inView ? `visible` : `initial`}
            variants={iconVariants}
          />
        </IconLink>
      )}
    </span>
  )
}

export default Icon
