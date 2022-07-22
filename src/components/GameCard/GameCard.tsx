import { IGameCard } from 'src/types/gameCard';
import './GameCard.scss';

interface IProps {
  game: IGameCard;
  callback: (elem: IGameCard) => void;
}

export default function CardGame({ game, callback }: IProps) {
  const { image, name, price } = game;

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    callback(game);
  };

  return (
    <div className="search-result__game-card game-card" onClick={clickHandler}>
      <img className="game-card__img" src={image}></img>
      <p className="game-card__name">{name}</p>
      <p className="game-card__price">{price}</p>
    </div>
  );
}
