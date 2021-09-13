/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import Prism from "@theme-ui/prism"
import { isFirefox } from "react-device-detect"
import useSiteMetadata from "../../hooks/use-site-metadata"
import ScrollX from "../scroll-x"
import {
  CODE_BLOCK_CLASS_NAME,
  CODE_BLOCK_CONTAINER_CLASS_NAME,
} from "../../utils/constants"
import CopyButton from "./copy-button"
import FileName from "./file-name"
import LanguageLabel from "./language-label"

const CodeBlock = props => {
  const {
    components: {
      codeBlock: { isCopy, isLabel, isFocus },
    },
  } = useSiteMetadata()

  const {
    id,
    children,
    fileName,
    className: prismClassName,
    copy = isCopy,
    label = isLabel,
    focus = isFocus,
    ...rest
  } = props

  const language = getLanguage(prismClassName)
  const truthy = [true, `true`]
  const isLanguageLabelVisible = truthy.includes(label) && Boolean(language)
  const isFileNameVisible = Boolean(fileName)
  const isCopyButtonVisible = truthy.includes(copy)
  const tabIndex = Number(truthy.includes(focus)) - 1
  const isOneLiner = children.split(`\n`).filter(Boolean).length === 1

  return (
    <Flex
      tabIndex={tabIndex}
      className={CODE_BLOCK_CLASS_NAME}
      {...(id && { id })}
      sx={{
        position: `relative`,
        flexDirection: `column`,
        marginTop: 5,
        marginBottom: 4,
        scrollMarginTop: 5,
        backgroundColor: `muted`,
        borderRadius: 2,
        transition: `codeBlock`,
        "&:focus-visible": {
          ".language-label": {
            boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
          },
        },
      }}
    >
      <Box>
        {isLanguageLabelVisible && (
          <LanguageLabel
            language={language}
            className="language-label"
            sx={{
              position: `absolute`,
              right: 4,
              // Mask intersecting focus styles
              transform: `translateY(calc(-100% - 2px))`,
              "&:after": {
                content: `""`,
                position: `absolute`,
                width: `100%`,
                height: 4,
                bottom: `-2px`,
                right: 0,
                backgroundColor: `muted`,
              },
            }}
          />
        )}
        {isFileNameVisible && (
          <FileName
            fileName={fileName}
            sx={{
              borderTopRightRadius: 2,
              borderTopLeftRadius: 2,
            }}
          />
        )}
        {isCopyButtonVisible && (
          <CopyButton
            content={children}
            sx={{
              position: `absolute`,
              top: isOneLiner ? `12px` : 4,
              right: 2,
              zIndex: `codeBlockCopyButton`,
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          position: `relative`,
          overflow: `hidden`,
          ...getBorderRadius(isFileNameVisible),
        }}
      >
        <ScrollX
          // `div` with overflow receives focus in Firefox
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739
          // Conditioanlly remove element from the tab order
          {...(isFirefox && { tabIndex: `-1` })}
          className={CODE_BLOCK_CONTAINER_CLASS_NAME}
          sx={{ ...getBorderRadius(isFileNameVisible) }}
        >
          <Prism
            className={prismClassName}
            sx={{
              float: `left`,
              marginY: 0,
              padding: 3,
              minWidth: `100%`,
              ".highlight": {
                marginX: -3,
                paddingX: 3,
              },
            }}
            {...rest}
          >
            {children}
          </Prism>
        </ScrollX>
      </Box>
    </Flex>
  )
}

const languageRegex = new RegExp(`language-`)
const getLanguage = (className, regex = languageRegex) => {
  const firstClassName = className?.split(` `)[0]
  const isLanguageClassName = firstClassName?.match(regex)

  return isLanguageClassName ? firstClassName.replace(regex, ``) : null
}

const getBorderRadius = isFileNameVisible => ({
  borderTopLeftRadius: isFileNameVisible ? 0 : 2,
  borderTopRightRadius: isFileNameVisible ? 0 : 2,
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2,
})

export default CodeBlock
