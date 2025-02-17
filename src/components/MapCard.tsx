"use client"
import { Map, Marker, Annotation } from "mapkit-react";

export default function MapCard() {
  const token: string = process.env.NEXT_PUBLIC_MAP_TOKEN || "";
  const initialPosition = {
    centerLatitude: -34.60,
    centerLongitude: -58.39,
    latitudeDelta: 0.15,
    longitudeDelta: 0.15
  }

  return (
    <Map token={token} initialRegion={initialPosition} showsZoomControl={false} showsCompass={0} showsMapTypeControl={false}>
      <Annotation latitude={-34.60} longitude={-58.39} animates appearanceAnimation="gelatine 0.5s infinite" >
        <Marker latitude={-34.60} longitude={-58.39} />
      </Annotation>
    </Map>
  );
}