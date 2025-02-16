import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-5 sm:grid-rows-5">
        <div className="sm:col-span-2 sm:row-span-5">
          <ProfileCard />
        </div>
        <div className="sm:row-span-2 sm:col-start-3">2</div>
        <div className="sm:col-span-3 sm:row-span-3 sm:col-start-3 sm:row-start-3">3</div>
        <div className="sm:col-span-2 sm:row-span-2 sm:col-start-4 sm:row-start-1">4</div>
      </div>
    </div>
  );
}
