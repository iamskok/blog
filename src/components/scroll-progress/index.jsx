/** @jsx jsx */
import { useState, useEffect, useContext } from "react"
import { jsx, Progress } from "theme-ui"
import { ScrollContext } from "../scroll-provider"

const ScrollProgress = () => {
  const [{ scrollProgress }] = useContext(ScrollContext)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(Number(scrollProgress > 0))
  }, [scrollProgress])

  return (
    <Progress
      max={1}
      value={scrollProgress}
      sx={{
        position: `fixed`,
        left: 0,
        zIndex: `progress`,
        borderRadius: 0,
        opacity,
        pointerEvents: `none`,
        transition: `progress`,
        "&::-webkit-progress-bar": {
          transition: `progressBar`,
        },
        "&::-webkit-progress-value": {
          transition: `progressValue`,
        },
        "&::-moz-progress-bar": {
          transition: `progressBar`,
        },
      }}
    />
  )
}

export default ScrollProgress
