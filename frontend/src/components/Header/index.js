import { ToggleButton } from '../Button'
import './style.css'

const Header = ({ ...props }) => {
  const { themeClick } = props
  return (
    <section className="header">
      <h1 className="header__title">HEADER</h1>
      <nav className="header__nav">
        <a href="/" className="header__nav__item">Início</a>
        <a href="/sobre" className="header__nav__item">Sobre</a>
        <a href="/categorias" className="header__nav__item">Categorias</a>
        <a href="/promocoes" disabled className="header__nav__item--disabled">Promoções</a>
        <a href="/contato" className="header__nav__item">Contato</a>
        <ToggleButton className="header__nav__item" themeClick={themeClick} />
      </nav>
    </section>
  )
}

export default Header