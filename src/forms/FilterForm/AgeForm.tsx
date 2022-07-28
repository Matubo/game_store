import { useState } from 'react';
import { Ages } from '../../consts/filterForm';

export default function AgeForm() {
  const [checked, setChecked] = useState(Ages.All);

  const checkedHandler = (e: Ages) => {
    setChecked(e);
  };

  return (
    <div>
      <input
        type="radio"
        onClick={() => {
          checkedHandler(Ages.All);
        }}
        name="age__form"
        checked={checked == Ages.All}
      ></input>
      <label>All</label>
      <input
        type="radio"
        onClick={() => {
          checkedHandler(Ages.Three);
        }}
        name="age__form"
        checked={checked == Ages.Three}
      ></input>
      <label>{Ages.Three}</label>
      <input
        type="radio"
        onClick={() => {
          checkedHandler(Ages.Six);
        }}
        name="age__form"
        checked={checked == Ages.Six}
      ></input>
      <label>{Ages.Six}</label>
      <input
        type="radio"
        onClick={() => {
          checkedHandler(Ages.Twelve);
        }}
        name="age__form"
        checked={checked == Ages.Twelve}
      ></input>
      <label>{Ages.Twelve}</label>
      <input
        type="radio"
        onClick={() => {
          checkedHandler(Ages.Sixteen);
        }}
        name="age__form"
        checked={checked == Ages.Sixteen}
      ></input>
      <label>{Ages.Sixteen}</label>
      <input
        type="radio"
        onClick={() => {
          checkedHandler(Ages.Eighteen);
        }}
        name="age__form"
        checked={checked == Ages.Eighteen}
      ></input>
      <label>{Ages.Eighteen}</label>
    </div>
  );
}
