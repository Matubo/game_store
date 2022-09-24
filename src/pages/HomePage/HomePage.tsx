import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import SearchResult from 'src/components/SerachResult/SearchResult';
import UserReview from 'src/components/UserReview/UserReview';
import { APIURL } from 'src/consts/APIURL';
import { useAppDispatch } from 'src/hooks/useTypedDispatch';
import { addToCard } from 'src/redux/reducers/cartReducer';
import { IGameCard } from 'src/types/gameCard';
import { IReview } from 'src/types/Review';
import './HomePage.scss';

function HomePage() {
  const [games, setGames] = useState<IGameCard[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const { top_games, user_reviews } = APIURL;
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      axios({ method: 'GET', url: top_games })
        .then((result) => {
          setGames(result.data);
        })
        .catch((e) => console.error(e));
      axios({ method: 'GET', url: user_reviews })
        .then((result) => {
          setReviews(result.data);
        })
        .catch((e) => {
          console.error(e);
        });
    };
  }, []);

  return (
    <div className="home-page">
      <p className="home-page__heading">TOP DISCOUNT</p>
      <SearchResult games={games} callback={(elem: IGameCard) => dispatch(addToCard(elem))}></SearchResult>
      <p className="home-page__heading">USER SMALL REVIEW</p>
      <UserReview reviews={reviews}></UserReview>
    </div>
  );
}

export default memo(HomePage);
