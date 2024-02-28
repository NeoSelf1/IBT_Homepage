import FloatingButton from '@/components/battery/Floating'
import { batteryList } from '@/lib/data'
import { Metadata } from 'next'
import { fetchPageData } from '@/lib/action'
import HydrogenDetail from '@/components/hydrogen/HydrogenDetail'
import HydrogenItem from '@/components/hydrogen/HydrogenItem'

export const metadata: Metadata = {
  title: 'About Power Lithium',
  description: 'IBT 동력용 리튬 배터리 제품 소개 페이지',
}

const BatteryPowerPage = async () => {
  const data = await fetchPageData(2)

  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      {/* 상단 녹색 텍스트 부분 - 배터리 중분류(동력용 Lithium) 소개 */}
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
        <div className="w-[min(92%,1280px)]">
          <HydrogenDetail title={batteryList[2].title} explain={batteryList[2].explain} />
          {/* 소분류 컴포넌트 */}
          {/* mainCategoryIndex는 중분류를 구분하기 위해 사용 -> 방산용 Nicd:0, 산업용 Nicd:1, 동력용 Lithium:2, 에너지저장용 Lithium:3 */}
          <HydrogenItem detailInfo={data.data} mainCategoryIndex={2} />
        </div>
      </div>
    </>
  )
}

export default BatteryPowerPage
