import React from 'react'

export default function Checkout() {
  return (
    <div className='py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-7'>
            <span className='uppercase font-bold text-xl'>Thông tin thanh toán</span>
            <div className='mt-3'>
              <div className='flex'>
                <div className='w-[50%]'>
                  <span>Tên *</span>
                  <div className='mt-3'>
                    <input className='border mr-3 mt-1 p-2 w-[95%]' type='text' placeholder='Nhập tên' />
                  </div>
                </div>
                <div className='w-[50%]'>
                  <span>Họ *</span>
                  <div className='mt-3'>
                    <input className='border mr-3 mt-1 p-2 w-full' type='text' placeholder='Nhập họ' />
                  </div>
                </div>
              </div>
              <div className='w-full mt-3'>
                <span className='mt-3'>Tên công ty *(tùy chọn)</span>
                <div className='mt-3'>
                  <input
                    className='border mr-3 mt-1 p-2 w-full'
                    type='text'
                    placeholder='Nhập tên công ty(người mua)'
                  />
                </div>
              </div>
              <div className='w-full mt-3'>
                <span className='mt-3'>Địa chỉ *</span>
                <div className='mt-3'>
                  <input className='border mr-3 mt-1 p-2 w-full' type='text' placeholder='Địa chỉ' />
                </div>
              </div>
              <div className='w-full mt-3'>
                <span className='mt-3'>Mã bưu điện *</span>
                <div className='mt-3'>
                  <input className='border mr-3 mt-1 p-2 w-full' type='text' placeholder='Mã bưu điện' />
                </div>
              </div>
              <div className='w-full mt-3'>
                <span className='mt-3'>Tỉnh / Thành phố *</span>
                <div className='mt-3'>
                  <input className='border mr-3 mt-1 p-2 w-full' type='text' placeholder='Nhập tỉnh/thành phố' />
                </div>
              </div>
              <div className='w-full mt-3'>
                <span className='mt-3'>Số điện thoại *</span>
                <div className='mt-3'>
                  <input className='border mr-3 mt-1 p-2 w-full' type='text' placeholder='Nhập số điện thoại' />
                </div>
              </div>
              <div className='w-full mt-3'>
                <span className='mt-3'>Địa chỉ email *</span>
                <div className='mt-3'>
                  <input className='border mr-3 mt-1 p-2 w-full' type='text' placeholder='Nhập địa chỉ email' />
                </div>
              </div>
              <div className='w-full mt-3'>
                <label>Ghi chú đơn hàng (tùy chọn)</label>
                <div>
                  <textarea
                    className='border border-gray-300 rounded-md p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none'
                    placeholder='Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa chỉ giao hàng cụ thể'
                    name='postContent'
                    rows={4}
                    cols={87.5}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-5'>
            <div className='border border-gray-500 p-4'>
              <div className='p-2'>
                <div>
                  <span className='uppercase font-bold text-xl '>Đơn hàng của bạn</span>
                  <div className='flex justify-between font-bold border-b-2  border-gray-300 pb-3 pt-3'>
                    <div>
                      <span className='uppercase'>Sản phẩm</span>
                    </div>
                    <div>
                      <span className='uppercase'>Tạm tính</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between font-bold border-b border-gray-300 pb-3 pt-3'>
                    <div>
                      <span className='capitalize text-base font-normal'>Bộ bàn ghế nghê bản đình  <span className='font-normal text-gray-500'>x1</span></span>
                    </div>
                    <div>
                      <span className='text-red-500'>500000 ₫</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between font-bold border-b border-gray-300 pb-3 pt-3'>
                    <div>
                      <span className='capitalize text-gray-500'>Giao hàng</span>
                    </div>
                    <div>
                      <span className='text-sm font-normal'>Giao hàng miễn phí</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between font-bold border-b-2 border-gray-300 pb-3 pt-3'>
                    <div>
                      <span className='capitalize text-base font-normal'>Tổng</span>
                    </div>
                    <div>
                      <span className='text-red-500'>500000 ₫</span>
                    </div>
                  </div>
                </div>
                <div className='pt-3 pb-3'>
                  <span className='font-bold pt-3 pb-3'>Thanh toán khi nhận hàng  </span>
                  <p className='pt-3'>Xin kính mời quý khách đến cửa hàng để được trải nghiệm sản phẩm tốt nhất</p>
                </div>
                <div>
                  <button className='p-3 bg-yellow-500 text-white'>Đặt hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
