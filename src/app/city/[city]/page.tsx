import { type Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import {CITY_SLUG_TO_INFO, CITY_SLUGS, CitySlug} from "~/data/cities";
import {Card, CardContent, CardFooter, CardTitle} from "~/components/ui/card";
import {Separator} from "~/components/ui/separator";
import Link from "next/link";

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
}

export async function generateMetadata({
                                           params
                                       }: {
    params: { city: string };
}): Promise<Metadata> {
    const citySlug = params.city as CitySlug;

    if (CITY_SLUGS.includes(citySlug)) {
        return {
            title: `${CITY_SLUG_TO_INFO[citySlug].name} - WithCalories`
        };
    } else {
        return {
            title: `Not Found - MealByMeal`
        };
    }
}

export default function Page({ params }: { params: { city: string } }) {
    const citySlug = params.city as CitySlug;

    if (!CITY_SLUGS.includes(citySlug)) {
        notFound();
    }

    const city = CITY_SLUG_TO_INFO[citySlug];

    return <>
        <Card>
            <CardTitle className="flex justify-between p-4">
                <span>{city.name}</span>
                {city.icon}
            </CardTitle>
            <Separator />
            <CardContent className="px-4 py-2">
                Are you counting calories or tracking macros? Use this directory to find restaurants in {city.name} that have nutrition information available for the menu.
            </CardContent>
            <Separator />
            <CardFooter className="px-4 py-2 text-xs text-center flex flex-col md:flex-row md:gap-1">
                <p>Want to track calories easily at any restaurant?</p>
                <p><Link href="https://www.mealbymeal.com/" className="font-bold hover:underline whitespace-nowrap">Try counting calories over text with MealByMeal!</Link></p>
            </CardFooter>
        </Card>
        <div>todo: add map</div>
    </>;

}
