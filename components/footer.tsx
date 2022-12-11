import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  HStack,
  Flex,
  Heading,
} from '@chakra-ui/react'
import SocialIcons from '../components/icons'
import NextLink from 'next/link'
import localFont from '@next/font/local'
const TenikaFont = localFont({ src: '../public/fonts/Tenika-Regular.woff2' })
const SFFont = localFont({ src: '../public/fonts/SFMono-Regular.woff2' })
import LogoReverse from './vectors/logo_'

export default function Footer() {
  return (
    <Box
      bg={'transparent'}
      color={useColorModeValue('gray.700', 'gray.200')}
      my={{ base: 2, sm: 4 }}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={{ base: 2, md: 6 }}
        direction={{ base: 'column', sm: 'row' }}
        spacing={4}
        justify={{ base: 'center', sm: 'space-between' }}
        align={'center'}
        color={'woolball.400'}
      >
        <Stack
          direction={'row'}
          display={{ base: 'none', md: 'flex' }}
          spacing={5}
          fontWeight={'bold'}
        >
          <NextLink href="/description" legacyBehavior passHref>
            <Link
              px={{ base: 6, md: 4, sm: 8 }}
              className={TenikaFont.className}
              color={'woolball.400'}
              _hover={{
                color: 'woolball.700',
                borderColor: 'woolball.400',
                borderRadius: '4px',
                bg: 'woolball.0',
              }}
            >
              {'What is Woolball?'.toUpperCase()}
            </Link>
          </NextLink>
          {process.env.SHOW_DOCS_LINK === '1' && (
            <Link
              href="/"
              color={'woolball.400'}
              _hover={{ color: 'woolball.300', textDecoration: 'none' }}
            >
              Docs
            </Link>
          )}
        </Stack>
        <Stack direction={'row'}>
          <SocialIcons spacing={{ base: 6, sm: 5 }} />
        </Stack>
        <Flex direction={'row'} align={'end'}>
          <HStack h={'full'}>
            <Stack>
              <LogoReverse width="184px" height="31px" />
            </Stack>

            <Flex h={'full'} align={'end'} justify={'end'}>
              <Text fontSize={'18px'} color={'black'}>
                {'© \u00A0'}
              </Text>
              <Text className={SFFont.className} fontSize={'18px'} color={'black'}>
                {'2022'}
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
