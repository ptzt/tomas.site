"use client"
import dynamic from "next/dynamic";
const MapExample = dynamic(() => import("@/components/MapExample"), { ssr: false });

export default function Page() {
  return (
    <div className="w-full h-full">
      <MapExample />
    </div>
  )
}