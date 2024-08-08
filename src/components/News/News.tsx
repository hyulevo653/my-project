import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef } from 'react'
export default function News() {
  const sliderRef = useRef<Slider>(null)

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true, // Bật chế độ autoplay
    autoplaySpeed: 3000, // Thay đổi slide sau mỗi 3 giây
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  }
  const items = [
    {
      image: 'https://static.kinhtedothi.vn/images/upload/2021/12/25/a54bef79-3925-4eaf-911f-5e2ab82d89ca.jpg',
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      image: 'https://static.kinhtedothi.vn/images/upload/2021/12/25/a54bef79-3925-4eaf-911f-5e2ab82d89ca.jpg',
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      image: 'https://static.kinhtedothi.vn/images/upload/2021/12/25/a54bef79-3925-4eaf-911f-5e2ab82d89ca.jpg',
      title: 'Title 3',
      description: 'Description 3'
    },
    {
      image: 'https://static.kinhtedothi.vn/images/upload/2021/12/25/a54bef79-3925-4eaf-911f-5e2ab82d89ca.jpg',
      title: 'Title 4',
      description: 'Description 4'
    },
    {
      image: 'https://static.kinhtedothi.vn/images/upload/2021/12/25/a54bef79-3925-4eaf-911f-5e2ab82d89ca.jpg',
      title: 'Title 5',
      description: 'Description 5'
    },
    {
      image: 'https://static.kinhtedothi.vn/images/upload/2021/12/25/a54bef79-3925-4eaf-911f-5e2ab82d89ca.jpg',
      title: 'Title 6',
      description: 'Description 6'
    }
  ]

  return (
    <div className='container mb-2'>
      <p className='font-serif items-center text-center uppercase mb-4 text-3xl mt-2 pt-4'>Tin tức</p>
      <div className='my-4 h-[1px] bg-gray-300 mx-auto w-1/2' />
      <div className='relative'>
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <div key={index} className='p-2'>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <img src={item.image} alt={item.title} className='w-full h-40 object-cover' />
                <div className='p-4 bg-gray-100'>
                  <h3 className='text-lg font-semibold'>{item.title}</h3>
                  <p className='text-sm text-gray-600'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <button
          className='absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-gray-100 hover:text-black text-white p-2 '
          onClick={() => sliderRef.current?.slickPrev()}
        >
          &lt;
        </button>
        <button
          className='absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-gray-100 hover:text-black text-white p-2 '
          onClick={() => sliderRef.current?.slickNext()}
        >
          &gt;
        </button> */}
      </div>
    </div>
  )
}
