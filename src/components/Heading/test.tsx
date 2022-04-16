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
})
