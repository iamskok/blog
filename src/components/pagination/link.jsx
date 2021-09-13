/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import InternalLink from "../link"

const Link = ({ url, title, text, ...rest }) => (
  <InternalLink
    to={url}
    sx={{
      display: `flex`,
      flex: 1,
      flexDirection: `column`,
      transition: `paginationLink`,
    }}
    {...rest}
  >
    <Box
      sx={{
        variant: `text.code`,
        fontSize: 1,
      }}
    >
      {text}
    </Box>
    <Box
      sx={{
        variant: `text.body`,
        fontSize: 1,
        fontWeight: `body`,
      }}
    >
      {title}
    </Box>
  </InternalLink>
)

export default Link
