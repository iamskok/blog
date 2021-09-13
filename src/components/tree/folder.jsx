/** @jsx jsx */
import { useState, Children } from "react"
import { jsx, Box, Flex } from "theme-ui"
import { FcFolder as FolderIcon } from "react-icons/fc"
import { FcOpenedFolder as OpenedFolderIcon } from "react-icons/fc"

const Folder = ({ children, name, open = true }) => {
  const [isOpened, setIsOpened] = useState(open)

  const handleClick = () => setIsOpened(!isOpened)

  const folderStyles = {
    marginRight: 2,
    fontSize: theme => theme.sizes.treeIcon,
  }

  return (
    <Box>
      <Flex
        onClick={handleClick}
        sx={{
          alignItems: `center`,
          cursor: `pointer`,
        }}
      >
        {isOpened ? (
          <OpenedFolderIcon sx={folderStyles} />
        ) : (
          <FolderIcon sx={folderStyles} />
        )}
        {name}
      </Flex>
      <ul
        sx={{
          listStyle: `none`,
          marginY: 0,
          paddingLeft: 4,
        }}
      >
        {Children.map(children, child => (
          <li sx={{ display: isOpened ? `flex` : `none` }}>{child}</li>
        ))}
      </ul>
    </Box>
  )
}

export default Folder
