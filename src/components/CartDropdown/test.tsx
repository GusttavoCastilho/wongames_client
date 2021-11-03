import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import itemsMock from 'components/CartList/mock'

import CartDropdown from '.'

const props = {
  items: itemsMock,
  total: 'R$ 300,00'
}

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    const { container } = renderWithTheme(<CartDropdown {...props} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${props.items.length}`)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown {...props} />)

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(`${props.items[0].title}`)).toBeInTheDocument()
  })
})
