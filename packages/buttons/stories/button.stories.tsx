import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'
import { Stack } from '@fondasi/layouts'
import {
  RiArrowDownSFill,
  RiDeleteBin2Fill,
  RiDownloadFill,
  RiEditFill,
  RiSearchLine
} from 'react-icons/ri'

storiesOf('Button', module).add('default', () => (
  <Button>This is button</Button>
))

storiesOf('Button', module).add('Variants', () => (
  <Stack direction='vertical' spacing='$2'>
    <Stack spacing='$2'>
      <Button>This is button</Button>
      <Button intent='success'>This is button</Button>
      <Button intent='danger'>This is button</Button>
      <Button intent='warning'>This is button</Button>
      <Button intent='info'>This is button</Button>
    </Stack>
    <Stack spacing='$2'>
      <Button variant='primary'>This is button</Button>
      <Button intent='success' variant='primary'>
        This is button
      </Button>
      <Button intent='danger' variant='primary'>
        This is button
      </Button>
      <Button intent='warning' variant='primary'>
        This is button
      </Button>
      <Button intent='info' variant='primary'>
        This is button
      </Button>
    </Stack>
    <Stack spacing='$2'>
      <Button variant='minimal'>This is button</Button>
      <Button intent='success' variant='minimal'>
        This is button
      </Button>
      <Button intent='danger' variant='minimal'>
        This is button
      </Button>
      <Button intent='warning' variant='minimal'>
        This is button
      </Button>
      <Button intent='info' variant='minimal'>
        This is button
      </Button>
    </Stack>
    <Stack spacing='$2'>
      <Button variant='link'>This is button</Button>
      <Button intent='success' variant='link'>
        This is button
      </Button>
      <Button intent='danger' variant='link'>
        This is button
      </Button>
      <Button intent='warning' variant='link'>
        This is button
      </Button>
      <Button intent='info' variant='link'>
        This is button
      </Button>
    </Stack>
  </Stack>
))

storiesOf('Button', module).add('Sizes', () => (
  <Stack spacing='$2' align='start'>
    <Button size='smaller'>Smaller Button</Button>
    <Button size='small'>Small Button</Button>
    <Button>Normal Button</Button>
    <Button size='large'>Large Button</Button>
  </Stack>
))

storiesOf('Button', module).add('Button with icons', () => (
  <Stack spacing='$2' align='start'>
    <Button leftIcon={RiEditFill}>Edit</Button>
    <Button leftIcon={RiDownloadFill}>Download</Button>
    <Button leftIcon={RiSearchLine}>Search</Button>
    <Button rightIcon={RiArrowDownSFill}>Open</Button>
    <Button rightIcon={RiDeleteBin2Fill} intent='danger'>
      Delete
    </Button>
    <Button rightIcon={RiDeleteBin2Fill} intent='danger' variant='primary'>
      Delete
    </Button>
  </Stack>
))
