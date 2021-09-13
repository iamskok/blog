import React from "react"
import { SoundProvider } from "../sound-provider"

export const wrapRootElement = ({ element }) => (
  <SoundProvider>{element}</SoundProvider>
)
