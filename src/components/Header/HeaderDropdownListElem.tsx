interface IDropdownElement {
  link: string;
  text: string;
  iconSrc?: string;
}

interface IProps {
  text: string;
  elements?: IDropdownElement[];
}

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderDropdownListElem({ text, elements }: IProps) {
  const [active, setActive] = useState(false);
  return (
    <div
      className="navbar-header__item header-item"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <p className="header-item__link">{text}</p>
      {active ? (
        <div className="header-item__dropdown-menu dropdown-menu">
          {elements.map((elem) => {
            const { link, iconSrc, text } = elem;
            return (
              <div className="dropdown-menu__item" key={text}>
                <Link to={link} key={text} className="dropdowb-menu__link">
                  <img src={iconSrc} className="dropdowb-menu__icon"></img>
                  <p className="dropdowb-menu__text">{text}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
