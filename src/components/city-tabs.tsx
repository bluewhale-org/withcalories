"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { LoadingSpinner } from "~/components/loading-spinner";
import React, { useEffect, useState } from "react";
import { type CityInfo } from "~/data/cities";
import dynamic from "next/dynamic";
import { getRestaurantColumns } from "~/components/restaurant-columns";
import { RestaurantTable } from "~/components/restaurant-table";
import { usePathname } from "next/navigation";

const CityMap = dynamic(() => import("~/components/city-map"), {
  ssr: false,
});

export function CityTabs({ city }: { city: CityInfo }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const restaurantColumns = getRestaurantColumns(pathname);
  const [query, setQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(
    city.restaurants,
  );

  useEffect(() => {
    setFilteredRestaurants(
      city.restaurants.filter(
        (r) =>
          r.name.toLowerCase().includes(query.toLowerCase()) ||
          r.description.toLowerCase().includes(query.toLowerCase()) ||
          r.street_address.toLowerCase().includes(query.toLowerCase()) ||
          r.zip.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }, [query]);

  return (
    <Tabs defaultValue="map">
      <div className="flex gap-4">
        <TabsList className="mb-2">
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>
        <div className="pt-1.5">
          <LoadingSpinner loading={loading} />
        </div>
      </div>
      <TabsContent value="map">
        <CityMap
          options={city.mapOptions}
          restaurants={filteredRestaurants}
          setLoading={setLoading}
        />
      </TabsContent>
      <TabsContent value="list">
        <RestaurantTable
          columns={restaurantColumns}
          data={filteredRestaurants}
          query={query}
          setQuery={setQuery}
        />
      </TabsContent>
    </Tabs>
  );
}
