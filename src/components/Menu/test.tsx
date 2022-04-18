import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('deve renderizar o componente no tema default', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/Contributors/i)).toBeInTheDocument()
    expect(screen.getByText(/About me/i)).toBeInTheDocument()
    expect(screen.getByText(/Services/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
