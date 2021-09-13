import { useEffect } from "react"

const useEventListener = (target, type, listener, ...options) => {
  useEffect(() => {
    target.addEventListener(type, listener, ...options)
    return () => target.removeEventListener(type, listener, ...options)
  }, [target, type, listener, options])
}

export default useEventListener
