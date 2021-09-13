/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import useSiteMetadata from "../../hooks/use-site-metadata"
import Nav from "./nav"
import SideNav from "./side-nav"
import slashify from "../../utils/slashify"

const Header = () => {
  const {
    pages: {
      home: { id: homeTitle, pathName: homePathName },
      blog: { id: blogTitle, pathName: blogPathName },
    },
  } = useSiteMetadata()

  const navLinks = [
    {
      title: homeTitle,
      relativeUrl: slashify(homePathName),
    },
    {
      title: blogTitle,
      relativeUrl: slashify(blogPathName),
    },
  ]

  return (
    <Flex
      as="header"
      id="header"
      sx={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        paddingY: 1,
        marginBottom: 5,
      }}
    >
      <Nav links={navLinks} />
      <SideNav />
    </Flex>
  )
}

export default Header
