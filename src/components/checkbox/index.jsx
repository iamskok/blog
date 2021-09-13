/** @jsx jsx */
import { jsx, Checkbox as ThemeUiCheckbox } from "theme-ui"

const Checkbox = props => (
  <ThemeUiCheckbox
    {...props}
    sx={{
      "input:focus ~ &": {
        backgroundColor: `transparent`,
      },
      "input:focus-visible ~ &": {
        backgroundColor: `highlight`,
      },
      path: {
        color: `primary`,
      },
    }}
  />
)

export default Checkbox
