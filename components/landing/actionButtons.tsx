import { Flex, Button } from '@chakra-ui/react'

export default function ActionButtons() {
  return (
    <Flex
      flex={1}
      justify={{ base: 'center', md: 'left' }}
      w={'100%'}
      direction={'row'}
    >
      {process.env.SHOW_PRESALE_BTN !== '1' && (
        <Button
          rounded={'full'}
          size={'lg'}
          fontWeight={'bold'}
          colorScheme={'red'}
          bg={'woolball.400'}
          _hover={{ bg: 'woolball.500' }}
          px={{ base: 6, md: 16, sm: 8 }}
          shadow={'sm'}
        >
          JOIN DISCORD
        </Button>
      )}
      <Button
        rounded={'full'}
        size={'lg'}
        bg={'woolball.50'}
        color={'woolball.300'}
        fontWeight={'bold'}
        mx={{ base: 4, sm: 8 }}
        px={{ base: 6, md: 16, sm: 8 }}
        border="1px"
        borderColor="woolball.300"
        shadow={'sm'}
      >
        READ MORE
      </Button>
    </Flex>
  )
}
