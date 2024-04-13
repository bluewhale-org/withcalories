export interface Restaurant {
  id: string;
  name: string;
  description: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  website_url?: string;
  menu_url?: string;
  nutrition_url?: string;
  takeout: boolean;
  delivery: boolean;
  doordash_url?: string;
  postmates_url?: string;
  ubereats_url?: string;
  grubhub_url?: string;
  other_delivery_url?: string;
  hours: [string, string][];
  latitude: string;
  longitude: string;
}
