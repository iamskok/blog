/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

const Link = ({ url, title, isActive }) => (
  <Themed.a
    href={url}
    sx={{
      display: `flex`,
      fontSize: 1,
      fontFamily: `code`,
      color: isActive ? `primary` : `text`,
      borderRadius: 1,
      transition: `tableOfContentsLink`,
    }}
  >
    {title}
  </Themed.a>
)

export default Link
