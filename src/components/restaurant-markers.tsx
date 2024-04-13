"use client";

import { type Restaurant } from "~/data/restaurants";
import { Marker, Popup } from "react-leaflet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "~/components/ui/separator";

export function RestaurantMarkers(props: { restaurants: Restaurant[] }) {
  const pathname = usePathname();

  return (
    <>
      {props.restaurants.map((r) => {
        return (
          <Marker
            key={JSON.stringify(r) + "_marker"}
            position={[Number(r.latitude), Number(r.longitude)]}
          >
            <Popup>
              <>
                <Link href={`${pathname}/${r.id}`}>
                  <strong>{r.name}</strong>
                </Link>
                <br />
                {r.street_address}
                <Separator className="my-2" />
                {r.description}
              </>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
