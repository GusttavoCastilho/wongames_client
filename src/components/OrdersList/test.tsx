import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'

describe('<OrdersList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<OrdersList />)
  })
})
