import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  dots?: boolean
}

const Heading = ({ children, dots = false }: HeadingProps) => (
  <S.Wrapper>
    {children}
    {!!dots && <span>.</span>}
  </S.Wrapper>
)

export default Heading
