import React from "react"
import { Global } from "@emotion/react"
import { useThemeUI } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { isChrome } from "react-device-detect"
import fontFaces from "../../gatsby-plugin-theme-ui/font-faces"

const GlobalStyles = () => {
  const { theme } = useThemeUI()
  const tablet = theme.breakpoints[0]
  const accent = getColor(theme, `accent`)

  return (
    <Global
      styles={[
        ...fontFaces,
        {
          "*": {
            "&:focus": {
              outline: 0,
            },
            "&:focus-visible": {
              outline: 0,
              "&:not(#gatsby-focus-wrapper)": {
                boxShadow: `0 0 0 2px ${accent}`,
              },
            },
          },
          html: {
            fontSize: `125%`,
            // Prevent layout from moving when scrollbar appears
            // Chrome is the only browser that suports `overlay` (dusplays
            // scrollbar on top of content instead of taking up space)
            // In all other browsers always display scrollbars.
            overflowY: isChrome ? `overlay` : `scroll`,
            // Fix iOS font size issue in `CodeBlock` component
            // https://stackoverflow.com/a/22417120/3614631
            textSizeAdjust: `none`,
            [`@media (min-width: ${tablet})`]: {
              fontSize: `150%`,
            },
          },
          "html, body, #___gatsby, #gatsby-focus-wrapper": {
            height: `100%`,
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
