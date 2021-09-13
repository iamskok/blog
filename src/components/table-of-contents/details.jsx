/** @jsx jsx */
import { jsx } from "theme-ui"

const Details = ({ children }) => (
  <details open>
    <summary
      sx={{
        cursor: `pointer`,
        borderRadius: 1,
        transition: `tableOfContentsSummary`,
        "&:hover": {
          color: `secondary`,
        },
      }}
    >
      Table of Contents
    </summary>

    {children}
  </details>
)

export default Details
