import { categories } from 'src/consts/categories';
import { Link } from 'react-router-dom';
import HeaderDropdownListElem from './HeaderDropdownListElem';
import HeaderListElem from './HeaderListElem';
import header_logo from '../../assets/img/headerIcons/main-logo.png';
import cart_logo from '../../assets/img/headerIcons/cart.png';
import './Header.scss';
import HeaderCartElem from './HeaderCartElem';
import { routesURL } from 'src/consts/routesURL';

const { about, cart, category, home } = routesURL;

export default function Header() {
  return (
    <div className="navbar-header">
      <Link to={home} className="navbar-header__main-logo main-logo">
        <img src={header_logo} alt="logo" className="main-logo__img"></img>
        <p className="main-logo__text">Games mmm...</p>
      </Link>
      <HeaderListElem link={home} text="home"></HeaderListElem>
      <HeaderDropdownListElem text="category" elements={categories}></HeaderDropdownListElem>
      <HeaderListElem link={about} text="about"></HeaderListElem>
      <HeaderCartElem link={cart} src={cart_logo}></HeaderCartElem>
    </div>
  );
}
