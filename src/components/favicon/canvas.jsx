/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useRef } from "react"
import {
  FAVICON_CANVAS_SIZE,
  FAVICON_CANVAS_TIME_STEP,
  FAVICON_CANVAS_FRAME_NUMBER,
  FAVICON_FRAME_STORAGE_KEY,
} from "../../utils/constants"

const Canvas = () => {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current

    let time = 0
    for (let i = 0; i < FAVICON_CANVAS_FRAME_NUMBER; i++) {
      draw(canvas, time, i)
      time += FAVICON_CANVAS_TIME_STEP
    }
  }, [])

  return (
    <canvas
      ref={ref}
      hidden={true}
      width={FAVICON_CANVAS_SIZE}
      height={FAVICON_CANVAS_SIZE}
      sx={{
        width: `faviconCanvas`,
        height: `faviconCanvas`,
      }}
    />
  )
}

const draw = (canvas, time, i) => {
  const context = canvas.getContext(`2d`)

  const maxAngle = Math.PI / 8
  const initialAngle = Math.PI / 4
  const oscillationAngle = time * 2 * Math.PI
  const rotation = maxAngle * Math.sin(oscillationAngle) + initialAngle

  context.clearRect(0, 0, FAVICON_CANVAS_SIZE, FAVICON_CANVAS_SIZE)
  context.setTransform(1, 0, 0, 1, 0, 0)
  context.translate(FAVICON_CANVAS_SIZE / 2, FAVICON_CANVAS_SIZE / 2)
  context.rotate(rotation)
  context.translate(-FAVICON_CANVAS_SIZE / 2, -FAVICON_CANVAS_SIZE / 2)
  context.font = `48px Arial`
  context.textBaseline = `middle`
  context.textAlign = `center`
  context.fillText(`👋`, FAVICON_CANVAS_SIZE / 2, FAVICON_CANVAS_SIZE / 2)

  const dataURL = canvas.toDataURL(`image/svg+xml`)
  window.localStorage.setItem(`${FAVICON_FRAME_STORAGE_KEY}-${i}`, dataURL)
}

export default Canvas
