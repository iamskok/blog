/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Link as InternalLink } from "gatsby"
import { Link as OutboundLink } from "theme-ui"
import isAbsoluteURL from "is-absolute-url"

const Link = ({ href, to, ...rest }) => {
  const {
    theme: {
      styles: { a: link },
    },
  } = useThemeUI()

  const styles = {
    ...link,
    transition: `link`,
    borderRadius: 1,
  }

  const url = href || to
  const isExternal = isAbsoluteURL(url)

  return isExternal ? (
    <OutboundLink
      href={url}
      sx={styles}
      rel="noopener"
      target="_blank"
      {...rest}
    />
  ) : (
    <InternalLink to={url} sx={styles} {...rest} />
  )
}

export default Link
