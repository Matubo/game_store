import './RatingComponent.scss';

interface IProps {
  count: number;
}

export default function RatingComponent({ count }: IProps) {
  return <div className="game-card__rating">{count}/5&#9733;</div>;
}
