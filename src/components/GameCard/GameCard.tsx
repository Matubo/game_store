import { IGameCard } from 'src/types/gameCard';
import err_img from '../../assets/img/error_img/no_image_available.png';
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

  const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    e.currentTarget.src = err_img;
  };

  return (
    <div className="search-result__game-card game-card" onClick={clickHandler}>
      <img className="game-card__img" src={image} onError={imgErrorHandler}></img>
      <p className="game-card__name">{name}</p>
      <p className="game-card__price">{price}</p>
    </div>
  );
}
