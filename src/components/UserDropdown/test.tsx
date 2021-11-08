import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    const { container } = renderWithTheme(<UserDropdown username="jhon" />)

    expect(screen.getByText(/jhon/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="jhon" />)

    userEvent.click(screen.getByText(/jhon/i))

    expect(screen.getByText(/my profile/i)).toBeInTheDocument()

    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })
})
