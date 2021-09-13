/** @jsx jsx */
import { jsx, Flex, Themed } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import GlitchText from "../components/glitch-text"

const Home = ({
  data: {
    file: { childImageSharp: seoImages },
  },
}) => {
  const {
    pages: {
      home: { id, title, description, imageAlt, breadcrumb, type },
    },
  } = useSiteMetadata()

  return (
    <Layout
      pageId={id}
      title={title}
      description={description}
      images={{ ...seoImages }}
      imageAlt={imageAlt}
      breadcrumb={breadcrumb}
      type={type}
    >
      <Flex
        sx={{
          flex: 1,
          flexDirection: `column`,
          justifyContent: `center`,
          minHeight: `100%`,
        }}
      >
        <Themed.h1
          sx={{
            fontSize: 9,
            letterSpacing: 2,
            margin: 0,
          }}
        >
          Hi! My name is Vladimir.
        </Themed.h1>

        <Themed.h2
          sx={{
            color: `secondary`,
            margin: 0,
            fontSize: 6,
            wordSpacing: 4,
          }}
        >
          I move
          {` `}
          <GlitchText
            text="pixels"
            duration="5000ms"
            keyframesNum={20}
            limit={0.2}
            colors={[`red`, `green`, `blue`]}
            position={[-5, 5]}
            shadow={[-2, 2]}
            backgroundColor="background"
          >
            pixels
          </GlitchText>
          {` `}
          on the web.
        </Themed.h2>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query ($image: String) {
    file(absolutePath: { eq: $image }) {
      childImageSharp {
        ...ImageUrlFields
      }
    }
  }
`

export default Home
