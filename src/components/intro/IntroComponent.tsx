import { contents } from '@/lib/data'
import ContentBlock from './IntroContentBlock.client'
import IntroComponent5 from './IntroComponent5.client'
import IntroComponent6 from './IntroComponent6'
import IntroComponent7 from './IntroComponent7'

export default function IntroComponent() {
  return (
    <>
      {/* 1st ~ 4th */}
      {contents.map((content, index) => (
        <ContentBlock key={index} title={content.title} text={content.text} background={content.background} />
      ))}

      {/* 5th */}
      <IntroComponent5 />

      {/* 6th */}
      <IntroComponent6 />

      {/* 7th */}
      <IntroComponent7 />
    </>
  )
}