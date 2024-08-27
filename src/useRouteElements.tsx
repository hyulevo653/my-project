import { useRoutes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import ProductList from './pages/ProductList'
import MainLayout from './layouts/MainLayout'
import { Suspense } from 'react'
import Main from './pages/Main'
import Article from './pages/Article/Article'
import path from './constants/path'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '*',
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
    },
    {
      path: '/cart',
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    },
    {
      path: '/checkout',
      element: (
        <MainLayout>
          <Checkout />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
