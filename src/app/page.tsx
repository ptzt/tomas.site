"use client"
import ProfileCard from "@/components/ProfileCard";
import GithubCard from "@/components/GithubCard";
import LeetCodeCard from "@/components/LeetcodeCard";
import dynamic from "next/dynamic";

const MapCard = dynamic(() => import("@/components/MapCard"), { ssr: false });

export default function Home() {

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 ">
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        <div className="col-span-2 row-span-3 col-start-1 bg-slate-100 rounded-xl w-full p-4">
          <ProfileCard />
        </div>
        <div className="col-span-2 col-start-3 bg-slate-100 rounded-xl w-full p-4"><GithubCard /></div>
        <div className="row-span-2 col-start-3 row-start-2 bg-slate-100 rounded-xl w-full p-4"><MapCard /></div>
        <div className="col-start-4 row-start-2 bg-slate-100 rounded-xl w-full p-4"><LeetCodeCard /></div>
        <div className="col-start-4 row-start-3">Spofify card?</div>
      </div>
    </div>
  );
}
