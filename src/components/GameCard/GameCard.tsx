import { IGameCard } from 'src/types/gameCard';
import err_img from '../../assets/img/error_img/no_image_available.png';
import card_filter from '../../assets/img/filters/card-filter.png';
import './GameCard.scss';

interface IProps {
  game: IGameCard;
  callback: (elem: IGameCard) => void;
}

export default function CardGame({ game, callback }: IProps) {
  const { image, name, price, description } = game;

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    callback(game);
  };

  const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    e.currentTarget.src = err_img;
  };

  return (
    <div className="search-result__game-card game-card">
      <div className="game-card__front">
        <img className="front__img" src={image} onError={imgErrorHandler}></img>
        <p className="front__name">{name}</p>
      </div>
      <div className="game-card__back">
        <p className="back__description">{description}</p>
        <p className="back__price">{price}€</p>
        <button className="back__add-button" onClick={clickHandler}>
          +
        </button>
      </div>
    </div>
  );
}
