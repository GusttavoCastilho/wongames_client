import Base from 'templates/Base'

import Heading from 'components/Heading'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import Showcase from 'components/Showcase'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
