import { Container } from 'components/Container'
import Empty from 'components/Empty'
import React from 'react'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not Found"
          description="Ops... this page does not exist. Go back to the store and enjoy our offers."
          hasLink
        />
      </Container>
    </Base>
  )
}