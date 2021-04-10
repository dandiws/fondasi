export const createIntentVariant = (color: string) => ({
  $$color500: `$colors$${color}`,
  $$color600: `$colors$${color}_600`,
  $$color700: `$colors$${color}_700`,
  $$colorSemiTransparent: `$colors$${color}_transparent_400`
})

export const intent = {
  none: {
    $$color700: '$colors$gray_700',
    $$color600: '$colors$primary_600',
    $$color500: '$colors$primary',
    $$colorSemiTransparent: '$colors$primary_transparent_200',
  },
  success: createIntentVariant('success'),
  danger: createIntentVariant('danger'),
  warning: createIntentVariant('warning'),
  info: createIntentVariant('info')
}

export const variant = {
  default: {
    background: '$color500',
    borderColor: '$gray_200',
    color: '$$color700',
  },
  primary: {
    background: '$$color500',
    color: 'white',
    borderColor: '$$color600',
    '&:hover': {
      background: '$$color600'
    },
    '&:focus': {
      borderColor: '$$color500',
      boxShadow: '0 0 0 2px $$colorSemiTransparent'
    },
    '& .btn-icon': {
      color: 'white',
    },
  },
  minimal: {
    borderColor: 'white',
    background: 'white',
    color: '$$color700'
  },
  link: {
    borderColor: 'transparent',
    background: 'transparent',
    color: '$$color500',
    '& .btn-icon': {
      color: '$$color500',
    },
    '&:hover':{
      textDecoration: 'underline',
      background: 'transparent'
    },
    '&:focus':{
      boxShadow: 'none',
      borderColor: 'transparent'
    }
  },
  secondary: {
    background: '$$colorSemiTransparent'
  }
}