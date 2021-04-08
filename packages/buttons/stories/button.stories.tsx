import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'
import { Stack } from '@fondasi/layouts'

storiesOf('Button', module).add('default', () => <Button>This is button</Button>)

storiesOf('Button', module).add('Variants', () => (
  <Stack spacing="$2">
    <Button>This is button</Button>
    <Button variant="primary">This is button</Button>
    <Button variant="success">This is button</Button>
    <Button variant="info">This is button</Button>
    <Button variant="danger">This is button</Button>
    <Button variant="warning">This is button</Button>
  </Stack>
))

storiesOf('Button', module).add('Sizes', () => (
  <Stack spacing="$2" align="start">
    <Button size="small">Small Button</Button>
    <Button>Normal Button</Button>
    <Button size="large">Large Button</Button>
  </Stack>
))
