import { createCss, defaultThemeMap, StitchesCss } from '@stitches/react'

const config = createCss({
  theme: {
    colors: {
      gray: '$gray_500',
      primary: '$primary_500',
      success: '$success_500',
      info: '$info_500',
      warning: '$warning_500',
      danger: '$danger_500',
      gray_50: '#F9FAFB',
      gray_100: '#F3F4F0',
      gray_200: '#E5E7EB',
      gray_300: '#D1D5DB',
      gray_400: '#9CA3AF',
      gray_500: '#6B7280',
      gray_600: '#4B5560',
      gray_700: '#374150',
      gray_800: '#1F2930',
      gray_900: '#111827',
      primary_100: '#D6E4FF',
      primary_200: '#ADC8FF',
      primary_300: '#84A9FF',
      primary_400: '#6690FF',
      primary_500: '#3366FF',
      primary_600: '#254EDB',
      primary_700: '#1939B7',
      primary_800: '#102693',
      primary_900: '#091A7A',
      primary_transparent_100: 'rgba(51, 102, 255, 0.08)',
      primary_transparent_200: 'rgba(51, 102, 255, 0.16)',
      primary_transparent_300: 'rgba(51, 102, 255, 0.24)',
      primary_transparent_400: 'rgba(51, 102, 255, 0.32)',
      primary_transparent_500: 'rgba(51, 102, 255, 0.4)',
      primary_transparent_600: 'rgba(51, 102, 255, 0.48)',
      success_100: '#E4FBD8',
      success_200: '#C4F8B2',
      success_300: '#98EA87',
      success_400: '#6ED564',
      success_500: '#37BA37',
      success_600: '#289F32',
      success_700: '#1B852E',
      success_800: '#116B29',
      success_900: '#0A5925',
      success_transparent_100: 'rgba(55, 186, 55, 0.08)',
      success_transparent_200: 'rgba(55, 186, 55, 0.16)',
      success_transparent_300: 'rgba(55, 186, 55, 0.24)',
      success_transparent_400: 'rgba(55, 186, 55, 0.32)',
      success_transparent_500: 'rgba(55, 186, 55, 0.4)',
      success_transparent_600: 'rgba(55, 186, 55, 0.48)',
      info_100: '#D9FCFE',
      info_200: '#B4F4FE',
      info_300: '#8EE6FD',
      info_400: '#71D6FB',
      info_500: '#43BDF9',
      info_600: '#3095D6',
      info_700: '#2170B3',
      info_800: '#155090',
      info_900: '#0C3877',
      info_transparent_100: 'rgba(67, 189, 249, 0.08)',
      info_transparent_200: 'rgba(67, 189, 249, 0.16)',
      info_transparent_300: 'rgba(67, 189, 249, 0.24)',
      info_transparent_400: 'rgba(67, 189, 249, 0.32)',
      info_transparent_500: 'rgba(67, 189, 249, 0.4)',
      info_transparent_600: 'rgba(67, 189, 249, 0.48)',
      warning_100: '#FFF5D3',
      warning_200: '#FFE8A6',
      warning_300: '#FFD87A',
      warning_400: '#FFC859',
      warning_500: '#ffae23',
      warning_600: '#DB8C19',
      warning_700: '#B76E11',
      warning_800: '#93520B',
      warning_900: '#7A3E06',
      warning_transparent_100: 'rgba(255, 174, 35, 0.08)',
      warning_transparent_200: 'rgba(255, 174, 35, 0.16)',
      warning_transparent_300: 'rgba(255, 174, 35, 0.24)',
      warning_transparent_400: 'rgba(255, 174, 35, 0.32)',
      warning_transparent_500: 'rgba(255, 174, 35, 0.4)',
      warning_transparent_600: 'rgba(255, 174, 35, 0.48)',
      danger_100: '#FFE8D5',
      danger_200: '#FFCAAC',
      danger_300: '#FFA682',
      danger_400: '#FF8463',
      danger_500: '#FF4B30',
      danger_600: '#DB2C23',
      danger_700: '#B7181C',
      danger_800: '#930F1D',
      danger_900: '#7A091E',
      danger_transparent_100: 'rgba(255, 75, 48, 0.08)',
      danger_transparent_200: 'rgba(255, 75, 48, 0.16)',
      danger_transparent_300: 'rgba(255, 75, 48, 0.24)',
      danger_transparent_400: 'rgba(255, 75, 48, 0.32)',
      danger_transparent_500: 'rgba(255, 75, 48, 0.4)',
      danger_transparent_600: 'rgba(255, 75, 48, 0.48)'
    },
    sizes: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      px: '1px',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      // '1/2': '50%',
      // '1/3': '33.333333%',
      // '2/3': '66.666667%',
      // '1/4': '25%',
      // '2/4': '50%',
      // '3/4': '75%',
      // '1/5': '20%',
      // '2/5': '40%',
      // '3/5': '60%',
      // '4/5': '80%',
      // '1/6': '16.666667%',
      // '2/6': '33.333333%',
      // '3/6': '50%',
      // '4/6': '66.666667%',
      // '5/6': '83.333333%',
      // '1/12': '8.333333%',
      // '2/12': '16.666667%',
      // '3/12': '25%',
      // '4/12': '33.333333%',
      // '5/12': '41.666667%',
      // '6/12': '50%',
      // '7/12': '58.333333%',
      // '8/12': '66.666667%',
      // '9/12': '75%',
      // '10/12': '83.333333%',
      // '11/12': '91.666667%',
      full: '100%',
      screenHeight: '100vh',
      screenWidth: '100vw'
    },
    shadows: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none'
    },
    space: {
      0: 0,
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '2rem',
      5: '4rem',
      6: '8rem',
      7: '16rem',
      8: '32rem'
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px'
    },
    zIndices: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      auto: 'auto'
    },
    fonts: {
      sans:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    lineHeights: {
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    }
  },
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

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme
} = config

export type FondasiStitchesConfig = typeof config
export type CSS = StitchesCss<FondasiStitchesConfig>
