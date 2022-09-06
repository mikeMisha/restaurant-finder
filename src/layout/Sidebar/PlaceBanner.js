import React from 'react';
import Rating from '../../components/Rating';
function PlaceBanner({ data, onCloseSidebar }) {
  return (
    <div className="block max-w  bg-gray-100 rounded-lg border border-gray-200 ">
      <div className="flex flex-col">
        <div className="px-4 py-2 ">
          <div className="flex ">
            <div className="text-2xl w-5/6">{data.name}</div>
            <div className="flex-1 pt-1.5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-6 h-6 cursor-pointer float-right"
                onClick={onCloseSidebar}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <a
              className="text-sm text-blue-500 underline translate-y-0.5"
              target="_blank"
              rel="noreferrer"
              href={data.url}
            >
              {data.vicinity}
            </a>
          </div>
        </div>
        {data.photos && (
          <div
            className="w-full h-72 sm:h-52 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${data.photos[0].getUrl({
                maxWidth: 400,
              })})`,
            }}
          />
        )}

        {data.rating && <Rating rating={data.rating} />}
      </div>
    </div>
  );
}

export default PlaceBanner;
