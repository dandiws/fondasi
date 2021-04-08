import React from 'react'
import { styled } from '@fondasi/core'

const CheckBoxBase = styled('input', {
  appearance: 'none',
  width: 10,
  height: 10,
  background: 'ActiveBorder'
})

export type CheckBoxProps = React.ComponentProps<typeof CheckBoxBase> & {
  label?: React.ReactNode
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, id, ...props }, ref) => {
    id = id || String(Math.random() * 997187836)

    return (
      <>
        <CheckBoxBase id={id} type="checkbox" ref={ref} {...props} />
        {/* {label && <label css={{ marginLeft: '$2' }} htmlFor={id}>{label}</label>} */}
      </>
    )
  }
)

Checkbox.displayName = 'CheckBox'
