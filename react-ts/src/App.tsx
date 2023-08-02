import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from './router'

const RenderRoutes = () => {
  const routeTree = useRoutes(routes())
  return routeTree
}

function App() {
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  )
}

export default App
