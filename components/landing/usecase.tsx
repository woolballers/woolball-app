import { Stack, Image, Text, Flex, Show } from '@chakra-ui/react'
import React from 'react'

export function CheckmarkIcon({ variant }: { variant?: 'homepage' | 'other' }) {
  const imageWidth: any =
    variant === 'other'
      ? { base: '12px' }
      : { lg: '20px', md: '16px', base: '12px' }
  const imageHeight: any =
    variant === 'other'
      ? { base: '16px' }
      : { lg: '26px', md: '20px', base: '16px' }
  return (
    <Image
      src={'/images/small-hash-sign.png'}
      alt={'Checkmark'}
      width={imageWidth}
      height={imageHeight}
    />
  )
}

export default function UseCase({
  children,
  variant,
}: {
  children: React.ReactNode
  variant?: 'homepage' | 'other'
}) {
  const stackDirection: any =
    variant === 'other' ? { base: 'row' } : { base: 'row', lg: 'column' }
  return (
    <Stack direction={stackDirection}>
      <Flex flexDirection={'row'} alignItems={'left'}>
        <CheckmarkIcon variant={variant}/>{'\u00A0'}<Text>{children}</Text>
      </Flex>
    </Stack>
  )
}
