import React, { createContext } from "react"
import useLocalStorage from "../../hooks/use-local-storage"

const SoundContext = createContext()

const SoundProvider = ({ children }) => {
  const [sound, setSound] = useLocalStorage(`sound-mode`, () => true)

  return (
    <SoundContext.Provider value={[sound, setSound]}>
      {children}
    </SoundContext.Provider>
  )
}

export { SoundContext, SoundProvider }
