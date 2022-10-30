import { IGameCard } from 'src/types/gameCard';
import err_img from '../../assets/img/error_img/no_image_avaliable.jpg';
import './GameCard.scss';

interface IProps {
  game: IGameCard;
  callback: (elem: IGameCard) => void;
}

export default function CardGame({ game, callback }: IProps) {
  const { image, name, price, description, rating, discount } = game;

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
        <div className="game-card__rating">{rating}/5&#9733;</div>
        {discount ? <div className="game-card__discount">{discount}%</div> : <></>}
        <img className="front__img" src={image} onError={imgErrorHandler} alt=""></img>
        <p className="front__name">{name}</p>
      </div>
      <div className="game-card__back">
        <p className="back__description">{description}</p>
        <div className="back__add-panel">
          <p className="add-panel__price">{price} €</p>
          <button className="add-panel__add-button" onClick={clickHandler}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
