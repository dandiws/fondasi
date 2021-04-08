import { styled } from '@fondasi/core'

const createButtonVariant = (color:string) => ({
  background: `$${color}`,
  color: 'white',
  '&:hover': {
    background: `$${color}_600`
  },
  '&:focus': {
    $$boxColor: `$colors$${color}_transparent_500`,
    borderColor: `$${color}`
  }
})

export const Button = styled('button', {
  px: '$3',
  py: '$2',
  borderStyle: 'solid',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$gray_300',
  background: '$gray_100',
  outline: 0,
  cursor: 'pointer',
  fontSize: 'inherit',
  '&:hover': {
    background: '$gray_200'
  },
  '&:focus': {
    $$boxColor: '$colors$primary_transparent_500',
    borderColor: '$primary',
    boxShadow: '0 0 0 2px $$boxColor'
  },
  variants: {
    variant: {
      success: createButtonVariant('success'),
      primary: createButtonVariant('primary'),
      danger: createButtonVariant('danger'),
      warning: createButtonVariant('warning'),
      info: createButtonVariant('info')
    },
    size: {
      small: {
        px: '$2',
        py: '$1'
      },
      large: {
        px: '$4',
        py: '$3'
      }
    }
  }
})
