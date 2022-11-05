import { Ages } from '../../consts/filterForm';
import './AgeForm.scss';

interface IProps {
  onChange: (values: Ages) => void;
  age: Ages;
}

export default function AgeForm({ onChange, age }: IProps) {
  const changeValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Ages;
    onChange(value);
  };

  return (
    <div className="age">
      <p className="age__heading">age</p>
      <select className="age__select age-select" onChange={changeValueHandler} value={age}>
        <option className="age-select__option" value={Ages.All}>
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
      </select>
    </div>
  );
}
