import { MetadataRoute } from 'next'
import {CITY_SLUG_TO_INFO} from "~/data/cities";
import slugify from 'slugify';

function getAllPages(): MetadataRoute.Sitemap {
    return Object.values(CITY_SLUG_TO_INFO).flatMap(city => {
        const citySlug = slugify(city.name).toLowerCase();

        return [
            {
                url: `https://www.withcalories.com/city/${citySlug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.75,
            },

            ...city.restaurants.map(restaurant => {
                return {
                    url: `https://www.withcalories.com/city/${citySlug}/${restaurant.id}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly',
                    priority: 0.5,
                };
            })
        ] as MetadataRoute.Sitemap;
    });
}

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.withcalories.com/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...getAllPages()
    ]
}
