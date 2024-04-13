import React, { type ReactElement } from "react";
import { GiSuspensionBridge } from "react-icons/gi";
import { sanFrancisco } from "~/data/city/san-francisco";
import { type Restaurant } from "~/data/restaurants";
import { type Map as LeafletMap, type MapOptions } from "leaflet";

export interface CityInfo {
  name: string;
  icon: ReactElement;
  restaurants: Restaurant[];
  mapOptions: MapOptions & React.RefAttributes<LeafletMap>;
}

export const CITY_SLUGS = ["san-francisco"] as const;

export type CitySlug = (typeof CITY_SLUGS)[number];
export const CITY_SLUG_TO_INFO: Record<CitySlug, CityInfo> = {
  "san-francisco": {
    name: "San Francisco",
    icon: <GiSuspensionBridge className="text-red-500" />,
    restaurants: sanFrancisco,
    mapOptions: {
      center: [37.7575455, -122.40723],
      zoom: 12.4,
      minZoom: 11.75,
      maxZoom: 18,
      maxBounds: [
        [36.6879, -123.793],
        [38.8619, -121.0458],
      ],
      zoomSnap: 0.1,
      zoomDelta: 1.0,
    },
  },
};
