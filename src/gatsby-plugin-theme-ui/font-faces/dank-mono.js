import dankMonoWoff2 from "../../assets/fonts/dank-mono.woff2"
import dankMonoItalicWoff2 from "../../assets/fonts/dank-mono-italic.woff2"

const dankMonoFontFace = {
  "@font-face": {
    fontFamily: `Dank Mono`,
    fontWeight: 400,
    fontDisplay: `swap`,
    fontStyle: `normal`,
    src: `url(${dankMonoWoff2}) format("woff2-variations"),
      url(${dankMonoWoff2}) format("woff2")`,
  },
}

const dankMonoItalicFontFace = {
  "@font-face": {
    fontFamily: `Dank Mono`,
    fontWeight: 400,
    fontDisplay: `swap`,
    fontStyle: `italic`,
    src: `url(${dankMonoItalicWoff2}) format("woff2-variations"),
      url(${dankMonoItalicWoff2}) format("woff2")`,
  },
}

export { dankMonoFontFace, dankMonoItalicFontFace }
