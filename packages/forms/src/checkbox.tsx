import React, { useEffect } from 'react'
import { styled, FondasiComponentProps } from '@fondasi/core'
import { useControllableValue } from 'ahooks'

const CHECKBOX_SIZE = 16

const CheckboxBase = styled('button', {
  $$focusBorderColor: '$colors$primary',
  $$focusShadowColor: '$colors$primary_transparent_500',
  appearance: 'none',
  width: CHECKBOX_SIZE,
  height: CHECKBOX_SIZE,
  borderRadius: '$sm',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$gray_300',
  outline: 'none',
  padding: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&:hover': {
    borderColor: '$gray_400'
  },
  '&:focus': {
    borderColor: '$$focusBorderColor',
    boxShadow: '0 0 0 1px $$focusShadowColor'
  },
  '&[data-checked=true]': {
    background: '$primary',
    borderColor: '$primary'
  }
})

export type CheckboxProps = {
  checked?: boolean
  onChange?: (value: boolean) => any,
  name?: string
}

const CheckIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...props}
  >
    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
  </svg>
)

const CheckboxIndicator = styled('svg', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  padding: '4px',
  color: 'white',
  fill: 'white'
})

export const Checkbox = React.forwardRef<HTMLInputElement, FondasiComponentProps<CheckboxProps>>(
  ({ children, ...props }, ref) => {
    const [isChecked, setChecked] = useControllableValue(props, {
      defaultValue: false,
      valuePropName: 'checked'
    })

    const { checked, onChange, ...rest } = props

    return (
      <>
        <CheckboxBase
          role="checkbox"
          data-checked={isChecked}
          onClick={() => setChecked(!isChecked)}
          {...rest}
        >
          <input
            type="checkbox"
            hidden
            ref={ref}
            checked={isChecked}
            onChange={e => {
              setChecked(e.target.checked)
            }}
          />
          {isChecked && <CheckboxIndicator as={CheckIcon} />}
        </CheckboxBase>
        {children}
      </>
    )
  }
)

Checkbox.displayName = 'Checkbox'
