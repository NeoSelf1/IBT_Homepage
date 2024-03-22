import { hydrogenListData } from '@/lib/data'
import { Metadata } from 'next'
import { fetchPageData } from '@/lib/action'
import HydrogenDetail from '@/components/hydrogen/HydrogenDetail'
import HydrogenItem from '@/components/hydrogen/HydrogenItem'

export const metadata: Metadata = {
  title: '(주)아이비티 수소 프로젝트',
  description: 'IBT 참여 수소 프로젝트',
}

const SystemPage = async () => {
  const data = await fetchPageData(0)

  return (
    <>
      {/* 오른쪽 플로팅 버튼
      <FloatingButton /> */}
      {/* 상단 녹색 텍스트 부분 - 배터리 중분류(방산용 Ni-Cd) 소개 */}
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
        <div className="w-[min(92%,1280px)]">
          <HydrogenDetail title={hydrogenListData[1].title} explain={hydrogenListData[1].explain} />
          {/* 소분류 컴포넌트 */}
          {/* mainCategoryIndex는 중분류를 구분하기 위해 사용 -> 방산용 Nicd:0, 산업용 Nicd:1, 동력용 Lithium:2, 에너지저장용 Lithium:3 */}
          <HydrogenItem detailInfo={data.data} mainCategoryIndex={0} />
        </div>
      </div>
    </>
  )
}

export default SystemPage
