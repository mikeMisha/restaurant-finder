import React, { useEffect, useState, useRef } from 'react';
import Rating from './Rating';
import Popup from './Popup';

function Marker({ price, onMarker, name, rating }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {isHover && (
        <Popup title={name}>
          {rating ? (
            <Rating rating={rating} noText />
          ) : (
            <div className="py-3 text-center">Place has no reviews</div>
          )}
        </Popup>
      )}

      <img
        src={`./img/price-icons/price-${!price ? 'none' : price}.svg`}
        alt=""
        height="15"
        width="15"
        onClick={onMarker}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="cursor-pointer transform transition duration-300 hover:scale-150"
      />
    </>
  );
}

export default Marker;
