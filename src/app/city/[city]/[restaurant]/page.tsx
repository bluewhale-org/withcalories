import { type Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { CITY_SLUG_TO_INFO, CITY_SLUGS, CitySlug } from "~/data/cities";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { SiUbereats, SiPostmates, SiGrubhub, SiDoordash } from "react-icons/si";

import Link from "next/link";
import { MealByMealCardDescription } from "~/components/mealbymeal-banner";
import { Button } from "~/components/ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export async function generateMetadata({
  params,
}: {
  params: { city: string; restaurant: string };
}): Promise<Metadata> {
  const citySlug = params.city as CitySlug;

  if (CITY_SLUGS.includes(citySlug)) {
    const city = CITY_SLUG_TO_INFO[citySlug];

    const restaurant = city.restaurants
      .filter((r) => r.id === params.restaurant)
      .slice(0, 1)[0];

    if (restaurant) {
      return {
        title: `${restaurant.name} - ${restaurant.street_address} - ${restaurant.city} - WithCalories`,
      };
    }
  }

  return {
    title: `Not Found - MealByMeal`,
  };
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

  const restaurant = city.restaurants
    .filter((r) => r.id === params.restaurant)
    .slice(0, 1)[0];

  if (!restaurant) {
    notFound();
  }

  const hasLink =
    restaurant.website_url ||
    restaurant.menu_url ||
    restaurant.nutrition_url ||
    restaurant.other_delivery_url ||
    restaurant.grubhub_url ||
    restaurant.ubereats_url ||
    restaurant.doordash_url ||
    restaurant.postmates_url;

  return (
    <>
      <Card>
        <CardTitle className="flex justify-between p-4">
          <span>{restaurant.name}</span>
        </CardTitle>
        <MealByMealCardDescription />
        <CardContent className="px-0 pb-0">
          {hasLink && (
            <>
              <div className="flex gap-4 p-4">
                {restaurant.website_url && (
                  <Link
                    href={restaurant.website_url}
                    target="_blank"
                    rel="nofollow"
                  >
                    <Button size="sm">
                      Website <ExternalLinkIcon className="ml-1" />
                    </Button>
                  </Link>
                )}
                {restaurant.menu_url && (
                  <Link
                    href={restaurant.menu_url}
                    target="_blank"
                    rel="nofollow"
                  >
                    <Button size="sm">
                      Menu <ExternalLinkIcon className="ml-1" />
                    </Button>
                  </Link>
                )}
                {restaurant.nutrition_url && (
                  <Link
                    href={restaurant.nutrition_url}
                    target="_blank"
                    rel="nofollow"
                  >
                    <Button size="sm">
                      Nutrition <ExternalLinkIcon className="ml-1" />
                    </Button>
                  </Link>
                )}
                {restaurant.other_delivery_url && (
                  <Link
                    href={restaurant.other_delivery_url}
                    target="_blank"
                    rel="nofollow"
                  >
                    <Button size="sm">
                      Delivery <ExternalLinkIcon className="ml-1" />
                    </Button>
                  </Link>
                )}
                {restaurant.grubhub_url && (
                  <Link
                    href={restaurant.grubhub_url}
                    target="_blank"
                    rel="nofollow"
                  >
                    <Button size="sm" className="bg-green-500 px-2">
                      <span className="sr-only">GrubHub</span>
                      <SiGrubhub className="h-6 w-6" />
                    </Button>
                  </Link>
                )}
                {restaurant.ubereats_url && (
                  <Link
                    href={restaurant.ubereats_url}
                    target="_blank"
                    rel="nofollow"
                  >
                    <Button size="sm" className="px-2">
                      <span className="sr-only">Uber Eats</span>
                      <SiUbereats className="h-6 w-6" />
                    </Button>
                  </Link>
                )}
                {restaurant.doordash_url && (
                  <Link
                    href={restaurant.doordash_url}
                    target="_blank"
                    rel="nofollow"
                  >
                    <Button size="sm" className="bg-red-600 px-2">
                      <span className="sr-only">DoorDash</span>
                      <SiDoordash className="h-6 w-6" />
                    </Button>
                  </Link>
                )}
                {restaurant.postmates_url && (
                  <Link
                    href={restaurant.postmates_url}
                    target="_blank"
                    rel="nofollow"
                  >
                    <Button size="sm" className="px-2">
                      <span className="sr-only">Postmates</span>
                      <SiPostmates className="h-6 w-6" />
                    </Button>
                  </Link>
                )}
              </div>
              <Separator />
            </>
          )}
          <p className="p-4">
            {restaurant.name} makes it easy for calorie counters to track their
            meals by having their nutrition facts publicly available. They offer
            delivery and takeout options.
          </p>
          <Separator />
          <div className="grid grid-cols-2 divide-x">
            <div className="p-4">
              <h3 className="text-lg font-medium">Location</h3>
              <p className="py-2">
                {restaurant.name}
                <br />
                {restaurant.street_address}
                <br />
                {restaurant.city}, {restaurant.state} {restaurant.zip}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">Hours</h3>
              {restaurant.hours.length > 0 ? (
                <ul className="list-disc p-4 py-2">
                  {restaurant.hours.map((hour) => {
                    const [beforeColon, afterColon] = hour.split(/:(.+)/);

                    return (
                      <li key={beforeColon}>
                        <strong>{beforeColon}</strong>: {afterColon}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="py-2">
                  The hours for {restaurant.name} are unknown.
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
