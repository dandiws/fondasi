import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '../src'
import { Stack } from '@fondasi/layouts'

storiesOf('Input', module).add('default', () => (
  <Input placeholder="placeholder" />
))

storiesOf('Input', module).add('Input state', () => (
  <Stack direction="vertical" spacing="$2" css={{ maxWidth: 320 }}>
    <Input placeholder="Error" state="error" />
    <Input placeholder="Success" state="success" />
    <Input placeholder="Warning" state="warning" />
    <Input placeholder="Disabled" disabled />
    <Input placeholder="Read Only" readOnly />
  </Stack>
))
