/** @jsx jsx */
import { jsx, IconButton } from "theme-ui"
import SVG from "../svg"

const IconLink = ({
  children,
  href,
  ariaLabel,
  rel = `noopener noreferrer`,
  target = `_blank`,
  ...rest
}) => (
  <IconButton
    as="a"
    rel={Boolean(rel) ? rel : undefined}
    target={Boolean(target) ? target : undefined}
    href={href}
    aria-label={ariaLabel}
    sx={{
      color: `primary`,
      transition: `iconLink`,
      "&:hover": {
        color: `secondary`,
      },
    }}
    {...rest}
  >
    <SVG>{children}</SVG>
  </IconButton>
)

export default IconLink
