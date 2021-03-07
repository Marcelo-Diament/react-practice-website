import { Link } from 'react-router-dom'
import { ToggleButton } from '../Button'
import './style.css'

const Header = ({ ...props }) => {
  const { themeClick } = props
  return (
    <section className="header">
      <h1 className="header__title">HEADER</h1>
        <nav className="header__nav">
          <Link to="/" className="header__nav__item">Início</Link>
          <Link to="/sobre" className="header__nav__item">Sobre</Link>
          <Link to="/categorias" className="header__nav__item">Categorias</Link>
          <Link to="/promocoes" disabled className="header__nav__item--disabled">Promoções</Link>
          <Link to="/contato" className="header__nav__item">Contato</Link>
          <ToggleButton className="header__nav__item" themeClick={themeClick} />
        </nav>
    </section>
  )
}

export default Header