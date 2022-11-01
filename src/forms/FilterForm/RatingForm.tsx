import { Rating } from 'src/consts/filterForm';
import './RatingForm.scss';

interface IProps {
  onChange: (value: Rating) => void;
  rating: Rating;
}

export default function RatingForm({ onChange, rating }: IProps) {
  const changeValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Rating;
    onChange(value);
  };
  return (
    <div className="rating">
      <p className="rating__heading">rating</p>
      <select className="rating__select rating-select" onChange={changeValueHandler} value={rating}>
        <option className="rating-select__option" value={Rating.All}>
          all
        </option>
        <option className="rating-select__option" value={Rating.Two}>
          {Rating.Two}
        </option>
        <option className="rating-select__option" value={Rating.Three}>
          {Rating.Three}
        </option>
        <option className="rating-select__option" value={Rating.Four}>
          {Rating.Four}
        </option>
        <option className="rating-select__option" value={Rating.Five}>
          {Rating.Five}
        </option>
      </select>
    </div>
  );
}
