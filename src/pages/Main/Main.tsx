import { Helmet } from 'react-helmet-async'
import Description from '../../components/DescriptionWeb'
import MainContent from '../../components/MainContent'
import NavBar from '../../components/NavBar'
import News from '../../components/News'
import Procedure from '../../components/Procedure'
import ReviewUser from '../../components/ReviewUser/ReviewUser'


export default function Main() {
  return (
    <>
    <Helmet>
        <title>Trang chủ | Đồ gỗ</title>
        <meta name='description' content='Trang chủ' />
    </Helmet>
    <div className='w-full'><NavBar /></div>
    <div className='container'><Description/></div>
    <div className='w-full bg-gray-100'><News/></div>
    <div className='container'>
        <MainContent/>
    </div>
    <div className='bg-gray-200'>
      <Procedure />
    </div>
    <div className='container bg-white'>
      <ReviewUser />
    </div>
    </>
  )
}
