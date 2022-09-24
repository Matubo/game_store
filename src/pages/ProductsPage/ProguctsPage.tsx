import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SearchResult from 'src/components/SerachResult/SearchResult';
import { APIURL } from 'src/consts/APIURL';
import { IQueryParams } from 'src/consts/filterForm';
import FilterForm from 'src/forms/FilterForm/FilterForm';
import { useDebounce } from 'src/hooks/useDebounce';
import { useAppDispatch } from 'src/hooks/useTypedDispatch';
import { addToCard } from 'src/redux/reducers/cartReducer';
import { IGameCard } from 'src/types/gameCard';
import './ProductPage.scss';

export default function ProguctsPage() {
  const params: string = useParams().platforms;
  const [sort, setSort] = useState({ platforms: [params] });
  const [games, setGames] = useState([]);
  const [gameCategory, setGameCategory] = useState(params);
  const { search_games } = APIURL;
  const dispatch = useAppDispatch();

  const getGamesWithParams = () => {
    axios({ method: 'GET', url: search_games, params: sort })
      .then((result) => {
        setGames(result.data);
        setGameCategory(params);
      })
      .catch((e) => console.error(e));
  };

  const getGamesWithDebounce = useDebounce(getGamesWithParams, 700);

  const setSortParams = (value: IQueryParams) => {
    setSort({ ...sort, ...value });
  };

  useEffect(() => {
    setSort({ ...sort, platforms: [params] });
  }, [params]);

  useEffect(() => {
    getGamesWithDebounce();
  }, [sort]);

  const addToCartHandler = (game: IGameCard) => {
    dispatch(addToCard(game));
  };

  return (
    <div className="product-page">
      <FilterForm setFilters={setSortParams} params={params}></FilterForm>
      <p className="product-page__heading">{gameCategory}</p>
      <SearchResult games={games} callback={addToCartHandler}></SearchResult>
    </div>
  );
}
