import classNames from 'classnames'
import { Link } from 'react-router-dom'
import path from '../../../../constants/path'
import Button from '../../../../components/Button'

export default function AsideFilter() {
  return (
    <div className='py-4'>
      <Link to={path.home} className={classNames('flex items-center font-bold')}>
        <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        {/* {t('aside filter.all categories')} */}
        <h2>Tất cả danh mục</h2>
      </Link>
      <div className='my-4 h-[1px] bg-gray-300' />
      <ul>
        <li className='py-2 pl-2'>
          <Link to='/' className={classNames('relative px-2')}>
            <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange'>
              <polygon points='4 3.5 0 0 0 7' />
            </svg>
            Bàn ghế
          </Link>
        </li>
        <li className='py-2 pl-2'>
          <Link to='/' className={classNames('relative px-2')}>
            <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange'>
              <polygon points='4 3.5 0 0 0 7' />
            </svg>
            Tủ thờ
          </Link>
        </li>
      </ul>
      <Link to={path.home} className='mt-4 flex items-center font-bold uppercase'>
        <svg
          enableBackground='new 0 0 15 15'
          viewBox='0 0 15 15'
          x={0}
          y={0}
          className='mr-3 h-4 w-3 fill-current stroke-current'
        >
          <g>
            <polyline
              fill='none'
              points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        {/* {t('aside filter.filter search')} */}
        <h2>Bộ lọc tìm kiếm</h2>
      </Link>
      <div className='my-4 h-[1px] bg-gray-300' />
      <div className=''>
        <div>Khoảng giá</div>
        <form className='mt-2'>
          <div className='flex'>
          <div className='flex items-start'>
            <input
              type='number'
              className='grow p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
              placeholder='₫ TỪ'
            />
          </div>
          <div className='mx-2 mt-2 shrink-0'>-</div>
          <div className='flex items-start'>
            <input
              type='number'
              className='grow p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
              placeholder='₫ ĐẾN'
            />
          </div>
          </div>

          <Button className='flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80 mt-3'>
            Áp dụng
          </Button>
        </form>
      </div>
      <div className='my-4 h-[1px] bg-gray-300' />
      <Button className='flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80'>
        Xóa tất cả
      </Button>
    </div>
  )
}
