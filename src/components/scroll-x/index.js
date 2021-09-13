/* @jsx jsx */
import { jsx, Box } from "theme-ui"

const ScrollX = ({ children, ...rest }) => (
  <Box
    {...rest}
    sx={{
      overflow: `auto`,
      scrollbarColor: ({ colors: { primary, gray } }) => `${primary} ${gray}`,
      scrollbarWidth: `thin`,
      "&::-webkit-scrollbar": {
        height: `codeBlockScrollBar`,
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: `gray`,
        borderRadius: 2,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: `primary`,
        borderRadius: 2,
      },
    }}
  >
    {children}
  </Box>
)

export default ScrollX
