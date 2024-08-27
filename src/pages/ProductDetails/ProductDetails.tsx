import React, { useEffect, useMemo, useRef, useState } from 'react'
import { formatCurrency, formatNumberToSocialStyle, rateSale } from '../../ultils/utils'
import QuantityContronller from '../../components/QuantityController'
import DOMPurify from 'dompurify'
import Product from '../ProductList/component/Product'

export default function ProductDetails() {
  const testSanphamtuongtu = Array.from({ length: 6 }, (_, index) => ({
    _id: index
  }))

  const product = {
    name: 'Đồ gỗ',
    images: [
      'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
      'https://api-ecom.duthanhduoc.com/images/b997dac2-2674-4e20-b5ee-459566b077e7.jpg',
      'https://api-ecom.duthanhduoc.com/images/ac328d77-6014-4a2d-8626-924ac35876df.jpg',
      'https://api-ecom.duthanhduoc.com/images/5061fefa-bded-4fb0-80e5-3623656a4816.jpg',
      'https://api-ecom.duthanhduoc.com/images/02c08a86-4d9b-437b-ae02-f1d49cf2933b.jpg',
      'https://api-ecom.duthanhduoc.com/images/12c405e3-b24f-46ef-8969-54050e1022e9.jpg',
      'https://api-ecom.duthanhduoc.com/images/d448057c-3d3d-45d2-a9bc-e984bc80555f.jpg'
    ],
    price: 18000000,
    price_before_discount: 20000000,
    quantity: 20,
    sold: 12,
    view: 1000,
    description: 'Đồ gỗ đẹp',
    category: {
      _id: 'dasd26223',
      name: 'Đồ thờ'
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-twyE9-aZ6vMwgP-HQIiIbvUTtV_poVa_zg&s',
    createAt: '21/8/2024',
    updatedAt: '21/8/2024'
  }
  const imageRef = useRef<HTMLImageElement>(null)
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [buyCount, setBuyCount] = useState(1)
  const [activeImage, setActiveImage] = useState('')
  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product])

  const chooseActive = (img: string) => {
    setActiveImage(img)
  }

  const handldeBuyCount = (value: number) => {
    setBuyCount(value)
  }

  const currentImages = useMemo(() => {
    return product ? product?.images.slice(...currentIndexImages) : []
  }, [product, currentIndexImages])

  const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const image = imageRef.current as HTMLImageElement
    const { naturalHeight, naturalWidth } = image
    // const { offsetX, offsetY } = event.nativeEvent
    const offsetX = event.pageX - (rect.x + window.scrollX)
    const offsetY = event.pageY - (rect.y + window.scrollY)
    const top = offsetY * (1 - naturalHeight / rect.height)
    const left = offsetX * (1 - naturalWidth / rect.width)
    image.style.width = naturalWidth + 'px'
    image.style.height = naturalHeight + 'px'
    image.style.maxWidth = 'unset'
    image.style.top = top + 'px'
    image.style.left = left + 'px'
  }

  const next = () => {
    if (currentIndexImages[1] < product?.images.length) {
      setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const prev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  const handleRemoveZoom = () => {
    imageRef.current?.removeAttribute('style')
  }

  return (
    <div className='bg-gray-200 py-6'>
      <div className='bg-white p-4 shadow'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-9'>
            <div className='md:col-span-5'>
              <div
                className='relative w-full pt-[100%] shadow overflow-hidden'
                onMouseMove={handleZoom}
                onMouseLeave={handleRemoveZoom}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  ref={imageRef}
                  className='absolute top-0 left-0 bg-white w-full h-full object-cover'
                />
              </div>
              <div className='relative mt-4 grid grid-cols-5 gap-1'>
                <button
                  className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                  onClick={prev}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                  </svg>
                </button>
                {currentImages.map((img) => {
                  const isActive = img === activeImage
                  return (
                    <div className='relative w-full pt-[100%]' key={img} onMouseEnter={() => chooseActive(img)}>
                      <img
                        src={img}
                        alt={product.name}
                        className='absolute top-0 left-0 cursor-pointer bg-white w-full h-full object-cover'
                      />
                      {isActive && <div className='absolute inset-0 border-2 border-orange'></div>}
                    </div>
                  )
                })}
                <button
                  className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                  onClick={next}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='md:col-span-7'>
              <h1 className='text-lg md:text-xl font-medium uppercase'>{product.name}</h1>
              <div className='mt-4 md:mt-8 flex items-center'>
                <div className='mx-4 h-4 w-[1px] bg-gray-300 hidden md:block'></div>
                <div>
                  <span>{formatNumberToSocialStyle(product.sold)}</span>
                  <span className='ml-1 text-gray-500'>Đã bán</span>
                </div>
              </div>
              <div className='mt-4 md:mt-8 flex items-center bg-gray-50 px-5 py-4'>
                <div className='text-gray-500 line-through'>₫{formatCurrency(product.price_before_discount)}</div>
                <div className='ml-3 text-2xl md:text-3xl font-medium text-orange'>{formatCurrency(product.price)}</div>
                <div className='ml-4 rounded-sm bg-orange px-1 py-[2px] text-xs font-semibold uppercase text-white'>
                  {rateSale(product.price_before_discount, product.price)} giảm giá
                </div>
              </div>
              <div className='mt-4 md:mt-8 flex items-center'>
                <div className='capitalize text-gray-500'>Số lượng</div>
                <QuantityContronller
                  onDecrease={handldeBuyCount}
                  onIncrease={handldeBuyCount}
                  onType={handldeBuyCount}
                  value={buyCount}
                  max={product.quantity}
                />
                <div className='ml-4 md:ml-6 text-sm text-gray-500'>{product.quantity} sản phẩm có sẵn</div>
              </div>
              <div className='mt-4 md:mt-8 flex items-center'>
                <button className='flex h-10 md:h-12 items-center justify-center rounded-sm border border-orange bg-orange/10 px-4 md:px-5 capitalize text-orange shadow-sm hover:bg-orange/5'>
                  <img
                    alt='icon-add-to-cart'
                    className='mr-2 md:mr-[10px] h-5 w-5 fill-current stroke-orange text-orange'
                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b96050554b3be4feea08.svg'
                  />
                  Thêm vào giỏ hàng
                </button>
                <button className='ml-2 md:ml-4 flex h-10 md:h-12 min-w-[4rem] md:min-w-[5rem] items-center justify-center rounded-sm bg-orange px-4 md:px-5 capitalize text-white shadow-sm outline-none hover:bg-orange/90'>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 bg-white p-4 shadow'>
        <div className='container mx-auto'>
          <div className='rounded bg-gray-50 text-lg p-4 capitalize text-slate-700'>Mô tả sản phẩm</div>
          <div className='mx-4 mt-8 md:mt-12 mb-4 text-sm leading-loose'>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description)
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='container mx-auto'>
          <div className='uppercase text-gray-400'>CÓ THỂ BẠN CŨNG THÍCH</div>
          <div className='mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
            {testSanphamtuongtu.map((product) => (
              <div className='col-span-1' key={product._id}>
                <Product />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
