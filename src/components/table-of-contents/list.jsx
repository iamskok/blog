/** @jsx jsx */
import { jsx } from "theme-ui"

const List = ({ children }) => (
  <ol
    sx={{
      listStyle: `none`,
      margin: 0,
      paddingLeft: 0,
      "& ol": {
        paddingLeft: 3,
      },
    }}
  >
    {children}
  </ol>
)

export default List
