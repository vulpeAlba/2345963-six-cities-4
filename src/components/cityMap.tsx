import {Icon, Marker, layerGroup} from 'leaflet';
import { Point } from '../types/point';
import { City } from '../types/offer';
import {useRef, useEffect} from 'react';
import useMap from './hooks/useMap';


type CityMapProp = {
  city: City;
  points: Point[];
}

const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function CityMap({city, points}: CityMapProp): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.width,
          lng: point.longitude,
        });
        marker.setIcon(defaultCustomIcon).addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default CityMap;
