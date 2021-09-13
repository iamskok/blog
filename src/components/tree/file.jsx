/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import icons from "./icons"

const EXTENSION_REGEX = new RegExp(`(?:\.([^.]+))?$`, `i`)
const GATSBY_REGEX = new RegExp(`gatsby-(node|ssr|browser|config)\.js`, `i`)
const IMAGE_REGEX = new RegExp(`\.(gif|jpe?g|png|webp)$`, `i`)
const NPM_STRING = `package.json`

const getExtension = name => EXTENSION_REGEX.exec(name)[1]

const getLogo = name => {
  if (name.match(GATSBY_REGEX)) {
    return `gatsby`
  }

  if (name.match(IMAGE_REGEX)) {
    return `image`
  }

  if (name === NPM_STRING) {
    return `npm`
  }

  return getExtension(name)
}

const File = ({ name }) => {
  const Logo = icons[getLogo(name)] || icons[`file`]

  return (
    <Flex sx={{ alignItems: `center` }}>
      <Logo sx={{ marginRight: 2 }} />
      {name}
    </Flex>
  )
}

export default File
