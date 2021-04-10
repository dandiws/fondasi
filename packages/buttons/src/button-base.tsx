import { styled } from '@fondasi/core'
import { intent, variant } from './shared/variants'

export const ButtonBase = styled('button', {
  appearance: 'none',
  borderStyle: 'solid',
  borderRadius: '$sm',
  borderWidth: 1,
  outline: 0,
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 500,
  '&:hover': {
    background: '$gray_100'
  },
  '&:focus': {
    borderColor: '$primary_200',
    boxShadow: '0 0 0 2px $colors$primary_transparent_200'
  },
  '& .btn-icon': {
    color: '$$colorText'
  },
  '& .btn-icon-left': {
    marginRight: '$2'
  },
  '& .btn-icon-right': {
    marginLeft: '$2'
  },
  variants: {
    intent,
    variant
  },
  defaultVariants: {
    intent: 'none',
    variant: 'default'
  }
})
