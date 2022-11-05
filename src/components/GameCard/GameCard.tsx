import { useRef } from 'react';
import { IGameCard } from 'src/types/gameCard';

import './GameCard.scss';

interface IProps {
  game: IGameCard;
  callback: (elem: IGameCard) => void;
}

export default function GameCard({ game, callback }: IProps) {
  const { image, name, price, description, rating, discount } = game;
  const gameCardFrontRef = useRef<HTMLDivElement>();
  const gameCardBackRef = useRef<HTMLDivElement>();

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    callback(game);
  };

  const buttonFocusHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    gameCardFrontRef.current.style.cssText = 'transform: rotateY(180deg);';
    gameCardBackRef.current.style.cssText = 'transform: rotateY(360deg)';
  };

  const buttonFocusOutHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    gameCardFrontRef.current.style.cssText = 'transform: rotateY(0);';
    gameCardBackRef.current.style.cssText = 'transform: rotateY(180deg);';
  };

  return (
    <div
      className="search-result__game-card game-card"
      onMouseOver={buttonFocusHandler}
      onMouseLeave={buttonFocusOutHandler}
      onFocus={buttonFocusHandler}
    >
      <div className="game-card__front" ref={gameCardFrontRef}>
        <div className="game-card__rating">{rating}/5&#9733;</div>
        {discount ? <div className="game-card__discount">{discount}%</div> : <></>}
        <img className="front__img" src={image} alt="game-pic"></img>
        <p className="front__name">{name}</p>
      </div>
      <div className="game-card__back" ref={gameCardBackRef}>
        <p className="back__description">{description}</p>
        <div className="back__add-panel">
          <p className="add-panel__price">{price} €</p>
          <button
            className="add-panel__add-button"
            onClick={clickHandler}
            onFocus={buttonFocusHandler}
            onBlur={buttonFocusOutHandler}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
