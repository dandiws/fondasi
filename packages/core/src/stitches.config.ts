import { createCss, defaultThemeMap } from '@stitches/react'
import { theme as defaultTheme } from './theme'

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme
} = createCss({
  theme: defaultTheme,
  media: {},
  utils: {
    // Abbreviated margin properties
    m: config => value => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value
    }),
    mt: config => value => ({
      marginTop: value
    }),
    mr: config => value => ({
      marginRight: value
    }),
    mb: config => value => ({
      marginBottom: value
    }),
    ml: config => value => ({
      marginLeft: value
    }),
    mx: config => value => ({
      marginLeft: value,
      marginRight: value
    }),
    my: config => value => ({
      marginTop: value,
      marginBottom: value
    }),
    // Abbreviated padding properties
    p: config => value => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value
    }),
    pt: config => value => ({
      paddingTop: value
    }),
    pr: config => value => ({
      paddingRight: value
    }),
    pb: config => value => ({
      paddingBottom: value
    }),
    pl: config => value => ({
      paddingLeft: value
    }),
    px: config => value => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: config => value => ({
      paddingTop: value,
      paddingBottom: value
    }),

    // A property to apply linear gradient
    linearGradient: config => value => ({
      backgroundImage: `linear-gradient(${value})`
    }),

    // An abbreviated property for border-radius
    br: config => value => ({
      borderRadius: value
    })
  },
  prefix: '',
  insertionMethod: 'prepend',
  themeMap: {
    ...defaultThemeMap,
    $$spacing: 'space'
  }
})
