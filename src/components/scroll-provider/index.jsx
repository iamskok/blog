import React, { createContext, useReducer, useEffect } from "react"
import { throttle } from "lodash-es"
import useIsMounted from "../../hooks/use-is-mounted"
import { SCROLL_PROVIDER_THROTTLE_DELAY } from "../../utils/constants"
import handleActiveHeaderId from "./handle-active-header-id"
import handleProgress from "./handle-progress"

const reducer = (
  state,
  { type, payload: { ids, activeId, isVisible, scrollProgress } }
) => {
  switch (type) {
    case `SET_HEADER_IDS`:
      return {
        ...state,
        ids,
      }
    case `SET_ACTIVE_HEADER_ID`:
      return {
        ...state,
        activeId,
      }
    case `SHOW_TABLE_OF_CONTENTS`:
      return {
        ...state,
        isVisible,
      }
    case `SET_SCROLL_PROGRESS`:
      return {
        ...state,
        scrollProgress,
      }
  }
}

const initialState = {
  ids: [],
  activeId: null,
  isVisible: false,
  scrollProgress: null,
}

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const isMounted = useIsMounted()

  const { ids, isVisible } = state

  useEffect(() => {
    dispatch({
      type: `SET_ACTIVE_HEADER_ID`,
      payload: {
        activeId: ids[0],
      },
    })
  }, [ids])

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isMounted) {
        handleProgress({
          elementId: `header`,
          dispatch,
        })

        if (isVisible) {
          handleActiveHeaderId({
            ids,
            dispatch,
          })
        }
      }
    }, SCROLL_PROVIDER_THROTTLE_DELAY)

    window.addEventListener(`scroll`, handleScroll)

    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [ids, isVisible, isMounted])

  return (
    <ScrollContext.Provider value={[state, dispatch]}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
