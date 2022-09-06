import Map from './layout/Map';
import Search from './components/Search';
import Sidebar from './layout/Sidebar';
import React, { useState, useEffect } from 'react';
import PlaceBanner from './layout/Sidebar/PlaceBanner';
import SidebarTab from './layout/Sidebar/SidebarTab';
import PlaceReviews from './layout/Sidebar/PlaceReviews';
import LoadingScreen from './components/LoadingScreen';
import MapLegend from './components/MapLegend';

function App() {
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [resultData, setResultData] = useState([]);
  const [circle, setCircle] = useState(null);
  const [currLoc, setCurrLoc] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!maps || !currLoc) return;
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
  }, [currLoc, maps]);

  const handleApiLoaded = (m, ms) => {
    setIsLoading(false);
    setMap(m);
    setMaps(ms);
    setCircle(
      new ms.Circle({
        strokeColor: '#93c5fd',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#93c5fd',
        fillOpacity: 0.15,
        map: m,
        options: {
          clickable: false,
        },

        radius: 1200,
      })
    );
  };

  const setupLocation = (collectResults) => {
    setResultData(collectResults);
    map.panTo(currLoc);
    map.setZoom(15);
    circle.setCenter(currLoc);
    setIsLoading(false);
  };

  const onSearchSubmit = (keyword, location) => {
    setIsLoading(true);
    var geocoder = new maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'ZERO_RESULTS') {
        setIsLoading(false);
        alert(`No results for: "${location}"`);
        return;
      }
      let locationCord = results[0].geometry.location;
      setCurrLoc(locationCord);
      setSearchKeyword(keyword);
    });
  };

  const onMarkerClick = (data) => {
    const service = new maps.places.PlacesService(map);
    service.getDetails(
      {
        placeId: data.place_id,
        fields: ['review', 'url'],
      },
      (res, status) => {
        if (status === 'OK') {
          setSelectedMarkerData({ ...data, ...res });
          setIsSidebarOpen(true);
        }
      }
    );
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      {resultData.length > 0 && <MapLegend />}
      <div className="max-h-screen  w-full z-10 p-3 absolute box-border flex flex-col min-w-[300px] sm:max-w-md">
        <Search onSearchSubmit={onSearchSubmit} />
        <Sidebar isSidebarOpen={isSidebarOpen}>
          {selectedMarkerData && (
            <>
              <PlaceBanner
                data={selectedMarkerData}
                onCloseSidebar={() => setIsSidebarOpen(false)}
              />
              {selectedMarkerData.reviews && (
                <SidebarTab title="Reviews">
                  <PlaceReviews reviews={selectedMarkerData.reviews} />
                </SidebarTab>
              )}
            </>
          )}
        </Sidebar>
      </div>
      <Map
        resultData={resultData}
        handleApiLoaded={handleApiLoaded}
        onMarkerClick={onMarkerClick}
      />
    </>
  );
}

export default App;
