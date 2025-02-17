"use client"
import { Map, Annotation } from "mapkit-react";
import { VscLocation } from "react-icons/vsc";

export default function MapCard() {
  const token: string = process.env.NEXT_PUBLIC_MAP_TOKEN || "";
  const initialRegion = {
    centerLatitude: -34.60,
    centerLongitude: -58.39,
    latitudeDelta: 0.15,
    longitudeDelta: 0.15
  }


  return (
    <div style={{ width: '100%', height: '536px' }} className="relative">
      <Map
        token={token}
        initialRegion={initialRegion}
        showsCompass={0}
        showsZoomControl={false}
        showsMapTypeControl={false}
        maxCameraDistance={3000}
      >
        <Annotation latitude={-34.60} longitude={-58.39} animates appearanceAnimation="gelatine 0.5s infinite">
          <div className="w-32 h-32 bg-black/90 backdrop-blur-md backdrop-saturate-200 shadow-md shadow-indigo-900/10 opacity-50 rounded-full">
          </div>
        </Annotation>
      </Map>
      <div className="flex absolute bottom-1 right-1 text-gray-600  bg-white/20 backdrop-blur-md backdrop-saturate-200 shadow-md shadow-indigo-900/10 items-center  p-2 font-medium rounded-full border-white border-[1px]">
        <VscLocation size={28} />
        <p className="text-lg">Buenos Aires, Argentina</p>
      </div>
    </div>
  );
}


