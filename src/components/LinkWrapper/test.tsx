import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe(`name of the group`, () => {
  it(`should render link and children `, () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/Anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
