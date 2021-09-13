/** @jsx jsx */
import { jsx } from "theme-ui"
import CodeBlock from "../components/code-block"
import Heading from "../components/heading"
import Link from "../components/link"

/* eslint react/display-name: 0 */
const components = {
  pre: ({ children }) => children,
  code: props => <CodeBlock {...props} />,
  a: props => <Link {...props} />,
  h2: Heading(`h2`),
  h3: Heading(`h3`),
  h4: Heading(`h4`),
  h5: Heading(`h5`),
  h6: Heading(`h6`),
}

export default components
