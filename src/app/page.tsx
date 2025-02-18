"use client"
import ProfileCard from "@/components/ProfileCard";
import GithubCard from "@/components/GithubCard";
import LeetCodeCard from "@/components/LeetcodeCard";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SpotifyCard from "@/components/SpotifyCard";
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
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-100 rounded-xl w-full p-4 lg:col-span-2 lg:col-start-3"
        >
          <GithubCard />
        </motion.div>

        {/* Map Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-100 rounded-xl w-full p-4 lg:row-span-2 lg:col-start-3 lg:row-start-2"
        >
          <MapCard />
        </motion.div>

        {/* LeetCode Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-100 rounded-xl w-full p-4 lg:col-start-4 lg:row-start-2"
        >
          <LeetCodeCard />
        </motion.div>

        {/* Spotify Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-100 rounded-xl w-full p-4 lg:col-start-4 lg:row-start-3"
        >
          <SpotifyCard />
        </motion.div>
      </div>
    </div>
  );
}
