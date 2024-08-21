import { Link } from "react-router-dom";
import path from "../../../../constants/path";
import { generateNameId } from "../../../../ultils/utils";

export default function Product() {
  const product = {
    name : "Đồ gỗ",
    _id: "sanpham1252",
    images : ['https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg', 'https://api-ecom.duthanhduoc.com/images/b997dac2-2674-4e20-b5ee-459566b077e7.jpg', 'https://api-ecom.duthanhduoc.com/images/ac328d77-6014-4a2d-8626-924ac35876df.jpg', 'https://api-ecom.duthanhduoc.com/images/5061fefa-bded-4fb0-80e5-3623656a4816.jpg', 'https://api-ecom.duthanhduoc.com/images/02c08a86-4d9b-437b-ae02-f1d49cf2933b.jpg', 'https://api-ecom.duthanhduoc.com/images/12c405e3-b24f-46ef-8969-54050e1022e9.jpg', 'https://api-ecom.duthanhduoc.com/images/d448057c-3d3d-45d2-a9bc-e984bc80555f.jpg'],
    price: 18000000,
    price_before_discount: 20000000,
    quantity: 20,
    sold: 12,
    view: 1000,
    description: "Đồ gỗ đẹp",
    category: {
        _id: "dasd26223",
        name: "Đồ thờ"
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-twyE9-aZ6vMwgP-HQIiIbvUTtV_poVa_zg&s",
    createAt: "21/8/2024",
    updatedAt: "21/8/2024"
  }
  return (
    <Link to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}>
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
    </Link>
  )
}
