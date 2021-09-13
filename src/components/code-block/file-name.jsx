/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

const FileName = ({ fileName, ...rest }) => (
  <Flex
    sx={{
      flex: 1,
      justifyContent: `center`,
      width: `100%`,
      fontSize: 1,
      fontWeight: `bold`,
      textAlign: `center`,
      backgroundColor: `muted`,
    }}
    {...rest}
  >
    {fileName}
  </Flex>
)

export default FileName
