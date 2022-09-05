import React, { useEffect, useState } from 'react';
import Rating from './Rating';

function Marker({ price, onMarker, name, rating }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      {isHover && (
        <div className="inline-block absolute z-10 w-64 text-sm font-light text-gray-500 rounded-lg border border-gray-200 shadow-sm -translate-x-2/4 -translate-y-[95px] text-gray-400 border-gray-600 bg-gray-800">
          <div className="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 border-gray-600 bg-gray-700">
            <h3 className="font-semibold text-white text-center">{name}</h3>
          </div>

          {rating ? (
            <Rating rating={rating} noText />
          ) : (
            <div className="py-3 text-center">Place has no reviews</div>
          )}

          <div className="w-3 h-3 inline-block position absolute rotate-45 border-b border-r border-gray-600 translate-x-[128px] -translate-y-2/4 bg-gray-800"></div>
        </div>
      )}
      <img
        src={`./img/price-icons/price-${!price ? 'none' : price}.svg`}
        alt=""
        height="15"
        width="15"
        onClick={onMarker}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="cursor-pointer  transform transition duration-300 hover:scale-150"
      />
    </div>
  );
}

export default Marker;
