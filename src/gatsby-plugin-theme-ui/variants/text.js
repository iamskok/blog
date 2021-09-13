const text = {
  code: {
    fontFamily: `code`,
  },
  heading: {
    fontFamily: `heading`,
    fontWeight: `heading`,
    fontStyle: `italic`,
    marginY: 4,
  },
  display: {
    variant: `text.heading`,
    color: `primary`,
  },
  italic: {
    fontStyle: `italic`,
    fontSynthesis: `none`,
    "@supports (font-variation-settings: normal)": {
      fontVariationSettings: `'slnt' -10`,
      fontStyle: `oblique 10deg`,
    },
  },
  bold: {
    fontWeight: `bold`,
    fontSynthesis: `none`,
  },
}

export default text
