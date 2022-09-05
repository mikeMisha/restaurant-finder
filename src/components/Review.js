import React from 'react';
import Rating from './Rating';

function Review({ review }) {
  return (
    <figure className="max-w-screen-md">
      <Rating rating={review.rating} noText />
      <blockquote>
        <p className="text-sm font-semibold text-gray-900 ">{review.text}</p>
      </blockquote>
      <figcaption className="flex items-center my-2 space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-300 ">
          <cite className="pr-3 font-medium text-gray-900 ">
            {review.author_name}
          </cite>
        </div>
      </figcaption>
    </figure>
  );
}

export default Review;
