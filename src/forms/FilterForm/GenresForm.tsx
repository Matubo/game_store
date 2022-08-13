import React, { useState } from 'react';
import { Genres } from 'src/consts/filterForm';
import './GenresForm.scss';

interface IProps {
  onChange: (value: Genres) => void;
}

export default function GenresForm({ onChange }: IProps) {
  const [checked, setChecked] = useState(Genres.All);
  const checkedHandler = (value: Genres) => {
    setChecked(value);
    onChange(value);
  };

  return (
    <div className="genre">
      <p>genre</p>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Genres.All);
          }}
          name="genre__form"
          checked={checked == Genres.All}
        ></input>
        <label>All</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Genres.Action);
          }}
          name="genre__form"
          checked={checked == Genres.Action}
        ></input>
        <label>Action</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Genres.RPG);
          }}
          name="genre__form"
          checked={checked == Genres.RPG}
        ></input>
        <label>RPG</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Genres.Sandbox);
          }}
          name="genre__form"
          checked={checked == Genres.Sandbox}
        ></input>
        <label>Sandbox</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Genres.Shooter);
          }}
          name="genre__form"
          checked={checked == Genres.Shooter}
        ></input>
        <label>Shooter</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            checkedHandler(Genres.Simulator);
          }}
          name="genre__form"
          checked={checked == Genres.Simulator}
        ></input>
        <label>Simulator</label>
      </div>
    </div>
  );
}
