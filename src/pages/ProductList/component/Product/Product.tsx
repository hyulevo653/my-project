
export default function Product() {
  return (
    // <Link to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}>
    <a href='/'>
        <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src='https://xuongdogogiagoc.com/wp-content/uploads/2021/03/ban-ghe-au-a-11.jpg'
            alt='ban ghe cao cap'
            className='absolute top-0 left-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-xs line-clamp-2'>Ban ghe</div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span className='text-sm'>500000</span>
            </div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'>₫</span>
              <span className='text-sm'>100000</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            {/* <ProductRating rating={product.rating} /> */}
            <div className='ml-2 text-sm'>
              <span>1000</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </a>
    // </Link>
  )
}
