import React from 'react'
import { useTheme } from 'styled-components'
import Logo from '@app/assets/logo.svg?url'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { urls } from '@app/routes/urls'
import { Nav, LogoWrapper } from './Navbar.styles'

const Navbar = () => {
  const theme: any = useTheme()
  return (
    <div>
      <Nav>
        <LogoWrapper>
          <Link to={urls.dashboard}>
            <img src={Logo} alt="App Name" />
          </Link>
        </LogoWrapper>
        <Link to={urls.dashboard}>
          <Icon icon="ic:twotone-dashboard" fontSize={24} color={theme.palette.primary.main} />
        </Link>
      </Nav>
    </div>
  )
}

export default Navbar
