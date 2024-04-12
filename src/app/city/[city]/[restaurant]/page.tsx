import { type Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { CITY_SLUG_TO_INFO, CITY_SLUGS, CitySlug } from "~/data/cities";
import { Card, CardContent, CardFooter, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { city: string; restaurant: string };
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

export default function Page({
  params,
}: {
  params: { city: string; restaurant: string };
}) {
  const citySlug = params.city as CitySlug;

  if (!CITY_SLUGS.includes(citySlug)) {
    notFound();
  }

  const city = CITY_SLUG_TO_INFO[citySlug];

  return (
    <>
      <Card>
        <CardTitle className="flex justify-between p-4">
          <span>
            {city.name} - {params.restaurant}
          </span>
          {city.icon}
        </CardTitle>
        <Separator />
        <CardContent className="px-4 py-2">
          Are you counting calories or tracking macros? Use this directory to
          find restaurants in {city.name} that have menus with nutrition
          information.
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col px-4 py-2 text-center text-xs md:flex-row md:gap-1">
          <p>Want to track calories easily at any restaurant?</p>
          <p>
            <Link
              href="https://www.mealbymeal.com/"
              className="whitespace-nowrap font-bold hover:underline"
            >
              Try counting calories over text with MealByMeal!
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
