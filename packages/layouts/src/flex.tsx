import { styled } from '@fondasi/core'

export const Flex = styled('div', {
  boxSizing: 'border-box',
  minWidth: 0,
  display: 'flex',
  variants: {
    justify: {
      start: {
        justifyContent: 'flex-start'
      },
      end: {
        justifyContent: 'flex-end'
      },
      center: {
        justifyContent: 'center'
      },
      between: {
        justifyContent: 'space-between'
      },
      around: {
        justifyContent: 'space-around'
      },
      evenly: {
        justifyContent: 'space-evenly'
      }
    },
    align: {
      start: {
        alignItems: 'flex-start'
      },
      end: {
        alignItems: 'flex-end'
      },
      center: {
        alignItems: 'center'
      },
      baseline: {
        alignItems: 'baseline'
      },
      stretch: {
        alignItems: 'stretch'
      }
    }
  }
})
