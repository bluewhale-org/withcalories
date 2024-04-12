import { type Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { CITY_SLUG_TO_INFO, CITY_SLUGS, CitySlug } from "~/data/cities";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import Link from "next/link";
import dynamic from "next/dynamic";

const CityMap = dynamic(() => import("~/components/city-map"), {
  ssr: false,
});

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const citySlug = params.city as CitySlug;

  if (CITY_SLUGS.includes(citySlug)) {
    return {
      title: `${CITY_SLUG_TO_INFO[citySlug].name} - WithCalories`,
    };
  } else {
    return {
      title: `Not Found - MealByMeal`,
    };
  }
}

export default function Page({ params }: { params: { city: string } }) {
  const citySlug = params.city as CitySlug;

  if (!CITY_SLUGS.includes(citySlug)) {
    notFound();
  }

  const city = CITY_SLUG_TO_INFO[citySlug];

  return (
    <>
      <Card>
        <CardTitle className="flex justify-between p-4">
          <span>{city.name}</span>
          {city.icon}
        </CardTitle>
        <CardDescription className="flex flex-col bg-amber-200 px-4 py-2 text-xs text-amber-900 md:flex-row md:gap-1">
          <span>Want to track calories easily at any restaurant?</span>
          <span>
            <Link
              href="https://www.mealbymeal.com/?utm_source=withcalories"
              className="whitespace-nowrap font-bold hover:underline"
            >
              Try counting calories over text with MealByMeal!
            </Link>
          </span>
        </CardDescription>
        <CardContent className="p-4">
          <Tabs defaultValue="map">
            <TabsList className="mb-2">
              <TabsTrigger value="map">Map</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="filter">Filter</TabsTrigger>
            </TabsList>
            <TabsContent value="map">
              <CityMap
                options={city.mapOptions}
                restaurants={city.restaurants}
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
        </CardContent>
      </Card>
    </>
  );
}
