import React from 'react';
import { Genres } from 'src/consts/filterForm';
import './GenresForm.scss';

interface IProps {
  onChange: (value: Genres) => void;
  genre: Genres;
}

export default function GenresForm({ onChange, genre }: IProps) {
  const changeValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Genres;
    onChange(value);
  };

  return (
    <div className="genre">
      <p className="genre__heading">genre</p>
      <select className="genre__select genre-select" onChange={changeValueHandler} value={genre}>
        <option className="genre-select__option" value={Genres.All}>
          all
        </option>
        <option className="genre-select__option" value={Genres.Action}>
          {Genres.Action}
        </option>
        <option className="genre-select__option" value={Genres.RPG}>
          {Genres.RPG}
        </option>
        <option className="genre-select__option" value={Genres.Sandbox}>
          {Genres.Sandbox}
        </option>
        <option className="genre-select__option" value={Genres.Shooter}>
          {Genres.Shooter}
        </option>
        <option className="genre-select__option" value={Genres.Simulator}>
          {Genres.Simulator}
        </option>
      </select>
    </div>
  );
}
