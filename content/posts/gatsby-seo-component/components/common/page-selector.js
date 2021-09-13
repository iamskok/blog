/** @jsx jsx */
import { jsx, Label, Select as ThemeUiSelect } from "theme-ui"
import { PAGE_LABELS } from "./constants"

const Select = ({ onChange }) => {
  return (
    <Label
      sx={{
        display: `flex`,
        flexDirection: `column`,
        marginBottom: 4,
      }}
    >
      <span>Select Page Template:</span>
      <ThemeUiSelect onChange={onChange}>
        {PAGE_LABELS.map(label => (
          <option key={label} value={label.toLowerCase()}>
            {label}
          </option>
        ))}
      </ThemeUiSelect>
    </Label>
  )
}

export default Select
