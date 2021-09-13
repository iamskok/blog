import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  createRef,
} from "react"
import useFontFaceObserver from "use-font-face-observer"
import isBrowser from "../../utils/is-browser"
import fontFaceDeclarations from "../../gatsby-plugin-theme-ui/font-faces"
import getFontFaces from "./get-font-faces"

// Access `Post` component DOM node.
const notationRef = createRef()
const NotationContext = createContext()

const fontFaces = getFontFaces(fontFaceDeclarations)

const NotationProvider = ({ children }) => {
  const [pageHeight, setPageHeight] = useState(0)
  const isFontListLoaded = useFontFaceObserver(fontFaces)

  // Memoize `resizeObserver` so we can use it outside of the `useEffect`. Otherwise
  // we will end up defining it inside of the `useEffect` and a new instance of
  // `resizeObserver` will be created each time `useEffect` callback is executed.
  const resizeObserver = useMemo(
    () =>
      isBrowser() &&
      new ResizeObserver(entries =>
        setPageHeight(entries[0].target.scrollHeight)
      ),
    []
  )

  useEffect(() => {
    // Start observing page height changes when all of the fonts will be loaded. Every
    // newly loaded font will change page height and trigger `pageHeight` state update.
    if (notationRef.current && isFontListLoaded) {
      resizeObserver.observe(notationRef.current)
    }

    return () =>
      notationRef.current && resizeObserver.unobserve(notationRef.current)
  }, [resizeObserver, isFontListLoaded])

  return (
    <NotationContext.Provider value={{ isFontListLoaded, pageHeight }}>
      {children}
    </NotationContext.Provider>
  )
}

export { NotationContext, NotationProvider, notationRef }
