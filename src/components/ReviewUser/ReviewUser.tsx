export default function ReviewUser() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
    <p className='font-serif text-center uppercase mb-4 text-2xl sm:text-3xl mt-4'>Cảm nhận của khách hàng</p>
    <div className='my-4 h-[1px] bg-gray-300 mx-auto w-1/2 sm:w-1/3' />
    <div id='myCarousel' className='carousel slide w-full sm:w-[650px] relative' data-ride='carousel'>
      {/* Carousel indicators */}
      <ol className='carousel-indicators'>
        <li data-target='#myCarousel' data-slide-to={0} className='active' />
        <li data-target='#myCarousel' data-slide-to={1} />
        <li data-target='#myCarousel' data-slide-to={2} />
      </ol>
      {/* Wrapper for carousel items */}
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <div className='img-box mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Pckk7DKco-agC6JuHW5X2eXIvJGT59nj-Q&s'
              alt='Customer'
              className='w-full h-full object-cover'
            />
          </div>
          <p className='testimonial text-center px-2 sm:px-4 mt-4 w-full'>
            "Sản phẩm gỗ nội thất thật sự đẹp và chất lượng! Màu sắc và vân gỗ tự nhiên mang lại cảm giác ấm cúng cho ngôi nhà của tôi. Thiết kế tỉ mỉ, chắc chắn, và tinh tế. Tôi rất hài lòng với sự lựa chọn này và chắc chắn sẽ giới thiệu cho bạn bè."
          </p>
          <p className='overview text-center mt-2'>
            <b>Chị Beyonce</b> Seo Analyst at{' '}
            <a href='#' className='text-orange-500'>
              OsCorp Tech.
            </a>
          </p>
          <div className='star-rating text-center'>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
            </ul>
          </div>
        </div>
        <div className='carousel-item'>
          <div className='img-box mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaZ1yfHlUF7cmsxqWX_yNfov6QrBFNX2cTg&s'
              alt='Customer'
              className='w-full h-full object-cover'
            />
          </div>
          <p className='testimonial text-center px-2 sm:px-4 mt-4'>
            Tôi rất ấn tượng với sự tinh tế trong từng chi tiết của sản phẩm. Gỗ được xử lý kỹ lưỡng, bề mặt mịn màng và không có khuyết điểm. Chất lượng vượt trội so với giá cả. Đồ gỗ này đã làm cho không gian sống của tôi trở nên sang trọng và ấm áp hơn.
          </p>
          <p className='overview text-center mt-2'>
            <b>Chị Taylor</b> Media Analyst at{' '}
            <a href='#' className='text-orange-500'>
              SkyNet Inc.
            </a>
          </p>
          <div className='star-rating text-center'>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star-o' />
              </li>
            </ul>
          </div>
        </div>
        <div className='carousel-item'>
          <div className='img-box mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden'>
            <img
              src='https://www.elle.vn/wp-content/uploads/2014/07/08/Justin-Bieber-0.jpg'
              alt='Customer'
              className='w-full h-full object-cover'
            />
          </div>
          <p className='testimonial text-center px-2 sm:px-4 mt-4'>
            Đồ gỗ nội thất này không chỉ đẹp mà còn rất bền bỉ. Tôi đặc biệt thích thiết kế đơn giản nhưng hiện đại, phù hợp với nhiều phong cách trang trí. Dịch vụ chăm sóc khách hàng cũng rất tuyệt vời, tư vấn nhiệt tình và giao hàng nhanh chóng. Tôi hoàn toàn hài lòng và sẽ tiếp tục ủng hộ.
          </p>
          <p className='overview text-center mt-2'>
            <b>Anh Justin</b> Web Developer at{' '}
            <a href='#' className='text-orange-500'>
              Circle Ltd.
            </a>
          </p>
          <div className='star-rating text-center'>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star' />
              </li>
              <li className='list-inline-item'>
                <i className='fa fa-star-half-o' />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Carousel controls */}
      <a className='carousel-control-prev hidden md:block' href='#myCarousel' data-slide='prev'>
        <i className='fa fa-angle-left' />
      </a>
      <a className='carousel-control-next hidden md:block' href='#myCarousel' data-slide='next'>
        <i className='fa fa-angle-right' />
      </a>
    </div>
  </div>
  )
}
