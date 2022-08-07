import React, { useEffect, useState } from 'react';
import { Genres } from 'src/consts/filterForm';

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
      <input
        type="radio"
        onChange={() => {
          checkedHandler(Genres.All);
        }}
        name="genre__form"
        checked={checked == Genres.All}
      ></input>
      <label>All</label>
      <input
        type="radio"
        onChange={() => {
          checkedHandler(Genres.Action);
        }}
        name="genre__form"
        checked={checked == Genres.Action}
      ></input>
      <label>Action</label>
      <input
        type="radio"
        onChange={() => {
          checkedHandler(Genres.RPG);
        }}
        name="genre__form"
        checked={checked == Genres.RPG}
      ></input>
      <label>RPG</label>
      <input
        type="radio"
        onChange={() => {
          checkedHandler(Genres.Sandbox);
        }}
        name="genre__form"
        checked={checked == Genres.Sandbox}
      ></input>
      <label>Sandbox</label>
      <input
        type="radio"
        onChange={() => {
          checkedHandler(Genres.Shooter);
        }}
        name="genre__form"
        checked={checked == Genres.Shooter}
      ></input>
      <label>Shooter</label>
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
  );
}
