import React from 'react'
import { styled } from '@fondasi/core'
import { Flex } from './flex'

const valueToCssUnit = (value?: number | string) => {
  if (value === 0) return value

  if (typeof value === 'number') {
    return value + 'px'
  }

  return value || 0
}

type StackOwnProps = {
  direction?: 'vertical' | 'horizontal'
  spacing?: number | string
}

const Hstack = styled(Flex, {
  flexDirection: 'row',
  '& > *': {
    $$spacing: 0,
    mx: '$$spacing'
  },

  '& > :last-of-type': {
    marginRight: 0
  },
  '& > :first-of-type': {
    marginLeft: 0
  }
})

const VStack = styled(Flex, {
  flexDirection: 'column',
  '& > *': {
    $$spacing: 0,
    my: '$$spacing'
  },
  '& > :last-of-type': {
    marginBottom: 0
  },
  '& > :first-of-type': {
    marginTop: 0
  }
})

export type StackProps = React.ComponentProps<typeof Flex> & StackOwnProps

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ direction, spacing, css, ...props }, ref) => {
    css = {
      '& > *': {
        $$spacing: valueToCssUnit(spacing)
      },
      ...css as any
    }

    if (direction === 'vertical') {
      return <VStack ref={ref} css={css} {...props} />
    }

    return <Hstack ref={ref} css={css} {...props} />
  }
)

Stack.displayName = 'Stack'
Stack.propTypes = {}
