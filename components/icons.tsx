import { Icon, Link, Wrap } from '@chakra-ui/react'
import { SocialProfileType, SOCIAL_PROFILES } from './constants/socials'

function SocialIcon({ socialProfile }: { socialProfile: SocialProfileType }) {
  return (
    <Link
      isExternal
      aria-label={socialProfile.label}
      href={socialProfile.link}
      borderRadius="full"
      border="1px solid"
      p="1"
      color={'woolball.400'}
      _hover={{
        color: 'woolball.700',
        borderColor: 'woolball.700',
        bg: 'woolball.1',
      }}
    >
      <Icon
        as={socialProfile.image}
        display="block"
        transition="color 0.0s"
        h="5"
      />
    </Link>
  )
}

export default function SocialIcons(props: any) {
  return (
    <Wrap {...props}>
      {SOCIAL_PROFILES.map((socialProfile: any) => (
        <SocialIcon
          socialProfile={socialProfile}
          key={socialProfile.label}
        />
      ))}
    </Wrap>
  )
}
