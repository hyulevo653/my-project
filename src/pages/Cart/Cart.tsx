import React from 'react'
import QuantityController from '../../components/QuantityController'
import { formatCurrency } from '../../ultils/utils'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import path from '../../constants/path'

export default function Cart() {
  const isAllChecked = false
  const navigate = useNavigate()
  const handleCheck = (purchaseIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {}
  const handleCheckAll = () => {}
  const handleDelete = () => {}
  const toCheckout = () => {
    navigate(path.checkout)
  }

  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container'>
        <>
          <div className='overflow-auto'>
            <div className='min-w-[1000px]'>
              <div className='grid grid-cols-12 rounded-sm bg-white py-3 px-9 text-sm capitalize text-gray-500 shadow'>
                <div className='col-span-6'>
                  <div className='flex items-center'>
                    <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 accent-orange'
                        checked={isAllChecked}
                        onChange={handleCheckAll}
                      />
                    </div>
                    <div className='flex-grow text-black'>Sản phẩm</div>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='grid grid-cols-5 text-center'>
                    <div className='col-span-2'>Đơn giá</div>
                    <div className='col-span-1'>Số lượng</div>
                    <div className='col-span-1'>Số tiền</div>
                    <div className='col-span-1'>Thao tác</div>
                  </div>
                </div>
              </div>

              <div className='my-3 rounded-sm bg-white p-5 shadow'>
                <div className='mb-5 grid grid-cols-12 items-center rounded-sm border border-gray-200 bg-white py-4 px-4 text-center text-sm text-gray-500 first:mt-0'>
                  <div className='col-span-6'>
                    <div className='flex'>
                      <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                        <input type='checkbox' className='h-5 w-5 accent-orange' onChange={handleCheck(2)} />
                      </div>
                      <div className='flex-grow'>
                        <div className='flex'>
                          <Link className='h-20 w-20 flex-shrink-0' to=''>
                            <img
                              alt='do go'
                              src='https://xuongdogogiagoc.com/wp-content/uploads/2019/01/IMG_1523.jpg'
                            />
                          </Link>
                          <div className='flex-grow px-2 pt-1 pb-2'>
                            <Link to='' className='text-left line-clamp-2'>
                              Do go test
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <div className='grid grid-cols-5 items-center'>
                      <div className='col-span-2'>
                        <div className='flex items-center justify-center'>
                          <span className='text-gray-300 line-through'>₫{formatCurrency(26500000)}</span>
                          <span className='ml-3'>₫{formatCurrency(25000000)}</span>
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <QuantityController max={100} value={1} classNameWrapper='flex items-center' />
                      </div>
                      <div className='col-span-1'>
                        <span className='text-orange'>₫{formatCurrency(0)}</span>
                      </div>
                      <div className='col-span-1'>
                        <button className='bg-none text-black transition-colors hover:text-orange'>Xóa</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-4  shadow sm:flex-row sm:items-center'>
            <div className='flex items-center'>
              <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                <input
                  type='checkbox'
                  className='h-5 w-5 accent-orange'
                  checked={isAllChecked}
                  onChange={handleCheckAll}
                />
              </div>
              <button className='mx-3 border-none bg-none' onClick={handleCheckAll}>
                Chọn tất cả ({1})
              </button>
              <button className='mx-3 border-none bg-none'>Xóa</button>
            </div>

            <div className=' flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center'>
              <div>
                <div className='flex items-center sm:justify-end'>
                  <div>Tổng thanh toán ({1} sản phẩm):</div>
                  <div className='ml-2 text-2xl text-orange'>₫{formatCurrency(25000000)}</div>
                </div>
                <div className='flex items-center text-sm sm:justify-end'>
                  <div className='text-gray-500'>Tiết kiệm</div>
                  <div className='ml-6 text-orange'>₫{formatCurrency(1500000)}</div>
                </div>
              </div>
              <Button
                className=' flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0'
                onClick={toCheckout}
              >
                Mua hàng
              </Button>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}