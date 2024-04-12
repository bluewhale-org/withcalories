"use client";

import { MapContainer } from "react-leaflet";
import React, { useEffect } from "react";
import L from "leaflet";
import { MapLoader } from "~/components/map-loader";
import { Map as LeafletMap, MapOptions } from "leaflet";
import { Restaurant } from "~/data/restaurants";
import { RestaurantMarkers } from "~/components/restaurant-markers";

const setupIcons = () => {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/marker-icon-2x.png",
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
  });
};

export default function CityMap({
  options,
  restaurants,
}: {
  options: MapOptions & React.RefAttributes<LeafletMap>;
  restaurants: Restaurant[];
}) {
  useEffect(() => {
    setupIcons();
  }, []);

  return (
    <div className="h-[65vh] w-full overflow-hidden bg-red-500">
      <MapContainer
        scrollWheelZoom="center"
        style={{ width: "100%", height: "100%" }}
        {...options}
      >
        <MapLoader />
        <RestaurantMarkers restaurants={restaurants} />
      </MapContainer>
    </div>
  );
}
