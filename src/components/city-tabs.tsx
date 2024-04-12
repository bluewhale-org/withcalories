"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { LoadingSpinner } from "~/components/loading-spinner";
import React, { useState } from "react";
import { CityInfo } from "~/data/cities";
import dynamic from "next/dynamic";

const CityMap = dynamic(() => import("~/components/city-map"), {
  ssr: false,
});

export function CityTabs({ city }: { city: CityInfo }) {
  const [loading, setLoading] = useState(true);

  return (
    <Tabs defaultValue="map">
      <div className="flex gap-4">
        <TabsList className="mb-2">
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="filter">Filter</TabsTrigger>
        </TabsList>
        <div className="pt-1.5">
          <LoadingSpinner loading={loading} />
        </div>
      </div>
      <TabsContent value="map">
        <CityMap
          options={city.mapOptions}
          restaurants={city.restaurants}
          setLoading={setLoading}
        />
      </TabsContent>
      <TabsContent value="list">
        todo: list
        {city.restaurants.map((r) => {
          return <>{r.name}</>;
        })}
      </TabsContent>
      <TabsContent value="filter">todo: filter</TabsContent>
    </Tabs>
  );
}
