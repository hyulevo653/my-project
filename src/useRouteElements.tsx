import { useRoutes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import ProductList from './pages/ProductList'
import MainLayout from './layouts/MainLayout'
import { Suspense } from 'react'


export default function useRouteElements() {
  const routeElements = useRoutes([
    {
        path: '/notfound',
        element: (
          <MainLayout>
            <Suspense>
              <NotFound />
            </Suspense>
          </MainLayout>
        )
    },
    {
        path: '',
        element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
        )
    }
  ])
  return routeElements
}
