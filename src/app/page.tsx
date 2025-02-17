import ProfileCard from "@/components/ProfileCard";
import GithubCard from "@/components/GithubCard";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)] px-4 py-4">
      <div className="flex flex-col gap-4 w-full sm:grid sm:grid-rows-3 sm:grid-flow-col">
        <div className="p-4 w-full bg-slate-100 rounded-xl sm:row-span-3">
          <ProfileCard />
        </div>

        <div className="p-4 w-full bg-slate-100 rounded-xl sm:col-span-2">
          <GithubCard />
        </div>

        <div className="p-4 w-full bg-slate-100 rounded-xl sm:row-span-2 sm:col-span-2">
          prueba
        </div>
      </div>
    </div>
  );
}
