import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const LayoutStyle = styled.main`
  display: grid;
  grid-template-columns: 6.4rem 1fr;
`

const Layout = () => {
  return (
    <LayoutStyle>
      <Navbar />
      <Outlet />
    </LayoutStyle>
  )
}

export default Layout
