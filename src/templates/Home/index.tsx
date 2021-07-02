import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoCircle } from '@styled-icons/bootstrap'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoCircle size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
