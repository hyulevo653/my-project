import { useRoutes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import ProductList from './pages/ProductList'
import MainLayout from './layouts/MainLayout'
import { Suspense } from 'react'
import Main from './pages/Main'
import Article from './pages/Article/Article'


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
          <Main/>
        </MainLayout>
        )
    },
    {
      path: '/bai-viet',
      element: (
      <MainLayout>
        <Article/>
      </MainLayout>
      )
  },
    {
      path: '/all-product',
      element: (
      <MainLayout>
        <ProductList/>
      </MainLayout>
      )
  }
  ])
  return routeElements
}
