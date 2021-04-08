import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex } from '../src'

storiesOf('Flex', module).add('default', () => (
  <Flex css={{ justifyContent: 'space-around' }}>
    <Box css={{ background: '$gray_200', width: 100, height: 100 }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100 }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100 }} />
  </Flex>
))

storiesOf('Flex', module).add('Horizontal alignment', () => (
 <>
   <Flex justify="start">
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
  </Flex>
    <Flex justify="end">
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
  </Flex>
    <Flex justify="between">
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
  </Flex>
    <Flex justify="around">
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
  </Flex>
    <Flex justify="evenly">
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
    <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
  </Flex>
 </>
))

storiesOf('Flex', module).add('Vertical alignment', () => (
  <>
    <Flex align="start">
     <Box css={{ background: '$gray_200', width: 100, height: 30, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 60, margin: '$1' }} />
    </Flex>
    <Flex align="end">
     <Box css={{ background: '$gray_200', width: 100, height: 30, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 60, margin: '$1' }} />
   </Flex>
    <Flex align="center">
     <Box css={{ background: '$gray_200', width: 100, height: 30, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 60, margin: '$1' }} />
   </Flex>
    <Flex align="baseline">
     <Box css={{ background: '$gray_200', width: 100, height: 30, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 60, margin: '$1' }} />
   </Flex>
    <Flex align="stretch">
     <Box css={{ background: '$gray_200', width: 100, height: 30, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 100, margin: '$1' }} />
     <Box css={{ background: '$gray_200', width: 100, height: 60, margin: '$1' }} />
   </Flex>
  </>
))
