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
            height="25"
            width="25"
          />
          <div className={`${i === 0 ? 'text-red-500' : 'text-green-500'}`}>
            {i === 0 ? 'N/A' : price.slice(0, i)}
          </div>
        </div>
      );
    }
    return items;
  };
  return (
    <div className="block py-2 px-4 border-1 w-[250px] bg-gray-600 rounded-lg border-blue-600 absolute z-10 right-5 top-3">
      <div className="flex justify-between"> {renderLegendItems()}</div>
    </div>
  );
};

export default MapLegend;
