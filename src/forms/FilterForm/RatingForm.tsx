import { useState } from 'react';
import { Rating } from 'src/consts/filterForm';
import './RatingForm.scss';

interface IProps {
  onChange: (value: Rating) => void;
}

export default function RatingForm({ onChange }: IProps) {
  const [value, setValue] = useState(Rating.All);

  const changeValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Rating;
    setValue(value);
    onChange(value);
  };
  return (
    <div className="rating">
      <p className="rating__heading">rating</p>
      <select className="rating__select rating-select" onChange={changeValueHandler} value={value}>
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
