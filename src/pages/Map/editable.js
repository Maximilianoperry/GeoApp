import React, { useState, useEffect, useRef } from "react";
import { Map, TileLayer, FeatureGroup, Marker, Popup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import Header from "components/Header";
import L from "leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "./index.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const DrawMap = () => {
  const [center] = useState({ lat: 48.13743, lng: 11.57549 });
  const [polygons, setPolygons] = useState([]);
  const [markers, setMarkers] = useState([]);
  const ZOOM_LEVEL = 12;
  const mapRef = useRef();
  const [markerCounter, setMarkerCounter] = useState(0);

  useEffect(() => {
    const map = mapRef.current.leafletElement;

    const onMouseOver = () => {
      map.getContainer().style.cursor = 'crosshair';
    };

    const onMouseOut = () => {
      map.getContainer().style.cursor = 'grab';
    };

    polygons.forEach(polygon => {
      polygon.on('mouseover', onMouseOver);
      polygon.on('mouseout', onMouseOut);
    });

    return () => {
      polygons.forEach(polygon => {
        polygon.off('mouseover', onMouseOver);
        polygon.off('mouseout', onMouseOut);
      });
    };
  }, [polygons]);

  useEffect(() => {
    const map = mapRef.current.leafletElement;

    const onDrawCreated = (e) => {
      const layer = e.layer;

      if (layer instanceof L.Polygon || layer instanceof L.Circle) {
        layer.on("click", () => {
          const currentColor = layer.options.color;
          const newColor = currentColor === '#3388ff' ? 'red' : '#3388ff';
          layer.setStyle({ color: newColor });
          console.log("clicked");
        });
        setPolygons([...polygons, layer]);
      }
    };

    map.on("draw:created", onDrawCreated);

    return () => {
      map.off("draw:created", onDrawCreated);
    };
  }, [polygons]);

  const handlePolygonDelete = (layer) => {
    setPolygons(polygons.filter(p => p !== layer));
  };

  const handleMarkerDelete = (marker) => {
    setMarkers(markers.filter(m => m !== marker));
  };

  const handleMapRightClick = (e) => {
    const map = mapRef.current.leafletElement;
    const latlng = e.latlng;

    const cursorStyle = map.getContainer().style.cursor;

    if (cursorStyle === 'crosshair') {
      setMarkers([...markers, latlng]);
      setMarkerCounter(markerCounter + 1);
    } else {
      console.log("You can only add marker inside the polygon!");
    }
  };

  return (
    <>
      <Header title="Editable Map" />

      <div className="row">
        <div className="col text-center">
          <div className="col">
            <Map
              center={center}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
              oncontextmenu={(e) => e.preventDefault()}
              onContextMenu={handleMapRightClick}
            >
              <FeatureGroup>
                <EditControl
                  position="topright"
                  onDelete={handlePolygonDelete}
                  draw={{
                    circlemarker: false,
                    circle: false,
                    rectangle: false,
                    marker: false,
                    polygon: {
                      shapeOptions: {
                        color: "#3388ff",
                      },
                    },
                  }}
                />
              </FeatureGroup>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />
              {markers.map((latlng, index) => (
                <Marker key={index} position={latlng}>
                  <Popup className="content">
                    {`Marker ${index + 1}`}
                    <br />
                    <button className="popup-button" onClick={() => handleMarkerDelete(latlng)}>Delete</button>
                  </Popup>
                </Marker>
              ))}
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawMap;
