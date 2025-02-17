"use client"
import ProfileCard from "@/components/ProfileCard";
import GithubCard from "@/components/GithubCard";
import LeetCodeCard from "@/components/LeetcodeCard";
import dynamic from "next/dynamic";

const MapCard = dynamic(() => import("@/components/MapCard"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4">
      {/* Móvil: Stack vertical | Desktop: Grid */}
      <div className="flex flex-col gap-4 w-full  lg:grid lg:grid-cols-4 lg:grid-rows-3">

        {/* Profile Card - Ocupa toda la izquierda en Desktop, Full en Mobile */}
        <div className="bg-slate-100 rounded-xl w-full p-4 col-span-2 row-span-3">
          <ProfileCard />
        </div>

        {/* GitHub Card */}
        <div className="bg-slate-100 rounded-xl w-full p-4 lg:col-span-2 lg:col-start-3">
          <GithubCard />
        </div>

        {/* Map Card */}
        <div className="bg-slate-100 rounded-xl w-full p-4 lg:row-span-2 lg:col-start-3 lg:row-start-2">
          <MapCard />
        </div>

        {/* LeetCode Card */}
        <div className="bg-slate-100 rounded-xl w-full p-4 lg:col-start-4 lg:row-start-2">
          <LeetCodeCard />
        </div>

        {/* Spotify Card */}
        <div className="bg-slate-100 rounded-xl w-full p-4 lg:col-start-4 lg:row-start-3">
          <p>Spotify Card?</p>
        </div>
      </div>
    </div>
  );
}
