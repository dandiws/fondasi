import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../src'
import { Stack } from '@fondasi/layouts'
import { Button } from '@fondasi/buttons'

storiesOf('Checkbox', module).add('default', () => <Checkbox />)

storiesOf('Checkbox', module).add('Controlled', () => {
  const [checked, setChecked] = React.useState(true)

  return (
    <Stack spacing="$1" align="center">
      <Checkbox checked={checked} onChange={newValue => setChecked(newValue)} css={{ marginRight: '$2' }} />
      <Button size="small" onClick={() => setChecked(current => !current)}>
        Toggle from button
      </Button>
    </Stack>
  )
})

storiesOf('Checkbox', module).add('Uncontrolled', () => {
  const [checked, setChecked] = React.useState(true)

  return (
    <Stack spacing="$1" align="center">
      <Checkbox onChange={newValue => setChecked(newValue)} css={{ marginRight: '$2' }} className="classss"/>
      <p>{checked ? 'Checked' : 'Unchecked'}</p>
    </Stack>
  )
})
