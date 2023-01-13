import { Outlet } from 'react-router-dom'

import { Home, About, Error404 } from '../screens'
import { Header, Footer } from '../organisms'
import { ModalWrapper, ScreenWrapper, SidebarWrapper } from '../layouts'

const ViewWithHeaderAndFooter = () => {
  return (
    <ScreenWrapper>
      <SidebarWrapper>
        <ModalWrapper>
          <Header />
          <Outlet />
          <Footer />
        </ModalWrapper>
      </SidebarWrapper>
    </ScreenWrapper>
  )
}
const routes = () => {
  return [
    {
      path: '/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/about-us',
          element: <About />,
        },
      ],
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ]
}

export default routes
