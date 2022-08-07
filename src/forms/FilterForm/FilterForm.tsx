import React, { useEffect, useState } from 'react';
import { Ages, Genres, IQueryParams } from 'src/consts/filterForm';
import AgeForm from './AgeForm';
import GenresForm from './GenresForm';
import NameForm from './NameForm';

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
    <div>
      <AgeForm onChange={ageChangeHandler}></AgeForm>
      <GenresForm onChange={genresChangeHandler}></GenresForm>
      <NameForm onChange={nameChangeHandler}></NameForm>
    </div>
  );
}
