/** @jsx jsx */
import { forwardRef } from "react"
import { Box, jsx } from "theme-ui"

// Currently Theme UI is not exposing SVG component
// and there is no way to use `variants` with `svg` elements
// https://github.com/system-ui/theme-ui/blob/develop/packages/components/src/SVG.js
const SVG = forwardRef(function Icon(props, ref) {
  return (
    <Box
      ref={ref}
      as="svg"
      variant="default"
      viewBox="0 0 24 24"
      {...props}
      __themeKey="icons"
      __css={{
        fill: `currentColor`,
      }}
    />
  )
})

export default SVG
