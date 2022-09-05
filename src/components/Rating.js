import React from 'react';

function Rating({ rating, noText }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          className={`w-5 h-5 ${
            i <= rating ? 'fill-yellow-300' : 'fill-gray-300'
          }`}
          viewBox="0 0 20 20"
          key={i}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>star {i}</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col py-3">
      <div className="flex items-center justify-center">
        {renderStars(rating)}
      </div>
      {!noText && (
        <p className="ml-2 text-sm text-center font-medium text-gray-500">
          {rating} out of 5
        </p>
      )}
    </div>
  );
}

export default Rating;
