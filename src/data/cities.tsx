import {ReactElement} from "react";
import {GiSuspensionBridge} from "react-icons/gi";

export interface CityInfo {
  name: string;
  icon: ReactElement;
}

export const CITY_SLUGS = [
  "san-francisco"
] as const;

export type CitySlug = typeof CITY_SLUGS[number];
export const CITY_SLUG_TO_INFO: Record<CitySlug, CityInfo>  = {
  "san-francisco": {
    name: "San Francisco",
    icon: <GiSuspensionBridge className="text-red-500" />
  }
};
