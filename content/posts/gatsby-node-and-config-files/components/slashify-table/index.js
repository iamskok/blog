/* @jsx jsx */
import { Themed, jsx } from "theme-ui"
import ScrollX from "../../../../../src/components/scroll-x"

const SlashifyTable = () => (
  <ScrollX sx={{ marginBottom: 4 }}>
    <Themed.table>
      <thead>
        <Themed.tr>
          <Themed.th>Description</Themed.th>
          <Themed.th>Example</Themed.th>
          <Themed.th>Result</Themed.th>
        </Themed.tr>
      </thead>
      <tbody>
        <Themed.tr>
          <Themed.td>/</Themed.td>
          <Themed.td>
            <Themed.inlineCode>slashify(`/`)</Themed.inlineCode>
          </Themed.td>
          <Themed.td>/</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>Pathname</Themed.td>
          <Themed.td>
            <Themed.inlineCode>slashify(`blog`)</Themed.inlineCode>
          </Themed.td>
          <Themed.td>/blog/</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>Pathname + pathname</Themed.td>
          <Themed.td>
            <Themed.inlineCode>slashify(`blog`, `article`)</Themed.inlineCode>
          </Themed.td>
          <Themed.td>/blog/article/</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>URL + file pathname</Themed.td>
          <Themed.td>
            <Themed.inlineCode>
              slashify(`https://gatsby-seo.netlify.app`, `cover.jpg`)
            </Themed.inlineCode>
          </Themed.td>
          <Themed.td>https://gatsby-seo.netlify.app/cover.jpg</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>URL + pathname</Themed.td>
          <Themed.td>
            <Themed.inlineCode>
              slashify(`https://gatsby-seo.netlify.app`, `blog`)
            </Themed.inlineCode>
          </Themed.td>
          <Themed.td>https://gatsby-seo.netlify.app/blog/</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>URL + pathname + pathname</Themed.td>
          <Themed.td>
            <Themed.inlineCode>
              slashify(`https://gatsby-seo.netlify.app`, `blog`, `article`)
            </Themed.inlineCode>
          </Themed.td>
          <Themed.td>https://gatsby-seo.netlify.app/blog/article/</Themed.td>
        </Themed.tr>
      </tbody>
    </Themed.table>
  </ScrollX>
)

export default SlashifyTable
