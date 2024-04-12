export interface Restaurant {
    name: string;
    street_address: string;
    city: string;
    state: string;
    zip: string;
    menu_url?: string;
    takeout: boolean;
    delivery: boolean;
    doordash_url?: string;
    postmates_url?: string;
    ubereats_url?: string;
    grubhub_url?: string;
    other_delivery_url?: string;
    hours: string[];
}
