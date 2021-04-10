import React from 'react'
import { styled } from '@fondasi/core'

const createInputStateVariant = (color: string) => ({
  borderColor: '$$focusBorderColor',
  $$focusBorderColor: `$colors$${color}_400`,
  $$focusShadowColor: `$colors$${color}_transparent_300`
})

const InputBase = styled('input', {
  borderStyle: 'solid',
  borderRadius: '$sm',
  borderWidth: 1,
  borderColor: '$gray_300',
  outline: 0,
  '&:focus, &:hover': {
    borderColor: '$$focusBorderColor',
    boxShadow: '0 0 0 2px $$focusShadowColor'
  },
  variants: {
    state: {
      normal: {
        $$focusBorderColor: `$colors$primary_300`,
        $$focusShadowColor: `$colors$primary_transparent_300`
      },
      error: createInputStateVariant('danger'),
      warning: createInputStateVariant('warning'),
      success: createInputStateVariant('success')
    },
    size: {
      medium: {
        px: '$2',
        height: 32,
        fontSize: '0.75rem'
      },
      small: {
        px: '$2',
        height: 24,
        fontSize: '0.66rem'
      },
      large: {
        px: '$3',
        height: 42,
        fontSize: '.9rem'
      }
    }
  },
  '&:disabled, &[data-readOnly=true]': {
    borderColor: '$gray_300',
    background: '$gray_200',
    color: '$gray_500',
    '&:focus, &:hover': {
      boxShadow: 'none'
    },
    '&:disabled': {
      cursor: 'not-allowed'
    },
    '&[data-readOnly=true]': {
      cursor: 'default'
    }
  },
  defaultVariants: {
    size: 'medium',
    state: 'normal'
  }
})

export type InputProps = React.ComponentProps<typeof InputBase>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ css, ...props }, ref) => {
    return (
      <InputBase
        data-readOnly={props.readOnly}
        ref={ref}
        css={css}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
