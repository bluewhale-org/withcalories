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
import { useParams, usePathname } from "next/navigation";
import { CITY_SLUG_TO_INFO } from "~/data/cities";

export function Header() {
  const { city: citySlug, restaurant: restaurantSlug } = useParams();

  const city = CITY_SLUG_TO_INFO[citySlug];

  // todo: look up restaurant by name
  const params = { restaurant: "Restaurant Name" };

  const restaurantComponent = restaurantSlug ? (
    <>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>{params.restaurant}</BreadcrumbPage>
      </BreadcrumbItem>
    </>
  ) : (
    <></>
  );
  const cityComponent = citySlug ? (
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
