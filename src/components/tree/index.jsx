/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import File from "./file"
import Folder from "./folder"

const Tree = ({ children }) => <Box sx={{ marginBottom: 4 }}>{children}</Box>

Tree.File = File
Tree.Folder = Folder

export default Tree
