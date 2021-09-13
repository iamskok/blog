import prism from "./prism"

export default {
  root: {
    margin: 0,
    fontFamily: `body`,
    lineHeight: 1,
    fontFeatureSettings: `'kern', 'calt', 'ss01', 'ss02', 'ss03'`,
    minHeight: `100%`,
  },
  p: {
    margin: 0,
    marginBottom: 4,
    "& > img": {
      marginBottom: 0,
    },
  },
  a: {
    color: `primary`,
    // Disable iOS tap highlight
    WebkitTapHighlightColor: `transparent`,
    // Disable iOS link preview
    WebkitTouchCallout: `none`,
    textDecoration: `none`,
    "&:hover": {
      color: `secondary`,
    },
  },
  h1: {
    variant: `text.display`,
    fontSize: 5,
    marginTop: 0,
    marginBottom: 5,
  },
  h2: {
    variant: `text.heading`,
    fontSize: 4,
  },
  h3: {
    variant: `text.heading`,
    fontSize: 3,
  },
  h4: {
    variant: `text.heading`,
    fontSize: 2,
  },
  h5: {
    variant: `text.heading`,
    fontSize: 1,
  },
  h6: {
    variant: `text.heading`,
    fontSize: 0,
  },
  img: {
    marginBottom: 4,
    maxWidth: `100%`,
    height: `auto`,
  },
  pre: {
    variant: `text.code`,
    color: `secondary`,
    backgroundColor: `muted`,
  },
  code: {
    variant: `text.code`,
    ...prism,
  },
  inlineCode: {
    variant: `text.code`,
    color: `secondary`,
    backgroundColor: `muted`,
  },
  ol: {
    marginTop: 0,
    marginBottom: 4,
    paddingLeft: 4,
  },
  ul: {
    marginTop: 0,
    marginBottom: 4,
    paddingLeft: 4,
    listStyleType: `square`,
  },
  li: {
    "& > ul, & > ol": {
      marginBottom: 0,
    },
  },
  blockquote: {
    paddingLeft: 4,
    marginTop: 0,
    marginBottom: 4,
    marginX: 4,
    borderWidth: 0,
    borderLeftWidth: 3,
    borderColor: `primary`,
    borderStyle: `solid`,
    display: `flex`,
    flexDirection: `column`,
    "& > p": {
      marginBottom: 0,
    },
    "& > cite": {
      marginTop: 4,
      alignSelf: `flex-end`,
    },
  },
  hr: {
    color: `secondary`,
    border: 0,
    borderBottomWidth: 2,
    borderStyle: `solid`,
    width: `80%`,
    marginBottom: 4,
  },
  i: {
    variant: `text.italic`,
  },
  em: {
    variant: `text.italic`,
  },
  b: {
    variant: `text.bold`,
  },
  strong: {
    variant: `text.bold`,
  },
  table: {
    width: `100%`,
    marginBottom: 4,
    borderCollapse: `separate`,
    borderSpacing: 0,
  },
  th: {
    textAlign: `left`,
    verticalAlign: `bottom`,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 1,
    paddingLeft: 0,
    borderColor: `inherit`,
    borderBottomWidth: 2,
    borderBottomStyle: `solid`,
  },
  td: {
    textAlign: `left`,
    verticalAlign: `top`,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 1,
    paddingLeft: 0,
    borderColor: `inherit`,
    borderBottomWidth: 1,
    borderBottomStyle: `solid`,
  },
}
