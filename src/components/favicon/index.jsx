/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { Fragment, useState, useEffect } from "react"
import { isSafari } from "react-device-detect"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/use-site-metadata"
import isBrowser from "../../utils/is-browser"
import {
  COLOR_MODE_EVENT_NAME,
  COLOR_MODE_STORAGE_KEY,
  FAVICON_LINK_ELEMENT_ID,
  FAVICON_CANVAS_FRAME_NUMBER,
  FAVICON_UPDATE_DELAY,
  FAVICON_FRAME_STORAGE_KEY,
} from "../../utils/constants"
import Canvas from "./canvas"

const Favicon = () => {
  const { favicons } = useSiteMetadata()
  const [href, setHref] = useState(() => getColorModeFavicon(favicons))
  const [intervalId, setIntervalId] = useState(null)
  const { theme } = useThemeUI()
  const color = getColor(theme, `primary`)

  useEffect(() => {
    // Remove all favicons set by `gatsby-plugin-manifest`
    Array.from(document.querySelectorAll(`link[rel="icon"]`))
      .filter(link => link.id !== FAVICON_LINK_ELEMENT_ID)
      .forEach(link => link.remove())

    const handleVisibilityChange = () => {
      if (document.visibilityState === `hidden`) {
        // Pull all favicon frames from local storage
        const frames = Array.from({ length: FAVICON_CANVAS_FRAME_NUMBER }).map(
          (_, i) =>
            window.localStorage.getItem(`${FAVICON_FRAME_STORAGE_KEY}-${i}`)
        )

        let i = 0
        const intervalId = setInterval(() => {
          // Use vanilla JS to update favicon, because `setState` is too slow for inactive tab
          const href = frames[i % FAVICON_CANVAS_FRAME_NUMBER]
          document.getElementById(FAVICON_LINK_ELEMENT_ID).href = href
          i++
        }, FAVICON_UPDATE_DELAY)
        setIntervalId(intervalId)
      }

      if (document.visibilityState === `visible`) {
        clearInterval(intervalId)
        setIntervalId(null)
        const href = getColorModeFavicon(favicons)
        // Add hash to trick React optimization (from React standpoint we never changed `href`)
        setHref(`${href}#${Date.now()}`)
      }
    }

    const handleColorModeChange = ({ colorMode }) =>
      setHref(favicons[colorMode])

    // Capture custom event emited by ColorModeButton component
    window.addEventListener(COLOR_MODE_EVENT_NAME, handleColorModeChange)
    document.addEventListener(`visibilitychange`, handleVisibilityChange)

    return () => {
      window.removeEventListener(COLOR_MODE_EVENT_NAME, handleColorModeChange)
      document.removeEventListener(`visibilitychange`, handleVisibilityChange)
    }
  }, [favicons, intervalId])

  return (
    <Fragment>
      <Canvas />
      <Helmet>
        <link
          rel={isSafari ? `mask-icon` : `icon`}
          id={FAVICON_LINK_ELEMENT_ID}
          href={href}
          {...(isSafari && { color })}
        />
      </Helmet>
    </Fragment>
  )
}

const getColorModeFavicon = favicons => {
  const colorMode =
    isBrowser() && window.localStorage.getItem(COLOR_MODE_STORAGE_KEY)
  return favicons[colorMode] || favicons.default
}

export default Favicon
