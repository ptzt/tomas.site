"use client"
import { Map, Marker, Annotation } from "mapkit-react";

export default function MapCard() {
  const token: string = process.env.NEXT_PUBLIC_MAP_TOKEN || "";
  const initialRegion = {
    centerLatitude: -34.60,
    centerLongitude: -58.39,
    latitudeDelta: 0.25,
    longitudeDelta: 0.25
  }
  return (
    <div style={{ width: '100%', height: '536px' }}>
      <Map
        token={token}
        initialRegion={initialRegion}
        minCameraDistance={100}
        maxCameraDistance={5000}
      >
        <Annotation latitude={-34.60} longitude={-58.39} animates appearanceAnimation="gelatine 0.5s infinite">
          <Marker latitude={-34.60} longitude={-58.39} />
        </Annotation>
      </Map>
    </div>
  );
}
