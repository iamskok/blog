/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const Container = ({ children }) => (
  <Box
    as="nav"
    sx={{
      position: [`relative`, `relative`, `fixed`],
      top: [0, 0, 6],
      right: [0, 0, 4],
      width: `tableOfContents`,
      marginBottom: 4,
    }}
  >
    {children}
  </Box>
)

export default Container
