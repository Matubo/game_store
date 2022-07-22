import { IGameCard } from 'src/types/gameCard';
import GameCard from '../GameCard/GameCard';
import './SearchResult.scss';

interface IProps {
  games: IGameCard[];
  callback: (elem: IGameCard) => void;
}

export default function SearchResult({ games, callback }: IProps) {
  return (
    <div className="search-result">
      {games.map((elem) => (
        <GameCard key={elem.id} game={elem} callback={callback}></GameCard>
      ))}
    </div>
  );
}
