import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Home, Error404 } from 'screens'
import { Header, Footer } from 'organisms'

function ViewWithHeaderAndFooter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default function routes() {
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
