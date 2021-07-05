import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoCircle } from '@styled-icons/bootstrap'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Minhas Viagens"
        description=" Um Simples proheto para mostrar minhas viagens pelo mundo, conteundo informações, fotos e marcação no Mapa."
        canonical="https://netlfy.minhas-viagens.com"
        openGraph={{
          url: 'https://netlfy.minhas-viagens.com',
          title: 'Minhas Viagens',
          description:
            'Um Simples proheto para mostrar minhas viagens pelo mundo, conteundo informações, fotos e marcação no Mapa.',
          images: [
            {
              url: 'https://netlfy.minhas-viagens.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Minhas Viagens'
            }
          ],
          site_name: 'Minhas Viagens'
        }}
      />

      <LinkWrapper href="/about">
        <InfoCircle size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
