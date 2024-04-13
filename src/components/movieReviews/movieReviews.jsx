import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchReviewsMovies } from "../api/apiReviewsMovies.js";

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewsInf, setReviewsInf] = useState([]);

  useEffect(() => {
    const showReviews = async () => {
      const result = await fetchReviewsMovies(movieId);
      setReviewsInf(result);
    };
    showReviews();
  }, [movieId]);

  return (
    <>
      {reviewsInf.length > 0 ? (
        reviewsInf.map((review) => (
          <div key={review.id}>
            <h4>Author</h4>
            <p>{review.author}</p>
            <h4>Review</h4>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};
