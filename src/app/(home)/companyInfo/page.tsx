import CompanyInfoComponent from '@/components/companyInfo/CompanyInfoComponent'
import DirectionsComponent from '@/components/companyInfo/Directions/DirectionsComponent'
import FloatingButton from '@/components/companyInfo/Floating'
import LogoComponent from '@/components/companyInfo/LogoComponent'

import TechnicalComponent from '@/components/companyInfo/Technical/TechnicalComponent'
import CooperativeComponent from '@/components/companyInfo/companyHistory/CooperativeComponent'
import HistoryComponent from '@/components/companyInfo/companyHistory/HistoryComponent'

export const metadata = {
  title: 'Company Info',
  description: 'IBT CompanyInfo 회사소개 페이지',
}

export default function IntroPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <FloatingButton />
      <div className="w-[min(92%,48rem)] overflow-hidden gap-y-72">
        {/* 1st company info section */}
        <CompanyInfoComponent />
        {/* 2nd company history section */}
        <HistoryComponent />
        {/* 3th partnership section */}
        <CooperativeComponent />
        {/* <LogoComponent /> */}
        {/* 4th Technical certification section */}
        <TechnicalComponent />
        {/* 5th directions section*/}
        <DirectionsComponent />
      </div>
    </div>
  )
}
