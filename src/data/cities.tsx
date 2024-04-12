import React, {ReactElement} from "react";
import {GiSuspensionBridge} from "react-icons/gi";
import {sanFrancisco} from "~/data/city/san-francisco";
import {Restaurant} from "~/data/restaurants";
import {Map as LeafletMap, MapOptions} from "leaflet";

export interface CityInfo {
  name: string;
  icon: ReactElement;
  restaurants: Restaurant[];
  mapOptions: MapOptions & React.RefAttributes<LeafletMap>;
}

export const CITY_SLUGS = [
  "san-francisco"
] as const;

export type CitySlug = typeof CITY_SLUGS[number];
export const CITY_SLUG_TO_INFO: Record<CitySlug, CityInfo>  = {
  "san-francisco": {
    name: "San Francisco",
    icon: <GiSuspensionBridge className="text-red-500" />,
    restaurants: sanFrancisco,
    mapOptions: {
      center: [37.7575455, -122.40723],
      zoom: 12.75,
      minZoom: 12.75,
      maxZoom: 18,
      maxBounds: [
          [37.702076885258805, -122.52649733466409],
        [37.81301403432798, -122.26115426343104],
      ],
      zoomSnap: 0.25,
      zoomDelta: 0.25
    }
  }
};
