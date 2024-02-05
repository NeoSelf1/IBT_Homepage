'use client'

import React, { useState } from 'react'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { batteryList } from '@/lib/data'

type Props = {
  title: string
  explain1: string
  explain2: string
  explain3: string
  explain4: string
}

export default function BatteryDetail({ title, explain1, explain2, explain3, explain4 }: Props) {
  return (
    <>
      <div className="flex justify-center w-full text-center">
        <div className="text-6xl font-medium text-primary-green">{title}</div>
      </div>
      {/* <div className="w-full text-center bg-black">
        <h1 className="text-6xl font-medium mt-40 text-primary-green">{title}</h1>
      </div> */}
      <div className="flex flex-col my-40 items-center">
        <div className="text-3xl text-center font-normal text-primary-green leading-extra-loose">
          <p>{explain1}</p>
          <p>{explain2}</p>
          <p>{explain3}</p>
          <p>{explain4}</p>
        </div>
      </div>
    </>
  )
}