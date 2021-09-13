/** @jsx jsx */
import { jsx } from "theme-ui"
import List from "./list"
import Link from "./link"

const renderItems = (items, activeHeader) => (
  <List>
    {items.map(({ url, title, items }) => {
      const isActive = activeHeader === url.replace(`#`, ``)

      return (
        <li key={url}>
          <Link title={title} url={url} isActive={isActive} />

          {items && renderItems(items, activeHeader)}
        </li>
      )
    })}
  </List>
)

export default renderItems
