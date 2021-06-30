import { CloseOutline } from '@styled-icons/evaicons-outline/'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Minhas Viagens</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nulla
        quo ipsum, eaque alias quis optio nesciunt dignissimos, sunt qui nisi.
        Sapiente, porro repellat. Ex voluptatum nisi tenetur ab iusto!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate

CloseOutline
