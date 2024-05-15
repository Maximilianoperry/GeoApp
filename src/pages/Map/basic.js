import React, { useState } from "react";
import Header from "components/Header";

import { Map, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

const BasicMap = () => {
    const [center] = useState({ lat: 48.13743, lng: 11.57549 });
    const ZOOM_LEVEL = 12;
    const mapRef = useRef();

    return (
        <>
            <Header title="Basic" />

            <div className="row">
                <div className="col text-center">
                    <div className="col">
                        <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer
                                url={osm.maptiler.url}
                                attribution={osm.maptiler.attribution}
                            />
                        </Map>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicMap;
