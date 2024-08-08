import { useState } from "react";
import AsideFilter from "./component/AsideFilter";
import Product from "./component/Product";


export default function ProductList() {
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
            <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {currentProducts.map((_, index) => (
                <div className='col-span-1' key={index}>
                  <Product />
                </div>
              ))}
            </div>
            <div className='mt-4 flex justify-center'>
              <button
                className='px-4 py-2 mx-1 bg-gray-300 rounded'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className='px-4 py-2 mx-1 bg-gray-300 rounded'
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
