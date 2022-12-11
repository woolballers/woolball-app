import { Box, Flex, Center, Image, Show } from '@chakra-ui/react'

export default function Roadmap() {
  return (
    <Flex my={28} w={'100%'} h={'100%'}>
      <Show above={'lg'}>
        <Center>
            <Image
              alt={'roadmap'}
              w={'80%'}
              h={'auto'}
              src={'/images/roadmap-no-text.png'}
            />
        </Center>
      </Show>
      <Show below={'md'}>
        <Image
          alt={'roadmap'}
          w={'100%'}
          h={'100%'}
          src={'/images/roadmap-mobile-no-text.png'}
        />
      </Show>
    </Flex>
  )
}
