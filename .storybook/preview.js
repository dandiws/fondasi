export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { globalStyles } from '../packages/core/dist/globalStyles'

export const decorators = [
  (Story) => {
    globalStyles()

    return <Story />
  }
]