import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconButton } from '../src'
import { Stack } from '@fondasi/layouts'
import {
  RiAddFill,
  RiDeleteBinFill,
  RiDownloadFill,
  RiExternalLinkFill,
  RiSearchLine,
  RiSettings3Fill
} from 'react-icons/ri'

storiesOf('IconButton', module).add('default', () => (
  <IconButton icon={RiDownloadFill} />
))


storiesOf('IconButton', module).add('Variants', () => (
  <Stack direction='vertical' spacing='$2'>
    <Stack spacing='$2'>
      <IconButton icon ={RiDownloadFill} />
      <IconButton icon ={RiDeleteBinFill} variant="primary" intent="danger" />
      <IconButton icon ={RiSearchLine} variant="minimal" />
      <IconButton icon ={RiExternalLinkFill} variant="link" />
    </Stack>
  </Stack>
))

storiesOf('IconButton', module).add('Sizes', () => (
  <Stack direction='vertical' spacing='$2'>
    <Stack spacing='$2'>
      <IconButton icon ={RiSearchLine} size="small" />
      <IconButton icon ={RiSettings3Fill} size="small" />
      <IconButton icon ={RiAddFill} size="small" />
      <IconButton icon ={RiDeleteBinFill} intent="danger" size="small" />
    </Stack>
    <Stack spacing="$2">
    <IconButton icon ={RiSearchLine} size="medium" />
      <IconButton icon ={RiSettings3Fill} size="medium" />
      <IconButton icon ={RiAddFill} size="medium" />
      <IconButton icon ={RiDeleteBinFill} intent="danger" size="medium" />

    </Stack>
    <Stack spacing="$2">
    <IconButton icon ={RiSearchLine} size="large" />
      <IconButton icon ={RiSettings3Fill} size="large" />
      <IconButton icon ={RiAddFill} size="large" />
      <IconButton icon ={RiDeleteBinFill} intent="danger" size="large" />

    </Stack>
  </Stack>
))
