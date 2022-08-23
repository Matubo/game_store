import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import SearchResult from 'src/components/SerachResult/SearchResult';
import { APIURL } from 'src/consts/APIURL';
import { useAppDispatch } from 'src/hooks/useTypedDispatch';
import { addToCard } from 'src/redux/reducers/cartReducer';
import { IGameCard } from 'src/types/gameCard';

function HomePage() {
  const [games, setGames] = useState([]);
  const { top_games } = APIURL;
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      axios({ method: 'GET', url: top_games })
        .then((result) => {
          setGames(result.data);
        })
        .catch((e) => console.error(e));
    };
  }, []);

  return <SearchResult games={games} callback={(elem: IGameCard) => dispatch(addToCard(elem))}></SearchResult>;
}

export default memo(HomePage);
