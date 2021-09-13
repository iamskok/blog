import {
  CODE_BLOCK_CLASS_NAME,
  CODE_BLOCK_CONTAINER_CLASS_NAME,
  CODE_BLOCK_SCROLL_STEP,
} from "../../utils/constants"

const isEventTargetClass = (event, className) =>
  Boolean(event?.target?.classList?.contains(className))

const scroll = (event, direction) => {
  const scrollStep =
    direction === `left` ? -1 * CODE_BLOCK_SCROLL_STEP : CODE_BLOCK_SCROLL_STEP

  if (isEventTargetClass(event, CODE_BLOCK_CLASS_NAME)) {
    event.target.querySelector(
      `.${CODE_BLOCK_CONTAINER_CLASS_NAME}`
    ).scrollLeft += scrollStep
  }
}

export default scroll
