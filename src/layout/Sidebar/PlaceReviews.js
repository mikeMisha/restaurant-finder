import React from 'react';
import Review from '../../components/Review';

const PlaceReviews = ({ reviews }) => {
  if (!reviews) return;
  return (
    <div>
      <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 ">
        {reviews.map((review) => {
          return (
            <li
              key={review.time + review.author_name}
              className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200"
            >
              <Review review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlaceReviews;
