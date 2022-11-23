import React from 'react'
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  VStack,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Spacer,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from '../svgs/logo'
import SocialIcons from '../social_icons'

export default function Header() {
  const mobileNav = useDisclosure()

  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const bg = 'white'
  const bgMobileNavBar = 'woolball.50'
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [y, setY] = React.useState(0)
  const height = ref.current ? ref.current.getBoundingClientRect() : 0

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
        <Link
          href="/what-is-woolball"
          color={'woolball.400'}
          _hover={{ color: 'woolball.300', textDecoration: 'none' }}
        >
          What&apos;s Woolball?
        </Link>
      </Button>
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
          <Flex w="full" h="full" justify="space-between" align={'center'}>
            <Flex justify="space-between" w="full" h="full">
              <Flex align="center">
                <Link href="/">
                  <HStack>
                    <Logo width="247px" height="43px" />
                  </HStack>
                </Link>
              </Flex>
              <HStack
                display={{ base: 'none', md: 'flex' }}
                ml={{ md: 8, lg: 0 }}
                fontWeight={'bold'}
                spacing={{ md: 4, lg: 8 }}
              >
                <Link
                  href="/what-is-woolball"
                  color={'woolball.400'}
                  _hover={{ color: 'woolball.300', textDecoration: 'none' }}
                >
                  What&apos;s Woolball?
                </Link>
                <Link
                  href="/"
                  color={'woolball.400'}
                  _hover={{ color: 'woolball.300', textDecoration: 'none' }}
                >
                  Docs
                </Link>
              </HStack>
            </Flex>
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
