export default function MainContent() {
  const fakeData = [
    {
      image: 'https://thegioidogo.com/wp-content/uploads/2023/01/ban-ghe-phong-khach-2-3ao7fm2zg49zpfasnvcufe.jpg',
      image2: 'https://tongkhodogothachthat.com/data/news/pho-ban-do-go-ha-noi.jpg',
      description:
        'Đồ gỗ là một phần quan trọng trong nội thất và trang trí nhà cửa, mang lại sự ấm cúng và sang trọng cho không gian sống. '
    },
    {
      image: 'https://tongkhodogothachthat.com/data/news/pho-ban-do-go-ha-noi.jpg',
      image2: 'https://thegioidogo.com/wp-content/uploads/2023/01/ban-ghe-phong-khach-2-3ao7fm2zg49zpfasnvcufe.jpg',
      description:
        'Đồ gỗ là một phần quan trọng trong nội thất và trang trí nhà cửa, mang lại sự ấm cúng và sang trọng cho không gian sống. '
    },
    {
      image: 'https://thegioidogo.com/wp-content/uploads/2023/01/ban-ghe-phong-khach-2-3ao7fm2zg49zpfasnvcufe.jpg',
      image2: 'https://tongkhodogothachthat.com/data/news/pho-ban-do-go-ha-noi.jpg',
      description:
        'Đồ gỗ là một phần quan trọng trong nội thất và trang trí nhà cửa, mang lại sự ấm cúng và sang trọng cho không gian sống. '
    },
    {
      image: 'https://tongkhodogothachthat.com/data/news/pho-ban-do-go-ha-noi.jpg',
      image2: 'https://thegioidogo.com/wp-content/uploads/2023/01/ban-ghe-phong-khach-2-3ao7fm2zg49zpfasnvcufe.jpg',
      description:
        'Đồ gỗ là một phần quan trọng trong nội thất và trang trí nhà cửa, mang lại sự ấm cúng và sang trọng cho không gian sống. '
    }
  ]
  const fakeDataTV = [
    {
      image: 'https://noithatminhkhoi.com/upload/sanpham/large/ke-de-tivi-go-tu-nhien-hien-dai--ktv914-1679469506-c222aa.jpg',
      image2: 'https://morelux.vn/wp-content/uploads/2021/10/ke-tivi-go-oc-cho-ktv12.jpg',
      description:
        'Đồ gỗ là một phần quan trọng trong nội thất và trang trí nhà cửa, mang lại sự ấm cúng và sang trọng cho không gian sống. '
    },
    {
      image: 'https://morelux.vn/wp-content/uploads/2021/10/ke-tivi-go-oc-cho-ktv12.jpg',
      image2: 'https://noithatminhkhoi.com/upload/sanpham/large/ke-de-tivi-go-tu-nhien-hien-dai--ktv914-1679469506-c222aa.jpg',
      description:
        'Đồ gỗ là một phần quan trọng trong nội thất và trang trí nhà cửa, mang lại sự ấm cúng và sang trọng cho không gian sống. '
    },
    {
        image: 'https://noithatminhkhoi.com/upload/sanpham/large/ke-de-tivi-go-tu-nhien-hien-dai--ktv914-1679469506-c222aa.jpg',
        image2: 'https://morelux.vn/wp-content/uploads/2021/10/ke-tivi-go-oc-cho-ktv12.jpg',
        description:
          'Đồ gỗ là một phần quan trọng trong nội thất và trang trí nhà cửa, mang lại sự ấm cúng và sang trọng cho không gian sống. '
      },
      {
        image: 'https://morelux.vn/wp-content/uploads/2021/10/ke-tivi-go-oc-cho-ktv12.jpg',
        image2: 'https://noithatminhkhoi.com/upload/sanpham/large/ke-de-tivi-go-tu-nhien-hien-dai--ktv914-1679469506-c222aa.jpg',
        description:
          'Đồ gỗ là một phần quan trọng trong nội thất và trang trí nhà cửa, mang lại sự ấm cúng và sang trọng cho không gian sống. '
      },
  ]
  return (
    <div>
      {/* nội thất phòng khách */}
      <div className='px-4 sm:px-6 lg:px-8'>
    <p className='font-serif text-center uppercase mb-4 text-2xl sm:text-3xl mt-4'>Nội thất phòng khách</p>
    <div className='my-4 h-[1px] bg-gray-300 mx-auto w-1/2 sm:w-1/3' />
    <div>
      <div className='flex justify-between'>
        <div className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <p className='uppercase text-xl'>Bàn ghế phòng khách</p>
        </div>
        <div className='flex'>
          <a className='text-lg text-blue-500' href='/all-product'>
            Xem tất cả
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </div>
      </div>
      <div className='my-4 h-[1px] bg-gray-300 mx-auto w-full' />
      <p className='pb-4'>
        Việt Nam chúng em ngoài đồ mây ra còn có thêm cả những sản phẩm đồ nội thất gỗ mang phong cách Rustic nhẹ
        nhàng và độc đáo.
      </p>
      <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {fakeData.map((item, index) => (
            <div key={index} className='mb-4 pr-3'>
              <div className='relative w-full h-52'>
                <img
                  src={item.image}
                  alt=''
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0'
                />
                <img
                  src={item.image2}
                  alt=''
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100'
                />
              </div>
              <p className="pt-2 bold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div>
      <div className='flex justify-between'>
        <div className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <p className='uppercase text-xl'>Kệ ti vi</p>
        </div>
        <div className='flex'>
          <a className='text-lg text-blue-500' href='/all-product'>
            Xem tất cả
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </div>
      </div>
      <div className='my-4 h-[1px] bg-gray-300 mx-auto w-full' />
      <p className='pb-4'>
        Việt Nam chúng em ngoài đồ mây ra còn có thêm cả những sản phẩm đồ nội thất gỗ mang phong cách Rustic nhẹ
        nhàng và độc đáo.
      </p>
      <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {fakeDataTV.map((item, index) => (
            <div key={index} className='mb-4 pr-3'>
              <div className='relative w-full h-52'>
                <img
                  src={item.image}
                  alt=''
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0'
                />
                <img
                  src={item.image2}
                  alt=''
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100'
                />
              </div>
              <p className="pt-2 bold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
      {/* nội thất phòng thờ */}
      <div className='px-4 sm:px-6 lg:px-8'>
    <p className='font-serif text-center uppercase mb-4 text-2xl sm:text-3xl mt-4'>Nội thất phòng thờ</p>
    <div className='my-4 h-[1px] bg-gray-300 mx-auto w-1/2 sm:w-1/3' />
    <div>
      <div className='flex justify-between'>
        <div className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <p className='uppercase text-xl'>Án gian</p>
        </div>
        <div className='flex'>
          <a className='text-lg text-blue-500' href='/all-product'>
            Xem tất cả
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </div>
      </div>
      <div className='my-4 h-[1px] bg-gray-300 mx-auto w-full' />
      <p className='pb-4'>
        Việt Nam chúng em ngoài đồ mây ra còn có thêm cả những sản phẩm đồ nội thất gỗ mang phong cách Rustic nhẹ
        nhàng và độc đáo.
      </p>
      <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {fakeData.map((item, index) => (
            <div key={index} className='mb-4 pr-3'>
              <div className='relative w-full h-52'>
                <img
                  src={item.image}
                  alt=''
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0'
                />
                <img
                  src={item.image2}
                  alt=''
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100'
                />
              </div>
              <p className="pt-2 bold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div>
      <div className='flex justify-between'>
        <div className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <p className='uppercase text-xl'>Sập thờ</p>
        </div>
        <div className='flex'>
          <a className='text-lg text-blue-500' href='/all-product'>
            Xem tất cả
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </div>
      </div>
      <div className='my-4 h-[1px] bg-gray-300 mx-auto w-full' />
      <p className='pb-4'>
        Việt Nam chúng em ngoài đồ mây ra còn có thêm cả những sản phẩm đồ nội thất gỗ mang phong cách Rustic nhẹ
        nhàng và độc đáo.
      </p>
      <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {fakeDataTV.map((item, index) => (
            <div key={index} className='mb-4 pr-3'>
              <div className='relative w-full h-52'>
                <img
                  src={item.image}
                  alt=''
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0'
                />
                <img
                  src={item.image2}
                  alt=''
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100'
                />
              </div>
              <p className="pt-2 bold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
