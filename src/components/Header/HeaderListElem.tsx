import { Link } from 'react-router-dom';
import './HeaderListElem.scss';

interface IProps {
  link: string;
  text: string;
}

export default function HeaderListElem({ link, text }: IProps) {
  return (
    <Link to={link} className="navbar-header__item header-item" key={link}>
      <p className="header-item__text">{text}</p>
    </Link>
  );
}
