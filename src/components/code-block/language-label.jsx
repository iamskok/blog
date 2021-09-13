/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const LanguageLabel = ({ language, ...rest }) => (
  <Box
    sx={{
      paddingX: 3,
      fontSize: 1,
      backgroundColor: `muted`,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      userSelect: `none`,
      transition: `codeBlockLanguageLabel`,
    }}
    {...rest}
  >
    {language}
  </Box>
)

export default LanguageLabel
