import { Outlet } from 'react-router-dom'

import { Home, Error404 } from '../screens'
import { Header, Footer } from 'organisms'
import { ModalWrapper, ScreenWrapper, SidebarWrapper } from '../layouts'

const ViewWithHeaderAndFooter = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
const routes = () => {
  return [
    {
      path: '/',
      element: <ViewWithHeaderAndFooter />,
      children: [{ path: '/', element: <Home /> }],
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ]
}

export default routes
