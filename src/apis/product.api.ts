import { Product, ProductList, ProductListConfig } from "../types/product.type"
import { SuccessResponse } from "../types/ultils.type"
import http from "../ultils/http"

const URL = 'products'
const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  }
}

export default productApi
