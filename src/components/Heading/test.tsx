import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('deve renderizar o componente', () => {
    renderWithTheme(<Heading>Hello World</Heading>)

    expect(
      screen.getByRole('heading', { name: /Hello World/i })
    ).toBeInTheDocument()
  })

  it('deve renderizar o componente com um ponto dar cor primaria', () => {
    renderWithTheme(<Heading dots>Hello World</Heading>)

    expect(screen.getByText('.')).toHaveStyle({
      color: '#FD5956'
    })
  })
})
