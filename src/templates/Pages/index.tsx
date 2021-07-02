import { CloseOutline } from '@styled-icons/evaicons-outline/'
import LinkWrapper from 'components/LinkWrapper'
import Link from 'next/link'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <Link href="/terms-of-service">Termos de Serviço</Link>
    </S.Body>
  </S.Content>
)

export default PageTemplate
