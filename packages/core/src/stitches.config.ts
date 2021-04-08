import { createCss, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme
} = createCss({
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
      primary_100: '#E6D8FE',
      primary_200: '#CCB2FE',
      primary_300: '#AF8BFE',
      primary_400: '#976EFE',
      primary_500: '#703FFE',
      primary_600: '#552EDA',
      primary_700: '#3E1FB6',
      primary_800: '#2A1493',
      primary_900: '#1C0C79',
      primary_transparent_100: 'rgba(112, 63, 254, 0.08)',
      primary_transparent_200: 'rgba(112, 63, 254, 0.16)',
      primary_transparent_300: 'rgba(112, 63, 254, 0.24)',
      primary_transparent_400: 'rgba(112, 63, 254, 0.32)',
      primary_transparent_500: 'rgba(112, 63, 254, 0.4)',
      primary_transparent_600: 'rgba(112, 63, 254, 0.48)',
      success_100: '#F4FCCE',
      success_200: '#E8FA9D',
      success_300: '#D2F16B',
      success_400: '#BBE345',
      success_500: '#9AD110',
      success_600: '#7EB30B',
      success_700: '#659608',
      success_800: '#4D7905',
      success_900: '#3D6403',
      success_transparent_100: 'rgba(154, 209, 16, 0.08)',
      success_transparent_200: 'rgba(154, 209, 16, 0.16)',
      success_transparent_300: 'rgba(154, 209, 16, 0.24)',
      success_transparent_400: 'rgba(154, 209, 16, 0.32)',
      success_transparent_500: 'rgba(154, 209, 16, 0.4)',
      success_transparent_600: 'rgba(154, 209, 16, 0.48)',
      info_100: '#CCF5FF',
      info_200: '#99E5FF',
      info_300: '#66D0FF',
      info_400: '#3FB9FF',
      info_500: '#0094FF',
      info_600: '#0072DB',
      info_700: '#0055B7',
      info_800: '#003C93',
      info_900: '#002B7A',
      info_transparent_100: 'rgba(0, 148, 255, 0.08)',
      info_transparent_200: 'rgba(0, 148, 255, 0.16)',
      info_transparent_300: 'rgba(0, 148, 255, 0.24)',
      info_transparent_400: 'rgba(0, 148, 255, 0.32)',
      info_transparent_500: 'rgba(0, 148, 255, 0.4)',
      info_transparent_600: 'rgba(0, 148, 255, 0.48)',
      warning_100: '#FFF5CC',
      warning_200: '#FFE999',
      warning_300: '#FFDA66',
      warning_400: '#FFCB3F',
      warning_500: '#FFB200',
      warning_600: '#DB9200',
      warning_700: '#B77400',
      warning_800: '#935900',
      warning_900: '#7A4600',
      warning_transparent_100: 'rgba(255, 178, 0, 0.08)',
      warning_transparent_200: 'rgba(255, 178, 0, 0.16)',
      warning_transparent_300: 'rgba(255, 178, 0, 0.24)',
      warning_transparent_400: 'rgba(255, 178, 0, 0.32)',
      warning_transparent_500: 'rgba(255, 178, 0, 0.4)',
      warning_transparent_600: 'rgba(255, 178, 0, 0.48)',
      danger_100: '#FFE5D8',
      danger_200: '#FFC6B2',
      danger_300: '#FF9F8B',
      danger_400: '#FF7B6F',
      danger_500: '#FF3F3F',
      danger_600: '#DB2E3D',
      danger_700: '#B71F3A',
      danger_800: '#931435',
      danger_900: '#7A0C32',
      danger_transparent_100: 'rgba(255, 63, 63, 0.08)',
      danger_transparent_200: 'rgba(255, 63, 63, 0.16)',
      danger_transparent_300: 'rgba(255, 63, 63, 0.24)',
      danger_transparent_400: 'rgba(255, 63, 63, 0.32)',
      danger_transparent_500: 'rgba(255, 63, 63, 0.4)',
      danger_transparent_600: 'rgba(255, 63, 63, 0.48)'
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
