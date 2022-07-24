import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SearchResult from 'src/components/SerachResult/SearchResult';
import { APIURL } from 'src/consts/APIURL';
import { QueryParams, Platforms, QueryPlatforms } from 'src/consts/filterForm';

export default function ProguctsPage() {
  const param: string = useParams().platforms;
  const [sort, setSort] = useState({ platform: { param: true } });
  console.log(param);
  const [games, setGames] = useState([]);
  const { search_games } = APIURL;

  useEffect(() => {
    axios({ method: 'GET', url: search_games })
      .then((result) => {
        setGames(result.data);
        console.log(result.data);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div>
      <SearchResult
        games={games}
        callback={(e) => {
          console.log(e);
          console.log(sort);
        }}
      ></SearchResult>
    </div>
  );
}
