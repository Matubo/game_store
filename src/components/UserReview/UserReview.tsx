import { useState } from 'react';
import { IReview } from 'src/types/Review';
import './UserReview.scss';

interface IProps {
  reviews: IReview[];
}

export default function UserReview({ reviews }: IProps) {
  const [currentSlideNum, setSlideNum] = useState(0);

  function nextSlideHandler() {
    currentSlideNum + 1 < reviews.length ? setSlideNum(currentSlideNum + 1) : setSlideNum(0);
  }
  return (
    <div className="reviews">
      {reviews.map((review, index) => {
        const { alt, description, genre, id, image, name, platform, rating } = review;
        return (
          <div
            className="reviews__review-card"
            style={currentSlideNum == index ? { visibility: 'visible' } : {}}
            key={id}
          >
            <p className="reviews-card__name">{name}</p>
            <div className="reviews-card__reviews-flex">
              <div className="reviews-flex__left-box">
                <div className="reviews-card__raiting">{rating}/5&#9733;</div>
                <img className="reviews-card__img" src={image} alt={alt}></img>
                <p className="reviews-card__genre">{genre}</p>
                <p className="reviews-card__genre">
                  PC:{platform.pc ? <>&#10003;</> : <>&#10007;</>},xbox:{platform.xbox ? <>&#10003;</> : <>&#10007;</>}
                  ,playstation:
                  {platform.playstation ? <>&#10003;</> : <>&#10007;</>}
                </p>
              </div>

              <p className="reviews-card__description">{description}</p>
            </div>
          </div>
        );
      })}
      <button onClick={nextSlideHandler}></button>
    </div>
  );
}
