import Image from 'next/image'
import { NextSeo } from 'next-seo'

import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} -Minhas Viagens`}
        description={
          place.description?.text ||
          'Um Simples proheto para mostrar minhas viagens pelo mundo, conteundo informações, fotos e marcação no Mapa.'
        }
        canonical="https://netlfy.minhas-viagens.com"
        openGraph={{
          url: 'https://netlfy.minhas-viagens.com',
          title: `${place.name}-Minhas Viagens`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          ></S.Body>

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
