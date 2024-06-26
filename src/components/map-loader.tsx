/* eslint-disable */
"use client";

import { useMap, useMapEvents } from "react-leaflet";
import { leafletLayer } from "protomaps";

export function MapLoader() {
  const map = useMap();

  /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment  */
  const layer = leafletLayer({
    url: "https://withcalories-tileserver.blue-whale.workers.dev/sf2/{z}/{x}/{y}.mvt",
  });

  /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call  */
  layer.addTo(map);

  // useful for setting the location for a new city
  useMapEvents({
    dragend: (e) => {
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-call @typescript-eslint/no-unsafe-member-access */
      console.log("map center", e.target.getCenter());
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-call @typescript-eslint/no-unsafe-member-access */
      console.log("map bounds", e.target.getBounds());
    },
  });

  return null;
}
