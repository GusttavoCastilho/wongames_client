import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

const props = {
  items: [
    {
      src: '/img/games/cyberpunk-1.jpg',
      label: 'Cyberpunk'
    }
  ]
}

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery {...props} />)
  })
})
