import React from 'react'
import { styled } from '@fondasi/core'

const createInputStateVariant = (color:string) => ({
  borderColor: '$$focusBorderColor',
  $$focusBorderColor: `$colors$${color}`,
  $$focusShadowColor: `$colors$${color}_transparent_500`
})

const InputBase = styled('input', {
  $$focusBorderColor: '$colors$primary',
  $$focusShadowColor: '$colors$primary_transparent_500',
  px: '$3',
  py: '$2',
  borderStyle: 'solid',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$gray_300',
  outline: 0,
  fontSize: 'inherit',
  '&:focus, &:hover': {
    borderColor: '$$focusBorderColor',
    boxShadow: '0 0 0 2px $$focusShadowColor'
  },
  variants: {
    state: {
      error: createInputStateVariant('danger'),
      warning: createInputStateVariant('warning'),
      success: createInputStateVariant('success')
    }
  },
  '&:disabled': {
    ...createInputStateVariant('gray_200'),
    background: '$gray_200'
  }
})

export type InputProps = React.ComponentProps<typeof InputBase> & {
  test?: number
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ css, ...props }, ref) => {
  if (props.readOnly) {
    css = {
      background: '$gray_200',
      ...createInputStateVariant('gray_200'),
      ...css as any
    }
  }

  return <InputBase ref={ref} css={css} {...props} />
})

Input.displayName = 'Input'
