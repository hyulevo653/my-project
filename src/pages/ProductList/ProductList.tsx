import NavBar from '../../components/NavBar'
import AsideFilter from './component/AsideFilter'
import Product from './component/Product'

export default function ProductList() {
  return (
    <>
    <div className='w-full'><NavBar /></div>
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Array(5).fill(0).map((_, index) => (
                <div className='col-span-1' key={index}>
                  <Product/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
