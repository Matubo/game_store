import { categories } from 'src/consts/categories';
import { Link } from 'react-router-dom';
import HeaderDropdownListElem from './HeaderDropdownListElem';
import HeaderListElem from './HeaderListElem';
import header_logo from '../../assets/img/header_icons/main-logo.png';
import cart_logo from '../../assets/img/header_icons/cart.png';
import user_logo from '../../assets/img/header_icons/user.png';
import './Header.scss';
import HeaderCartElem from './HeaderCartElem';
import { routesURL } from 'src/consts/routesURL';

const { cart, category, home, user } = routesURL;

export default function Header() {
  return (
    <div className="navbar-header">
      <Link to={home} className="navbar-header__main-logo main-logo">
        <img src={header_logo} alt="logo" className="main-logo__img"></img>
        <p className="main-logo__text">All games</p>
      </Link>
      <HeaderListElem link={home} text="home"></HeaderListElem>
      <HeaderDropdownListElem text="category" elements={categories}></HeaderDropdownListElem>
      <HeaderCartElem link={user} src={user_logo}></HeaderCartElem>
      <HeaderCartElem link={cart} src={cart_logo}></HeaderCartElem>
    </div>
  );
}
