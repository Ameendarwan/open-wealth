import { FC } from 'react'

export interface AvatarBaseProps {
  variant?: 'primary' | 'secondary'
  size?: 's' | 'm' | 'l' | 'xl'
}

export interface AvatarProps extends AvatarBaseProps {
  initials: string
}

export type AvatarComponent = FC<AvatarProps>
