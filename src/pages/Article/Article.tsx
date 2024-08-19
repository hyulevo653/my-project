import React from 'react'
import Pagination from '../../components/Pagination'
import useQueryConfig from '../../hooks/useQueryConfig'

export default function Article() {
  const queryConfig = useQueryConfig()
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
          <div className='lg:col-span-9'>
            <div className='flex flex-col lg:flex-row pt-3 pb-3'>
              <div className='w-full lg:w-[30%]'>
                <img
                  className='img-article w-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgcKPo_SiRgc_3q-8BRwWGAzb8Tujxw9Rgw&s'
                  alt='Đồ gỗ đẹp'
                />
              </div>
              <div className='w-full lg:w-[70%] pt-4 lg:pt-0'>
                <h2 className='capitalize p-1'>Đồ gỗ đẹp</h2>
                <p className='text-sm line-clamp-4 p-1 leading-6'>
                  Bạn sẽ dễ dàng tìm thấy những món đồ nội thất như bàn ghế, tủ, giường,...được làm từ gỗ xưa cực kỳ
                  bền, không hề mối mọt và có không bị ảnh hưởng bởi các yếu tố khác từ bên ngoài môi trường...
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row pt-3 pb-3'>
              <div className='w-full lg:w-[30%]'>
                <img
                  className='img-article w-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgcKPo_SiRgc_3q-8BRwWGAzb8Tujxw9Rgw&s'
                  alt='Đồ gỗ đẹp'
                />
              </div>
              <div className='w-full lg:w-[70%] pt-4 lg:pt-0'>
                <h2 className='capitalize p-1'>Đồ gỗ đẹp</h2>
                <p className='text-sm line-clamp-4 p-1 leading-6'>
                  Bạn sẽ dễ dàng tìm thấy những món đồ nội thất như bàn ghế, tủ, giường,...được làm từ gỗ xưa cực kỳ
                  bền, không hề mối mọt và có không bị ảnh hưởng bởi các yếu tố khác từ bên ngoài môi trường...
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row pt-3 pb-3'>
              <div className='w-full lg:w-[30%]'>
                <img
                  className='img-article w-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgcKPo_SiRgc_3q-8BRwWGAzb8Tujxw9Rgw&s'
                  alt='Đồ gỗ đẹp'
                />
              </div>
              <div className='w-full lg:w-[70%] pt-4 lg:pt-0'>
                <h2 className='capitalize p-1'>Đồ gỗ đẹp</h2>
                <p className='text-sm line-clamp-4 p-1 leading-6'>
                  Bạn sẽ dễ dàng tìm thấy những món đồ nội thất như bàn ghế, tủ, giường,...được làm từ gỗ xưa cực kỳ
                  bền, không hề mối mọt và có không bị ảnh hưởng bởi các yếu tố khác từ bên ngoài môi trường...
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row pt-3 pb-3'>
              <div className='w-full lg:w-[30%]'>
                <img
                  className='img-article w-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgcKPo_SiRgc_3q-8BRwWGAzb8Tujxw9Rgw&s'
                  alt='Đồ gỗ đẹp'
                />
              </div>
              <div className='w-full lg:w-[70%] pt-4 lg:pt-0'>
                <h2 className='capitalize p-1'>Đồ gỗ đẹp</h2>
                <p className='text-sm line-clamp-4 p-1 leading-6'>
                  Bạn sẽ dễ dàng tìm thấy những món đồ nội thất như bàn ghế, tủ, giường,...được làm từ gỗ xưa cực kỳ
                  bền, không hề mối mọt và có không bị ảnh hưởng bởi các yếu tố khác từ bên ngoài môi trường...
                </p>
              </div>
            </div>

            <div><Pagination queryConfig={queryConfig} pageSize={3} /></div>
          </div>
          <div className='lg:col-span-3 mt-6 lg:mt-0'>
            <div className='sticky top-20'>
              <h1 className='text-black font-bold uppercase'>Chuyên mục</h1>
              <div className='my-4 h-[3px] bg-gray-300 m-0 w-1/2 sm:w-1/3' />
              <ul>
                <div className='h-[1px] bg-gray-300 m-0 w-full sm:w-1/3' />
                <li className='p-3'>Bàn ghế ăn</li>
                <div className='h-[1px] bg-gray-300 m-0 w-full sm:w-1/3' />
                <li className='p-3'>Bàn thờ</li>
                <div className='h-[1px] bg-gray-300 m-0  w-full sm:w-1/3' />
                <li className='p-3'>Đồng hồ cây</li>
                <div className='h-[1px] bg-gray-300 m-0  w-full sm:w-1/3' />
                <li className='p-3'>Kệ tivi</li>
                <div className='h-[1px] bg-gray-300 m-0  w-full sm:w-1/3' />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
