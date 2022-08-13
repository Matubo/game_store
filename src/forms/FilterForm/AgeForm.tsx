import { useEffect, useState } from 'react';
import { Ages } from '../../consts/filterForm';
import './AgeForm.scss';

interface IProps {
  onChange: (values: Ages) => void;
}

export default function AgeForm({ onChange }: IProps) {
  const [checked, setChecked] = useState(Ages.All);

  const checkedHandler = (value: Ages) => {
    setChecked(value);
    onChange(value);
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div className="age">
      <p>Age</p>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Ages.All);
          }}
          name="age__form"
          checked={checked == Ages.All}
        ></input>
        <label>All</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Ages.Three);
          }}
          name="age__form"
          checked={checked == Ages.Three}
        ></input>
        <label>{Ages.Three}</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Ages.Six);
          }}
          name="age__form"
          checked={checked == Ages.Six}
        ></input>
        <label>{Ages.Six}</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Ages.Twelve);
          }}
          name="age__form"
          checked={checked == Ages.Twelve}
        ></input>
        <label>{Ages.Twelve}</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Ages.Sixteen);
          }}
          name="age__form"
          checked={checked == Ages.Sixteen}
        ></input>
        <label>{Ages.Sixteen}</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Ages.Eighteen);
          }}
          name="age__form"
          checked={checked == Ages.Eighteen}
        ></input>
        <label>{Ages.Eighteen}</label>
      </div>
    </div>
  );
}
