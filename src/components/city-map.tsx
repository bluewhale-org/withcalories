"use client"

import {MapContainer} from "react-leaflet";
import React from "react";
import {MapLoader} from "~/components/map-loader";
import {Map as LeafletMap, MapOptions} from "leaflet";


export default function CityMap({options} : {options: MapOptions & React.RefAttributes<LeafletMap>}) {
    return (
        <div className="w-full h-[75vh] bg-red-500 overflow-hidden">
            <MapContainer
                scrollWheelZoom="center"
                style={{ width: '100%', height: '100%' }}
                {...options}
            >
                <MapLoader />
                {/*<RestaurantMarkers restaurants={restaurants} />*/}
            </MapContainer>
        </div>
    );
}
