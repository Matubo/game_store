import { useEffect, useRef, useState } from 'react';
import { IReview } from 'src/types/Review';
import PlatformSupport from './PlatformSupport';
import './UserReview.scss';

interface IProps {
  reviews: IReview[];
}

export default function UserReview({ reviews }: IProps) {
  const [currentSlideNum, setSlideNum] = useState(0);
  const cardListRef = useRef<HTMLDivElement>();

  const setReviewsHeight = () => {
    const cards = cardListRef.current.getElementsByClassName(
      'reviews__review-card'
    ) as HTMLCollectionOf<HTMLDivElement>;
    let height = 0;
    for (let i = 0; i < cards.length; i++) {
      if (height < cards[i].offsetHeight) {
        height = cards[i].offsetHeight;
      }
    }
    cardListRef.current.style.height = `${height}px`;
  };

  useEffect(() => {
    setReviewsHeight();
    addEventListener('resize', () => {
      setReviewsHeight();
    });
  });

  function nextSlideHandler() {
    currentSlideNum + 1 < reviews.length ? setSlideNum(currentSlideNum + 1) : setSlideNum(0);
  }

  return (
    <div className="reviews" ref={cardListRef}>
      {reviews.map((review, index) => {
        const { alt, description, genre, id, image, name, platform, rating } = review;
        return (
          <div
            className="reviews__review-card"
            style={
              currentSlideNum == index ? { transform: 'translate(0px)', transitionDelay: '0ms', zIndex: 1000 } : {}
            }
            key={id}
          >
            <div onClick={nextSlideHandler} className="reviews-card__next-button">
              <p>{'>'}</p>
            </div>
            <div className="reviews-card__reviews-flex">
              <div className="reviews-card__raiting">{rating}/5&#9733;</div>
              <img className="reviews-card__img" src={image} alt={alt}></img>
              <div className="reviews-flex-right">
                <p className="reviews-card__name">{name}</p>
                <p className="reviews-card__genre">{genre}</p>
                <p className="reviews-card__genre">
                  PC : <PlatformSupport flag={platform.pc}></PlatformSupport> xbox :{' '}
                  <PlatformSupport flag={platform.xbox}></PlatformSupport> playstation :{' '}
                  <PlatformSupport flag={platform.playstation}></PlatformSupport>
                </p>
              </div>
            </div>
            <p className="reviews-card__description">{description}</p>
          </div>
        );
      })}
    </div>
  );
}
