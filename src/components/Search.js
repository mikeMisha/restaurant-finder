import React, { useState, useEffect } from 'react';

const Search = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');
  const [keyword, setKeyword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(keyword, term);
  };
  return (
    <div className="w-100">
      <form className="flex space-x-2 > *" onSubmit={onSubmit}>
        <div className="relative w-full">
          <label htmlFor="keyword" className="sr-only">
            keyword
          </label>
          <input
            type="text"
            id="keyword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-sm"
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <div className="relative w-full">
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-sm"
            placeholder="Location"
            required
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;
