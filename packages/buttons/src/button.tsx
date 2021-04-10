import React from 'react'
import { styled } from '@fondasi/core'
import { ButtonBase } from './button-base'

export const ButtonStyled = styled(ButtonBase, {
  variants: {
    size: {
      medium: {
        fontSize: '0.75rem',
        px: '$3',
        height: 32,
      },
      smaller: {
        fontSize: '0.66rem',
        px: '$2',
        height: 20,
      },
      small: {
        fontSize: '0.75rem',
        px: '$2',
        height: 24,
      },
      large: {
        fontSize: '0.9rem',
        px: '$4',
        height: 42
      }
    }
  },
  defaultVariants:{
    size: 'medium'
  }
})

export type ButtonProps = React.ComponentProps<typeof ButtonStyled> & {
  leftIcon?: (props: any) => JSX.Element
  rightIcon?: (props: any) => JSX.Element
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, leftIcon: LeftIcon, rightIcon: RightIcon,  ...props} , ref) => {
  return (
    <ButtonStyled ref={ref} {...props}>
      {LeftIcon && <LeftIcon className="btn-icon btn-icon-left" />}
      {children}
      {RightIcon && <RightIcon className="btn-icon btn-icon-right" />}
    </ButtonStyled>
  )
})


Button.displayName = 'Button'