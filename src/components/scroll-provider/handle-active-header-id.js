const handleActiveHeaderId = ({ ids, dispatch }) => {
  // Track central page position
  const pageScrollPosition = window.scrollY + window.innerHeight / 2

  for (let i = 0; i < ids.length; i++) {
    const topHeaderId = ids[i]
    const bottomHeaderId = ids[i + 1]
    const topHeaderPosition = document.getElementById(topHeaderId)?.offsetTop
    const bottomHeaderPosition =
      document.getElementById(bottomHeaderId)?.offsetTop || Infinity

    if (
      topHeaderPosition <= pageScrollPosition &&
      bottomHeaderPosition >= pageScrollPosition
    ) {
      return dispatch({
        type: `SET_ACTIVE_HEADER_ID`,
        payload: {
          activeId: topHeaderId,
        },
      })
    }
  }

  // When no match found set the first header as active.
  // Fixes fast scrolling issue when active header is not picked up.
  dispatch({
    type: `SET_ACTIVE_HEADER_ID`,
    payload: {
      activeId: ids[0],
    },
  })
}

export default handleActiveHeaderId
