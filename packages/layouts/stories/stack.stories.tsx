import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Stack } from '../src'

storiesOf('Stack', module).add('Vetical', () => (
  <Stack direction="vertical" spacing="$2">
    <Box css={{ background: '$gray_300', height: 100, width: 100 }} />
    <Box css={{ background: '$gray_300', height: 100, width: 100 }} />
    <Box css={{ background: '$gray_300', height: 100, width: 100 }} />
  </Stack>
))

storiesOf('Stack', module).add('Horizontal', () => (
  <Stack direction="horizontal" spacing="$2">
    <Box css={{ background: '$gray_300', height: 100, width: 100 }} />
    <Box css={{ background: '$gray_300', height: 100, width: 100 }} />
    <Box css={{ background: '$gray_300', height: 100, width: 100 }} />
  </Stack>
))
