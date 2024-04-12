"use client";

import { Restaurant } from "~/data/restaurants";
import { Marker, Popup } from "react-leaflet";
import slugify from "slugify";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function RestaurantMarkers(props: { restaurants: Restaurant[] }) {
  const pathname = usePathname();

  return (
    <>
      {props.restaurants.map((r, i) => {
        return (
          <Marker
            key={JSON.stringify(r) + "_marker"}
            position={[Number(r.latitude), Number(r.longitude)]}
          >
            <Popup>
              <>
                <Link href={`${pathname}/${slugify(r.name).toLowerCase()}`}>
                  <strong>{r.name}</strong>
                </Link>
                <br />
                {r.full_address}
              </>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
