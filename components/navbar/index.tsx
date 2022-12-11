import React from 'react'
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Text,
  HStack,
  IconButton,
  Link,
  VStack,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Spacer,
  Heading,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import NextLink from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from '../vectors/logo'
import SocialIcons from '../icons'
import localFont from '@next/font/local'
const PrimeFont = localFont({ src: '../../public/fonts/Prime-Regular.woff2' })
const TenikaFont = localFont({ src: '../../public/fonts/Tenika-Regular.woff2' })

export default function Navbar() {
  const mobileNav = useDisclosure()

  const text = useColorModeValue('dark', 'light')

  const bg = 'white'
  const bgMobileNavBar = 'woolball.50'

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      bg={bgMobileNavBar}
      rounded="sm"
      shadow="sm"
      zIndex={100}
      w="full"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button
        w="full"
        bg={bgMobileNavBar}
        _hover={{
          bg: 'woolball.100',
        }}
      >
        <NextLink href="/description" legacyBehavior passHref>
          <Link
            color={'woolball.400'}
            _hover={{ color: 'woolball.300', textDecoration: 'none' }}
          >
            <Heading fontSize={'md'} fontWeight={'semibold'}>
              <Text className={TenikaFont.className}>
                {'What is Woolball?'.toUpperCase()}
              </Text>
            </Heading>
          </Link>
        </NextLink>
      </Button>
      {process.env.SHOW_DOCS_LINK === '1' && (
        <Button
          w="full"
          bg={bgMobileNavBar}
          _hover={{
            bg: 'woolball.100',
          }}
        >
          <Link
            href="/"
            color={'woolball.400'}
            _hover={{ color: 'woolball.300', textDecoration: 'none' }}
          >
            Docs
          </Link>
        </Button>
      )}
      <Button
        w="full"
        bg={bgMobileNavBar}
        _hover={{
          bg: 'woolball.100',
        }}
      >
        <SocialIcons spacing={6} />
      </Button>
    </VStack>
  )
  return (
    <Box pos="relative">
      <chakra.header
        bg={bg}
        borderTop="6px solid"
        borderTopColor="woolball.400"
        w="full"
        overflowY="hidden"
        px={{ base: 4, xl: 0 }}
      >
        <chakra.div h="4.5rem" mx="auto" w="full" maxW={'7xl'}>
          <Flex w="full" h="full" justify={'space-evenly'} align={'center'}>
            <Flex w="full" h="full">
              <Flex align="center">
                <NextLink href="/" legacyBehavior passHref>
                  <Link>
                    <HStack>
                      <Logo width="247px" height="43px" />
                    </HStack>
                  </Link>
                </NextLink>
              </Flex>
            </Flex>
            <Spacer />
            <HStack
              display={{ base: 'none', md: 'flex' }}
              // ml={{ md: 8, lg: 0 }}
              fontWeight={'bold'}
              spacing={{ base: 3, lg: 8 }}
              w="full"
              justify={{ base: 'center', lg: 'left' }}
            >
              <NextLink href="/description" legacyBehavior passHref>
                <Link
                  className={TenikaFont.className}
                  color={'woolball.400'}
                  _hover={{ color: 'woolball.300', textDecoration: 'none' }}
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
            </HStack>

            <Spacer />
            <Flex justify="flex-end" w="full" maxW="824px">
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                <SocialIcons spacing={5} />
              </HStack>

              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="woolball.400"
                borderRadius="full"
                border="1px solid"
                _dark={{ color: 'inherit' }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  )
}
