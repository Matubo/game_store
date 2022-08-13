import React, { useEffect, useState } from 'react';
import { Ages, Genres, IQueryParams } from 'src/consts/filterForm';
import AgeForm from './AgeForm';
import GenresForm from './GenresForm';
import NameForm from './NameForm';
import './FilterForm.scss';

interface IProps {
  setFilters: (values: IQueryParams) => void;
}

export default function FilterForm({ setFilters }: IProps) {
  const [filtersState, setFiltersState] = useState<IQueryParams>({ ageLimit: '', genre: '', name: '' });
  const ageChangeHandler = (value: Ages) => {
    setFiltersState({ ...filtersState, ageLimit: value });
  };
  const genresChangeHandler = (value: Genres) => {
    setFiltersState({ ...filtersState, genre: value });
  };
  const nameChangeHandler = (value: string) => {
    setFiltersState({ ...filtersState, name: value });
  };

  useEffect(() => {
    setFilters(filtersState);
  }, [filtersState]);

  return (
    <div className="filter-form">
      <div className="filter-form__sticky">
        <NameForm onChange={nameChangeHandler}></NameForm>
        <AgeForm onChange={ageChangeHandler}></AgeForm>
        <GenresForm onChange={genresChangeHandler}></GenresForm>
      </div>
    </div>
  );
}
