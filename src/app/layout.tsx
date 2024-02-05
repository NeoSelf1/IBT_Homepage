import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cls, notoSansKr, roboto } from '@/lib/fonts'
import RecoilContextProvider from '@/context/recoil-context'
import ActiveSectionContextProvider from '@/context/active-section-context'

export const metadata: Metadata = {
  title: 'IBT',
  description:
    'IBT는 혁신적인 배터리 기술을 통해 지속 가능한 에너지 솔루션을 선도하며, 새로운 에너지 라이프스타일을 창조하고 있습니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cls(notoSansKr.className, roboto.variable)} transition  text-gray-950 relative pt-28`}>
        <ActiveSectionContextProvider>
          <RecoilContextProvider>{children}</RecoilContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
