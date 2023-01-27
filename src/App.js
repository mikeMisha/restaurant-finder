import Map from './layout/Map';
import Search from './components/Search';
import Sidebar from './layout/Sidebar';
import React, { useState, useEffect } from 'react';
import PlaceBanner from './layout/Sidebar/PlaceBanner';
import SidebarTab from './layout/Sidebar/SidebarTab';
import PlaceReviews from './layout/Sidebar/PlaceReviews';
import LoadingScreen from './components/LoadingScreen';
import MapLegend from './components/MapLegend';
import useNearbySearch from './hooks/useNearbySearch';
function App() {
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [circle, setCircle] = useState(null);
  const [currLoc, setCurrLoc] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const { isApiLoading, resultData } = useNearbySearch({
    maps,
    map,
    currLoc,
    searchKeyword,
    circle,
  });

  useEffect(() => {
    setIsAppLoading(isApiLoading);
  }, [isApiLoading]);

  const handleApiLoaded = (m, ms) => {
    setIsAppLoading(false);
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

  const onSearchSubmit = (keyword, location) => {
    setIsAppLoading(true);
    var geocoder = new maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'ZERO_RESULTS') {
        setIsAppLoading(false);
        alert(`No results for: "${location}"`);
        return;
      } else if (status === 'OK') {
        let locationCord = results[0].geometry.location;
        setCurrLoc(locationCord);
        setSearchKeyword(keyword);
      } else {
        setIsAppLoading(false);
      }
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
      {isAppLoading && <LoadingScreen />}
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
