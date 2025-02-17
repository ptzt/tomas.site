"use client"
import { Map, Marker, Annotation } from "mapkit-react";

export default function MapCard() {
  const token: string = process.env.NEXT_PUBLIC_MAP_TOKEN || "";

  return (
    <Map token={token}>
      <Annotation latitude={-34.60} longitude={-58.39} animates appearanceAnimation="gelatine 0.5s infinite" >
        <Marker latitude={-34.60} longitude={-58.39} />
      </Annotation>
    </Map>
  );
}