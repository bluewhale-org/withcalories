import Link from "next/link";
import {CardDescription} from "~/components/ui/card";
import React from "react";

export function MealByMealCardDescription() {
    return (
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
    )
}
