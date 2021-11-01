import CardsList from 'components/CardsList'
import Profile from 'templates/Profile'

import mockCards from 'components/PaymentOptions/mock'
import { PaymentOptionsProps } from 'components/PaymentOptions'

export default function Cards({ cards }: PaymentOptionsProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
