"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import React from "react";
import { TbSalad } from "react-icons/tb";
import Link from "next/link";
import {notFound, useParams, usePathname} from "next/navigation";
import {CITY_SLUG_TO_INFO, CITY_SLUGS, CitySlug} from "~/data/cities";

export function Header() {
  const { city: citySlugUntyped, restaurant: restaurantSlug } = useParams();

  const citySlug = citySlugUntyped as CitySlug;
  const city = citySlug ? CITY_SLUG_TO_INFO[citySlug] : undefined;
  const restaurant = city ? city.restaurants.filter(r => r.id === restaurantSlug).slice(0,1)[0] : undefined;

  const restaurantComponent = restaurant ? (
    <>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>{restaurant.name}</BreadcrumbPage>
      </BreadcrumbItem>
    </>
  ) : (
    <></>
  );
  const cityComponent = city ? (
    <>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href={`/city/${citySlug}`}>{city.name}</BreadcrumbLink>
      </BreadcrumbItem>
      {restaurantComponent}
    </>
  ) : (
    <></>
  );

  return (
    <header>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="flex items-center gap-1 text-lg font-medium text-sky-500 hover:text-foreground hover:text-sky-700"
            >
              <TbSalad className="text-pink-500" /> WithCalories
            </BreadcrumbLink>
          </BreadcrumbItem>
          {cityComponent}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
