import { Box } from '@chakra-ui/react'

export default function ConnectWalletBtn() {
  return (
    <Box
      display={{ base: 'none', md: 'flex' }}
      alignItems="center"
      as="a"
      aria-label="Sponsor Choc UI on Open Collective"
      href={''}
      target="_blank"
      rel="noopener noreferrer"
      bg={'woolball.400'}
      borderWidth="1px"
      borderColor="woolball.200"
      px="1em"
      minH="36px"
      rounded="2xl"
      fontSize="sm"
      color="white"
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: 'woolball.300',
        borderColor: 'woolball.400',
      }}
      _active={{
        borderColor: 'woolball.200',
      }}
      _focus={{
        boxShadow: 'outline',
      }}
      ml={5}
    >
      <Box as="strong" lineHeight="inherit" fontWeight="semibold">
        Connect Wallet
      </Box>
    </Box>
  )
}
