/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import Link from "./link"

const Pagination = ({ previous, next }) => (
  <Flex
    sx={{
      marginBottom: 4,
      columnGap: [2, 4],
    }}
  >
    {previous && (
      <Link url={previous.url} title={previous.title} text="Previous" />
    )}
    <div sx={{ marginX: `auto` }} />
    {next && (
      <Link
        sx={{ textAlign: `right` }}
        url={next.url}
        title={next.title}
        text="Next"
      />
    )}
  </Flex>
)

export default Pagination
