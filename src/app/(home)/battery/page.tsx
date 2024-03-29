import BatteryPage from '@/components/battery/BatteryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '(주)아이비티 배터리',
  description: '배터리 제품 소개 페이지',
}

// 특정 Scroll 위치 이동(nicd, lithium)을 위해 useEffect -> CSR 필요
// CSR으로는 MetaData를 넣을 수 없음 -> <BatteryPage/> 컴포넌트로 분리하여 SSR 방식 계속 이용

const Battery_Page = () => {
  return <BatteryPage />
}

export default Battery_Page
