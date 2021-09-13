/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Checkbox from "../../../../../src/components/checkbox"

const SchemaCheckbox = ({ label, onChange, isChecked }) => {
  return (
    <Flex
      as="label"
      sx={{
        alignItems: `center`,
      }}
    >
      <Checkbox
        onChange={onChange}
        defaultChecked={isChecked}
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
      <span>{label}</span>
    </Flex>
  )
}

const SchemaCheckboxList = [
  {
    label: `Address Schema`,
    type: `address`,
    isChecked: false,
  },
  {
    label: `Person Schema`,
    type: `person`,
    isChecked: false,
  },
  {
    label: `Organization Schema`,
    type: `organization`,
    isChecked: false,
  },
  {
    label: `Page Schema`,
    type: `page`,
    isChecked: true,
  },
  {
    label: `Breadcrumbs Schema`,
    type: `breadcrumbs`,
    isChecked: false,
  },
]

export { SchemaCheckbox, SchemaCheckboxList }
