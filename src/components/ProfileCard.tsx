import Image from "next/image";
import imageExample from "../../public/exampleImage.jpeg";
import { VscTwitter, VscCopy } from "react-icons/vsc";

export function ProfileCard() {
  return (
    <div className="bg-slate-50 text-slate-950 p-6 h-screen mx-auto rounded-lg shadow-md">
      {/* Header */}
      <header className="flex justify-between items-center text-xl mb-4">
        <h2 className="font-semibold">About me</h2>
        <div className="flex gap-3">
          <VscCopy size={24} className="opacity-50 hover:opacity-100 cursor-pointer transition" />
          <VscTwitter size={24} className="opacity-50 hover:opacity-100 cursor-pointer transition" />
        </div>
      </header>

      {/* Profile Info */}
      <div className="flex items-center gap-5 flex-wrap">
        <Image
          src={imageExample}
          width={180}
          height={180}
          alt="Profile picture"
          className="rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">Tomas Millan</h3>
          <p className="text-sm text-slate-700">
            Fullstack developer based in Argentina. Actualmente trabajando como freelance.
          </p>
        </div>
      </div>
    </div>
  );
}
