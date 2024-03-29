import { useEffect, useState } from 'react';
import { Ages, Genres, IQueryParams, Rating } from 'src/consts/filterForm';
import AgeForm from './AgeForm';
import GenresForm from './GenresForm';
import NameForm from './NameForm';
import './FilterForm.scss';
import RatingForm from './RatingForm';

interface IProps {
  setFilters: (values: IQueryParams) => void;
  params: string;
}

export default function FilterForm({ setFilters, params }: IProps) {
  const [filtersState, setFiltersState] = useState<IQueryParams>({
    ageLimit: Ages.All,
    genre: Genres.All,
    name: '',
    rating: Rating.All
  });

  const ageChangeHandler = (value: Ages) => {
    setFiltersState({ ...filtersState, ageLimit: value });
  };
  const genresChangeHandler = (value: Genres) => {
    setFiltersState({ ...filtersState, genre: value });
  };
  const nameChangeHandler = (value: string) => {
    setFiltersState({ ...filtersState, name: value });
  };
  const ratingChangeHandler = (value: Rating) => {
    setFiltersState({ ...filtersState, rating: value });
  };

  useEffect(() => {
    setFilters(filtersState);
  }, [filtersState]);

  useEffect(() => {
    setFiltersState({
      ageLimit: Ages.All,
      genre: Genres.All,
      name: '',
      rating: Rating.All
    });
  }, [params]);

  return (
    <div className="filter-form">
      <NameForm onChange={nameChangeHandler} name={filtersState.name}></NameForm>
      <AgeForm onChange={ageChangeHandler} age={filtersState.ageLimit}></AgeForm>
      <GenresForm onChange={genresChangeHandler} genre={filtersState.genre}></GenresForm>
      <RatingForm onChange={ratingChangeHandler} rating={filtersState.rating}></RatingForm>
    </div>
  );
}
