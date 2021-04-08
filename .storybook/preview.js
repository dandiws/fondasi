import React from "react"
import { configure, addDecorator } from "@storybook/react"
import themeDecorator from "./theme-decorator"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  themeDecorator
]