import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoCircle } from '@styled-icons/bootstrap'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoCircle size={32} aria-label="about" />
      </LinkWrapper>
      <Map />
    </>
  )
}
