'use client'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
import Contribution1 from './Contribution1'
import Contribution2 from './Contribution2'
import './Contribution.css'
import { LeftMotionComponent } from '../commons/FramerMotion/Direction/LeftMotion'
import { motion } from 'framer-motion'
import { SocialProps } from '@/lib/types'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { ESG500Data } from '@/lib/data'

export default function SocialContributionComponent({ data }: SocialProps) {
  const [activeTab, setActiveTab] = useState('tab1')
  const isActive = (tabName: string) => activeTab === tabName
  const isEnglish = useRecoilValue(isEnglishState)

  const ViewContents = () => {
    switch (activeTab) {
      case 'tab1':
        return <Contribution1 data={data} />
      case 'tab2':
        return <Contribution2 data={data} />
      default:
        return <Contribution1 data={data} />
    }
  }
  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveTab(event.currentTarget.value)
  }

  return (
    <>
      <div className="md:mt-40 lg:flex lg:flex-col items-center lg:items-end lg:mr-[8%] overflow-hidden">
        <div className="lg:w-3/4 flex flex-col items-center">
          <div className="max-w-[35rem] mt-48 md:mt-0">
            <LeftMotionComponent component={motion.div}>
              <Image
                src="/ESG500/Social_Contribution.svg" // 이미지 경로
                alt="Social_Contribution"
                width={430} // 너비
                height={194} // 높이
                // layout="responsive" // 레이아웃 옵션
                className="lg:my-24"
              />
            </LeftMotionComponent>
          </div>

          {/* Tabs */}
          <LeftMotionComponent component={motion.div} className="mt-20 lg:mt-0 w-full flex items-center justify-center">
            <button
              className={`w-1/3 h-11 tab-button1 ${isActive('tab1') ? 'active-tab1' : ''}`}
              value="tab1"
              onClick={onClickButton}
            >
              {ESG500Data?.[1].tab1?.[isEnglish]}
            </button>
            <button
              className={`w-1/3 h-11  tab-button2 ${isActive('tab2') ? 'active-tab2' : ''}`}
              onClick={() => setActiveTab('tab2')}
            >
              {ESG500Data?.[1].tab2?.[isEnglish]}
            </button>
          </LeftMotionComponent>

          <div className="tab-contents">
            <ViewContents />
          </div>
        </div>
      </div>
    </>
  )
}
