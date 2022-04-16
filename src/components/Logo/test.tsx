import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('deve renderizar o componente', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Justin/i).parentElement).toBeInTheDocument()
  })

  it('deve renderizar o logo no tamanho normal', () => {
    renderWithTheme(<Logo size="medium" />)

    expect(screen.getByLabelText(/Justin/i).parentElement).toHaveStyle({
      width: '26.2rem'
    })
  })

  it('deve renderizar o logo no tamanho pequeno', () => {
    renderWithTheme(<Logo size="small" />)

    expect(screen.getByLabelText(/Justin/i).parentElement).toHaveStyle({
      width: '9.6rem'
    })
  })
})
