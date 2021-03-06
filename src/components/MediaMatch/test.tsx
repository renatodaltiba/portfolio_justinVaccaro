import { render, screen } from '@testing-library/react'
import { MediaMatch } from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('deve renderizar o componente da forma escondida se nenhum parametro for passado', () => {
    expect(desktopHeading.parentElement).toHaveStyle('display: none')
    expect(mobileHeading.parentElement).toHaveStyle('display: none')
  })

  it('deve renderizar o componente de forma visivel se o parametro for passado', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
