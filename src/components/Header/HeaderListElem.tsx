import { Link } from 'react-router-dom';

interface IProps {
  link: string;
  text: string;
}

export default function HeaderListElem({ link, text }: IProps) {
  return (
    <div className="navbar-header__item header-item" key={text}>
      <Link to={link} className="header-item__link">
        {text}
      </Link>
    </div>
  );
}
