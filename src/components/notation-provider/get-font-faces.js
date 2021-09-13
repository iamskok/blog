// List of supported font style properties by FontFaceObserver hook.
const VALID_FONT_FACE_STYLES = [`italic`, `normal`, `obilique`]

const getFontFaces = fontFaceDeclarations =>
  fontFaceDeclarations.map(
    ({ "@font-face": { fontFamily: family, fontStyle: style } }) =>
      Object.assign(
        {
          family,
        },
        // Ignore unsupported font styles properties.
        VALID_FONT_FACE_STYLES.includes(style) && { style }
      )
  )

export default getFontFaces
