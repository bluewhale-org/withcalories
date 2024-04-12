import Link from "next/link";
import { Card, CardTitle } from "~/components/ui/card";
import { CITY_SLUG_TO_INFO, CITY_SLUGS } from "~/data/cities";

export default function HomePage() {
  return (
    <>
      <p className="text-lg">
        Make calorie tracking easier by finding restaurants with calories on the
        menu!
      </p>
      {CITY_SLUGS.map((slug) => (
        <Link href={`/city/${slug}`} key={slug}>
          <Card className="p-4 hover:bg-muted">
            <CardTitle className="flex justify-between">
              <span>{CITY_SLUG_TO_INFO[slug].name}</span>
              {CITY_SLUG_TO_INFO[slug].icon}
            </CardTitle>
          </Card>
        </Link>
      ))}
    </>
  );
}
