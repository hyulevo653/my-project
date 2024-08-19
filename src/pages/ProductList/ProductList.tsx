import { useState } from "react";
import AsideFilter from "./component/AsideFilter";
import Product from "./component/Product";
import SortProductList from "./component/SortProductList";
import useQueryConfig from "../../hooks/useQueryConfig";
import Pagination from "../../components/Pagination";


export default function ProductList() {
  const queryConfig = useQueryConfig()
  const productsPerPage = 20;
  const totalProducts = 50;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Trạng thái hiện tại của trang
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán các sản phẩm cần hiển thị
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = Array(totalProducts).fill(0).slice(startIndex, startIndex + productsPerPage);

  // Hàm thay đổi trang
  const handlePageChange = (page:number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
          <SortProductList queryConfig={queryConfig} pageSize={1} />
            <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {currentProducts.map((_, index) => (
                <div className='col-span-1' key={index}>
                  <Product />
                </div>
              ))}
            </div>
            <Pagination queryConfig={queryConfig} pageSize={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
