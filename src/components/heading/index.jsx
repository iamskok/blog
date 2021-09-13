/** @jsx jsx */
import { jsx } from "theme-ui"
import Icon from "./icon"

/* eslint-disable react/display-name */
const Heading =
  Tag =>
  ({ id, children, ...rest }) => {
    if (!id) {
      return <Tag {...rest}>{children}</Tag>
    }

    return (
      <Tag {...rest}>
        <Icon
          id={id}
          target={null}
          rel={null}
          href={`#${id}`}
          ariaLabel={children}
        />
        {children}
      </Tag>
    )
  }

export default Heading
