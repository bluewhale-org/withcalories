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
          <CityTabs city={city} />
        </CardContent>
      </Card>
    </>
  );
}
