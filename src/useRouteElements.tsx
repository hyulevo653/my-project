import { useRoutes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import ProductList from './pages/ProductList'
import MainLayout from './layouts/MainLayout'
import { Suspense } from 'react'
import Main from './pages/Main'
import Article from './pages/Article/Article'
import path from './constants/path'
import ProductDetails from './pages/ProductDetails'

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
          <Main />
        </MainLayout>
      )
    },
    {
      path: '/bai-viet',
      element: (
        <MainLayout>
          <Article />
        </MainLayout>
      )
    },
    {
      path: path.productDetail,
      element: (
        <MainLayout>
          <ProductDetails />
        </MainLayout>
      )
    },
    {
      path: '/all-product',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
