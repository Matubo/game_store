import { IGameCard } from 'src/types/gameCard';

import './GameCard.scss';

interface IProps {
  game: IGameCard;
  callback: (elem: IGameCard) => void;
}

export default function GameCard({ game, callback }: IProps) {
  const { image, name, price, description, rating, discount } = game;

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    callback(game);
  };

  return (
    <div className="search-result__game-card game-card">
      <div className="game-card__front">
        <div className="game-card__rating">{rating}/5&#9733;</div>
        {discount ? <div className="game-card__discount">{discount}%</div> : <></>}
        <img className="front__img" src={image} alt="game-pic"></img>
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
