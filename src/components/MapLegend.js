import React from 'react';

const MapLegend = () => {
  const renderLegendItems = () => {
    const items = [];
    const price = '$$$$';
    for (let i = 0; i < 5; i++) {
      items.push(
        <div key={i} className="flex flex-col items-center">
          <img
            src={`./img/price-icons/price-${i === 0 ? 'none' : i}.svg`}
            alt=""
            height="20"
            width="20"
          />
          <div
            className={`${
              i === 0 ? 'text-red-500' : 'text-green-500 md:border-b'
            }`}
          >
            {i === 0 ? 'N/A' : price.slice(0, i)}
          </div>
        </div>
      );
    }
    return items;
  };
  return (
    <div className="block fixed py-2 px-4 border-1 md:w-[200px] bg-gray-600 rounded-lg border-blue-600 z-10 left-2 bottom-1 md:bottom-auto md:left-auto md:right-2 md:top-3 ">
      <div className="flex justify-between  md:flex-row flex-col">
        {renderLegendItems()}
      </div>
    </div>
  );
};

export default MapLegend;
