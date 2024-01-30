'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function LogoComponent() {
  const [logos, setLogos] = useState([
    '/intro/logo/KORAIL.png',
    '/intro/logo/서울교통공사.png',
    '/intro/logo/인천광역시 도시철도건설본부.png',
    '/intro/logo/부산교통공사.png',
    '/intro/logo/대구도시철도공사.png',
    '/intro/logo/광주철도건설본부.png',
  ])
  const [logos2, setLogs2] = useState([
    '/intro/logo/TOVICA.png',
    '/intro/logo/LIG넥스원.png',
    '/intro/logo/plug.png',
    '/intro/logo/SK E&S.png',
    '/intro/logo/Sk plug hyverse.png',
    '/intro/logo/LG 화학.png',
  ])
  const [logos3, setLogs3] = useState([
    '/intro/logo/TOTAL.png',
    '/intro/logo/posco.png',
    '/intro/logo/한국전력공사.png',
    '/intro/logo/Hanhwa.png',
    '/intro/logo/한화솔루션.png',
  ])

  const [logos4, setLogs4] = useState([
    '/intro/logo/DAEATI.png',
    '/intro/logo/포스코케미칼.png',
    '/intro/logo/국방기술품질원.png',
    '/intro/logo/KAI 한국항공우주산업.png',
    '/intro/logo/한화디펜스.png',
    '/intro/logo/한화시스템.png',
  ])

  const [logos5, setLogs5] = useState([
    '/intro/logo/HYUNDAI MOVEX.png',
    '/intro/logo/HYUNDAI STEEL.png',
    '/intro/logo/HYUNDAI.png',
    '/intro/logo/stx Corporation.png',
    '/intro/logo/롯데케미칼.png',
    '/intro/logo/한화오션.png',
  ])

  const [logos6, setLogs6] = useState([
    '/intro/logo/퍼스텍.png',
    '/intro/logo/HYUNDAI Rotem.png',
    '/intro/logo/현대중공업.png',
    '/intro/logo/롯데정보통신.png',
    '/intro/logo/LS ELECTRIC.png',
    '/intro/logo/VINSSEN.png',
  ])

  return (
    <>
      <div className="w-full flex flex-col items-center py-20 overflow-hidden">
        <h1 className="text-6xl mb-24 font-medium">협력 / 제휴사</h1>
        <h2 className="text-4xl mb-7 font-bold">함께하는 IBT</h2>
        <p className="text-lg text-center mb-16 font-light">
          IBT는 신뢰를 바탕으로 국내외 기업들과
          <br />
          함께 고민하고 해결해나갑니다.
        </p>
        <div>
          {/* 1번째 줄 */}
          <div className="inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {logos.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={350} height={60} layout="responsive" />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {logos.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={320} height={60} layout="responsive" />
                </li>
              ))}
            </ul>
          </div>
          {/* 두번째 줄 */}
          <div className="inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {logos2.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={350} height={60} layout="responsive" />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {logos2.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={350} height={60} layout="responsive" />
                </li>
              ))}
            </ul>
          </div>

          {/* 세번째 줄 */}
          <div className="inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {logos3.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={250} height={60} layout="responsive" />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {logos3.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={250} height={60} layout="responsive" />
                </li>
              ))}
            </ul>
          </div>

          {/* 네번째 줄 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {logos4.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={250} height={60} layout="responsive" />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {logos4.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={250} height={60} layout="responsive" />
                </li>
              ))}
            </ul>
          </div>

          {/* 다섯번째 줄 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {logos5.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={250} height={60} layout="responsive" />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {logos5.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={250} height={60} layout="responsive" />
                </li>
              ))}
            </ul>
          </div>

          {/* 여섯번째 줄 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {logos6.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={250} height={60} layout="responsive" />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {logos6.map((logo, index) => (
                <li key={index} className="min-w-[300px]">
                  <Image src={logo} alt="" width={250} height={60} layout="responsive" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  )
}