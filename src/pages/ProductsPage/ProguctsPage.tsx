import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SearchResult from 'src/components/SerachResult/SearchResult';
import { APIURL } from 'src/consts/APIURL';
import { IQueryParams, Platforms, QueryPlatforms } from 'src/consts/filterForm';
import FilterForm from 'src/forms/FilterForm/FilterForm';
import { useDebounce } from 'src/hooks/useDebounce';
import './ProductPage.scss';

export default function ProguctsPage() {
  const params: string = useParams().platforms;
  const [sort, setSort] = useState({ platforms: [params] });
  const [games, setGames] = useState([]);
  const { search_games } = APIURL;

  const getGamesWithParams = () => {
    axios({ method: 'GET', url: search_games, params: sort })
      .then((result) => {
        setGames(result.data);
        console.log(result.data);
      })
      .catch((e) => console.error(e));
  };

  const getGamesWithDebounce = useDebounce(getGamesWithParams, 800);

  const setSortParams = (value: IQueryParams) => {
    setSort({ ...sort, ...value });
  };

  useEffect(() => {
    setSort({ ...sort, platforms: [params] });
  }, [params]);

  useEffect(() => {
    /* getGamesWithParams(); */
    getGamesWithDebounce();
  }, [sort]);

  return (
    <div className="product-page">
      <FilterForm setFilters={setSortParams}></FilterForm>
      <SearchResult
        games={games}
        callback={(e) => {
          /*           console.log(e);
          console.log(sort); */
        }}
      ></SearchResult>
    </div>
  );
}
