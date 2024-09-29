import React from 'react'
import type { AvatarComponent } from './types'
import { StyledAvatar } from './Avatar.styles'

const Avatar: AvatarComponent = ({ initials, variant = 'primary', size = 'm' }) => {
  return (
    <StyledAvatar variant={variant} size={size}>
      {initials}
    </StyledAvatar>
  )
}

export default Avatar
