import { type Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { CITY_SLUG_TO_INFO, CITY_SLUGS, CitySlug } from "~/data/cities";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";
import { CityTabs } from "~/components/city-tabs";
import {MealByMealCardDescription} from "~/components/mealbymeal-banner";

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
        <MealByMealCardDescription />
        <CardContent className="p-4">
          <CityTabs city={city} />
        </CardContent>
      </Card>
    </>
  );
}
