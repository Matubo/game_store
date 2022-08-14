import { useEffect, useState } from 'react';
import { Ages } from '../../consts/filterForm';
import './AgeForm.scss';

interface IProps {
  onChange: (values: Ages) => void;
}

export default function AgeForm({ onChange }: IProps) {
  const [value, setValue] = useState(Ages.All);

  const changeValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Ages;
    setValue(value);
    onChange(value);
  };

  return (
    <div className="age">
      <p className="age__heading">age</p>
      <select className="age__select age-select" onChange={changeValueHandler} value={value}>
        <option className="age-select__option" value={Ages.All} selected>
          all
        </option>
        <option className="age-select__option" value={Ages.Three}>
          {Ages.Three}
        </option>
        <option className="age-select__option" value={Ages.Six}>
          {Ages.Six}
        </option>
        <option className="age-select__option" value={Ages.Twelve}>
          {Ages.Twelve}
        </option>
        <option className="age-select__option" value={Ages.Sixteen}>
          {Ages.Sixteen}
        </option>
        <option className="age-select__option" value={Ages.Eighteen}>
          {Ages.Eighteen}
        </option>
      </select>
    </div>
  );
}
