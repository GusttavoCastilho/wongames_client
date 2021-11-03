import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    const { container } = renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/Shopping Cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={3} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/i)).toBeInTheDocument()
  })

  it('should render with badge only if has positive numbers', () => {
    renderWithTheme(<CartIcon quantity={-1} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/-1/i)).not.toBeInTheDocument()
  })
})
