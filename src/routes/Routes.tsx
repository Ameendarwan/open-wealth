import { lazy } from 'react'
import { Route, Routes as DOMRoutes } from 'react-router-dom'
import Layout from '@app/components/Layout'
import { urls } from './urls'

const Dashboard = lazy(() => import('@app/pages/Dashboard'))

const Routes = () => (
  <DOMRoutes>
    <Route element={<Layout />}>
      <Route path={urls.dashboard} element={<Dashboard />} />
    </Route>
    <Route path="*" element={<div>404</div>} />
  </DOMRoutes>
)

export default Routes
