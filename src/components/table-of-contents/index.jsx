/** @jsx jsx */
import { useContext, useEffect } from "react"
import { jsx } from "theme-ui"
import { ScrollContext } from "../scroll-provider"
import Container from "./container"
import Details from "./details"
import renderItems from "./render-items"

const TableOfContents = ({ items, ids }) => {
  const [{ activeId }, dispatch] = useContext(ScrollContext)

  useEffect(() => {
    dispatch({
      type: `SHOW_TABLE_OF_CONTENTS`,
      payload: {
        isVisible: true,
      },
    })
  }, [dispatch])

  useEffect(() => {
    dispatch({
      type: `SET_HEADER_IDS`,
      payload: {
        ids,
      },
    })
  }, [dispatch, ids])

  return (
    <Container>
      <Details>{renderItems(items, activeId)}</Details>
    </Container>
  )
}

export default TableOfContents
