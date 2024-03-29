'use client'
import React from 'react'
import GoogleMapComponent from './GoogleMapComponent'
import { AiOutlineCompass, AiOutlinePhone, AiOutlineClockCircle } from 'react-icons/ai'
import { DownMotionComponent } from '@/components/commons/FramerMotion/Direction/DownMotion'
import { motion } from 'framer-motion'
import { RightMotionComponent } from '@/components/commons/FramerMotion/Direction/RightMotion'
import { LeftMotionComponent } from '@/components/commons/FramerMotion/Direction/LeftMotion'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'

export default function DirectionsComponent() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <div
        id="directions"
        className="whitespace-pre-wrap py-32 flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white overflow-hidden"
      >
        <DownMotionComponent component={motion.h1} className="text-4xl font-medium">
          {CompanyInfoData?.[9].direction?.[isEnglish]}
        </DownMotionComponent>

        {/* 광주본사 */}
        <div className="mt-32 flex flex-col p-5">
          <RightMotionComponent component={motion.h2} className="text-3xl lg:text-2xl font-medium mb-8">
            {CompanyInfoData?.[9].title?.[isEnglish]}
          </RightMotionComponent>

          <div className="flex flex-col lg:flex-row items-center">
            <RightMotionComponent component={motion.div}>
              <GoogleMapComponent lat={35.234260075696} lng={126.86200816162} />
            </RightMotionComponent>

            <LeftMotionComponent
              component={motion.div}
              className="w-[290px] h-[290px] md:w-[380px] md:h-[380px] lg:w-[27vw] lg:h-[27vw] bg-[#f1f1f1]"
            >
              <div className="w-full h-1/2 flex flex-row border-b-[1.5px] border-[#b3b3b3]">
                <div className="w-1/2 flex flex-col justify-center items-center text-center border-r-[1.5px] border-[#b3b3b3]">
                  <AiOutlineCompass className="w-7 h-7 hidden xl:flex" />
                  <p className="lg:mt-4 text-2xl lg:text-sm font-semibold mb-1 break-keep">
                    {CompanyInfoData?.[9].address?.[isEnglish]}
                  </p>
                  <p className="font-normal mt-1 text-xl lg:text-xs text-[#7e7e7e] break-keep">
                    {CompanyInfoData?.[9].addressDetail?.[isEnglish]}
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center text-center">
                  <AiOutlinePhone className="w-7 h-7 mb-3 hidden xl:flex" />
                  <p className="lg:mt-4 text-2xl lg:text-sm font-semibold mb-1 break-keep">
                    {CompanyInfoData?.[9].phone?.[isEnglish]}
                  </p>
                  <p className="text-xl lg:text-xs mt-1 text-[#7e7e7e]">
                    TEL:062-971-7983~6
                    <br />
                    Fax:062-971-7989
                  </p>
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
                <AiOutlineClockCircle className="w-7 h-7 hidden xl:flex" />
                <p className="lg:mt-4 text-2xl lg:text-sm font-semibold md:mb-1 break-keep">
                  {CompanyInfoData?.[9].guide?.[isEnglish]}
                </p>
                <p className="text-xl lg:text-xs text-[#7e7e7e] px-4 break-keep">
                  {CompanyInfoData?.[9].guideDetail?.[isEnglish]}
                </p>
              </div>
            </LeftMotionComponent>
          </div>
        </div>

        {/* 서울지점 */}
        <div className="mt-32 flex flex-col p-5">
          <RightMotionComponent component={motion.h2} className="text-3xl lg:text-2xl font-medium mb-8">
            {CompanyInfoData?.[10].title?.[isEnglish]}
          </RightMotionComponent>

          <div className="flex flex-col lg:flex-row items-center">
            <RightMotionComponent component={motion.div}>
              <GoogleMapComponent lat={37.549452033456} lng={127.05127894488} />
            </RightMotionComponent>

            <LeftMotionComponent
              component={motion.div}
              className="w-[290px] h-[290px] md:w-[380px] md:h-[380px] lg:w-[27vw] lg:h-[27vw] bg-[#f1f1f1] text-sm "
            >
              <div className="w-full h-1/2 flex flex-row border-b-[1.5px] border-[#b3b3b3]">
                <div className="w-1/2 flex flex-col justify-center items-center text-center border-r-[1.5px] border-[#b3b3b3]">
                  <AiOutlineCompass className="w-7 h-7 hidden xl:flex" />
                  <p className="lg:mt-4 text-2xl lg:text-sm font-semibold mb-1 break-keep">
                    {CompanyInfoData?.[10].address?.[isEnglish]}
                  </p>
                  <p className="font-normal mt-1 text-xl lg:text-xs text-[#7e7e7e] break-keep">
                    {CompanyInfoData?.[10].addressDetail?.[isEnglish]}
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center text-center">
                  <AiOutlinePhone className="w-7 h-7 hidden xl:flex" />
                  <p className="lg:mt-4 text-2xl lg:text-sm font-semibold mb-1 break-keep">
                    {CompanyInfoData?.[10].phone?.[isEnglish]}
                  </p>
                  <p className="font-normal mt-1 text-xl lg:text-xs text-[#7e7e7e]">
                    TEL:02-3409-7141 / 02-6965-7975
                    <br />
                    Fax:02-3436-9127
                  </p>
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
                <AiOutlineClockCircle className="w-7 h-7 hidden xl:flex" />
                <p className="md:mt-4 text-2xl lg:text-sm font-semibold mb-1">
                  {CompanyInfoData?.[10].guide?.[isEnglish]}
                </p>
                <p className="font-normal mt-1 text-xl lg:text-xs text-[#7e7e7e] ">
                  {CompanyInfoData?.[10].guideDetail?.[isEnglish]}
                </p>
              </div>
            </LeftMotionComponent>
          </div>
        </div>
      </div>
    </>
  )
}
