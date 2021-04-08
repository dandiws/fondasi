import React from "react"
import { FondasiProvider } from "../packages/react/src"

const ThemeDecorator = Story => (
  <FondasiProvider>
    <Story />
  </FondasiProvider>
)

export default ThemeDecorator