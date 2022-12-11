import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

export interface SocialProfileType {
  image: IconType
  link: string
  label: string
}

export const DISCORD_LINK: string = 'https://discord.gg/evNn6NnA'

export const SOCIAL_PROFILES: SocialProfileType[] = [
  {
    image: AiFillGithub,
    link: 'https://github.com/woolballers',
    label: 'Woolball Github',
  },
  {
    image: FaDiscord,
    link: DISCORD_LINK,
    label: 'Woolball Discord',
  },
]
