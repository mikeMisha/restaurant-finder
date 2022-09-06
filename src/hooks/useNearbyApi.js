import { useEffect, useState } from 'react';

export default function useNearbyApi({
  maps,
  map,
  currLoc,
  searchKeyword,
  circle,
}) {
  const [isApiLoading, setIsLoading] = useState(true);
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    if (!maps || !currLoc) return;
    setIsLoading(true);
    const collectResults = [];
    const service = new maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: currLoc,
        keyword: searchKeyword,
        radius: 1000,
        type: 'restaurant',
      },
      (results, status, pagination) => {
        if (status !== 'OK' || !results) {
          setIsLoading(false);
          alert('Location does not exist or results not found!');
          return;
        }
        const timer = setTimeout(() => {
          setupLocation(collectResults);
        }, 5000);

        collectResults.push(...results);
        if (pagination && pagination.hasNextPage) {
          pagination.nextPage();
        } else {
          clearTimeout(timer);
          setupLocation(collectResults);
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currLoc, maps]);

  const setupLocation = (collectResults) => {
    setResultData(collectResults);
    map.panTo(currLoc);
    map.setZoom(15);
    circle.setCenter(currLoc);
    setIsLoading(false);
  };

  return { isApiLoading, resultData };
}
