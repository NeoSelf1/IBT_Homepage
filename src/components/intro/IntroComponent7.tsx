'use client'

import SlickSlider from '../commons/SlickSlider'

export default function IntroComponent7(): JSX.Element {
  return (
    <>
      <div className="w-full flex flex-col min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="flex flex-col h-full w-full text-center align-middle justify-center">
          {/* top container */}
          <div className="h-1/2 min-h-[600px] flex flex-col justify-center align-middle">
            <p className="font-[350] text-[14px] tracking-[0.2px] mt-[180px]">Dynamic Growth</p>
            <h2 className="font-bold text-[40px] mt-1">News</h2>
            <p className="font-light text-[16px] mt-5">IBT Road</p>
          </div>

          {/* below container */}
          <div className="h-1/2 flex justify-center align-middle">
            <SlickSlider />
          </div>
        </div>
      </div>
    </>
  )
}