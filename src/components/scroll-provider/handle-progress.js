const handleProgress = ({ dispatch, elementId }) => {
  const elementHeight = document.getElementById(elementId).clientHeight || 0

  const pageScrollOffset = window.scrollY
  const pageTotalHeight = document.body.scrollHeight
  const pageInnerHeight = window.innerHeight

  // Show progress when scrolled past certain HTML element
  const isVisible = pageScrollOffset > elementHeight
  const progress = pageScrollOffset / (pageTotalHeight - pageInnerHeight)

  dispatch({
    type: `SET_SCROLL_PROGRESS`,
    payload: {
      scrollProgress: isVisible ? progress : 0,
    },
  })
}

export default handleProgress
