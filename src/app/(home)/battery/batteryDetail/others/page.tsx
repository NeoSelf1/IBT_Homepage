import FloatingButton from '@/components/battery/Floating'
import CheckerBoard from '@/components/battery/CheckerBoard'
import { Metadata } from 'next'
import BatteryDetail from '@/components/battery/BatteryDetail'
import { fetchPageData } from '@/lib/action'

export const metadata: Metadata = {
  title: '(주)아이비티 기타 배터리 제품',
  description: 'IBT 배터리 제품 소개 페이지',
}

const BatteryOthersPage = async () => {
  // const product = await fetchPageData()
  const product = [
    {
      id: 0,
      name: ['항공장애등용', 'Aerial disability lights'],
      img: '/image/기타/other1.png',
    },
    {
      id: 1,
      name: ['개폐기용', 'switch'],
      img: '/image/기타/other2.png',
    },
    {
      id: 2,
      name: ['통신용 5G 정류기', '5G rectifier for communication'],
      img: '',
    },
  ]

  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      <BatteryDetail title={['기타', 'Others']} explain={[]} />
      {/* 이미지-설명 박스 */}
      <CheckerBoard
        image1={product[0].img}
        title1={product[0].name}
        image2={product[1].img}
        title2={product[1].name}
        image3={product[2].img}
        title3={product[2].name}
      />
    </>
  )
}

export default BatteryOthersPage
