import { styled } from '@fondasi/core'
import React from 'react'
import { ButtonBase } from './button-base'

export const IconButtonStyled = styled(ButtonBase, {
  padding: 0,
  variants: {
    size: {
      small: {
        width: 24,
        height: 24,
        fontSize: '0.65rem'
      },
      medium: {
        width: 32,
        height: 32,
        fontSize: '0.75rem',
      },
      large: {
        width: 36,
        height: 36,
        fontSize: '0.875rem'
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

export type IconButtonProps = React.ComponentProps<typeof IconButtonStyled> & {
  icon?: (props:any) => JSX.Element
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({ icon:Icon, ...props},ref)=>{
  return <IconButtonStyled ref={ref} {...props}>
    {Icon && <Icon className="btn-icon" />}
  </IconButtonStyled>
})