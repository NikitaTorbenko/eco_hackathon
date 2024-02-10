import { Suspense } from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { Routes } from '../lib/Routes'
import { getRequireAuth } from '../lib/RequireAuth'
import LoginPage from 'pages/login-page/ui/LoginPage'

const RequireAuth = getRequireAuth(<LoginPage/>)

export const Routing = () => {
  return (
        <Suspense fallback={'Загрузка...'}>
            <ReactRoutes>
                {Routes.map(item =>
                    <Route
                        key={item.path}
                        path={item.path}
                        element={item.isAuth
                          ? <RequireAuth>{item.element}</RequireAuth>
                          : item.element}/>)}
            </ReactRoutes>
        </Suspense>
  )
}
