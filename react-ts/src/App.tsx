import { useEffect } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { UIProvider } from './context/ui'
import routes from './router'

const RenderRoutes = () => {
  let routeTree = useRoutes(routes())
  return routeTree
}

function App() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <UIProvider>
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </UIProvider>
  )
}

export default App
