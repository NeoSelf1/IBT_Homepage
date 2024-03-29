import type { Metadata } from 'next'

import '../../globals.css'
import { notoSansKr } from '@/lib/fonts'
import AdminHeader from '@/components/admin/AdminHeader'

export const metadata: Metadata = {
  title: '(주)아이비티 어드민페이지',
  description: '(주)아이비티 어드민페이지',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.className} transition text-gray-950 flex`}>
        <AdminHeader />
        <div className="ml-64" />
        {children}
      </body>
    </html>
  )
}
