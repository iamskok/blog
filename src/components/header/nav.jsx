/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "../link"

const Nav = ({ links }) => (
  <ul
    sx={{
      padding: 0,
      margin: 0,
      listStyle: `none`,
      li: {
        "&:first-of-type": {
          marginRight: 2,
        },
        "&:last-of-type": {
          marginLeft: 2,
        },
      },
    }}
  >
    {links.map(({ relativeUrl, title }, key) => (
      <li
        key={key}
        sx={{
          display: `inline-block`,
        }}
      >
        <Link
          to={relativeUrl}
          sx={{
            color: `primary`,
            textDecoration: `none`,
            textTransform: `uppercase`,
            borderRadius: 1,
            transition: `link`,
            "&:hover": {
              color: `secondary`,
            },
          }}
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
)

export default Nav
