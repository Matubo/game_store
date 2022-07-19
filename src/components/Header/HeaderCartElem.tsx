import { Link } from 'react-router-dom';
import './HeaderCartElem.scss';

interface iProps {
  src: string;
  link: string;
}

export default function HeaderCartElem({ link, src }: iProps) {
  return (
    <Link to={link} className="navbar-header__item header-cart" key={link}>
      <img className="header-cart__img" src={src}></img>
    </Link>
  );
}
