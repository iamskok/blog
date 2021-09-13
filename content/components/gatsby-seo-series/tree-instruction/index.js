/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

const TreeInstruction = () => (
  <Themed.p
    as="span"
    sx={{
      fontSize: `14px`,
      color: `secondary`,
    }}
  >
    Click on the folder to expand/collapse
  </Themed.p>
)

export default TreeInstruction
