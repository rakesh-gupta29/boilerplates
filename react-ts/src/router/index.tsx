import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  PageHome,
  PageError404,
  PageAbout,
  PageContact,
  PageTermsAndConditions,
  PagePrivacyPolicy,
} from 'screens/index'
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
      children: [
        {
          path: '/',
          element: <PageHome />,
        },
        {
          path: '/contact',
          element: <PageContact />,
        },
        {
          path: '/about',
          element: <PageAbout />,
        },

        {
          path: '/terms-and-conditions',
          element: <PageTermsAndConditions />,
        },
        {
          path: '/privacy-policy',
          element: <PagePrivacyPolicy />,
        },
        {
          path: '*',
          element: <PageError404 />,
        },
      ],
    },
  ]
}
