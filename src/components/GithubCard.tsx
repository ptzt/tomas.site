"use client"
import GitHubCalendar from "react-github-calendar";
import { VscGithub } from "react-icons/vsc";
export default function GithubCard() {

  return (
    <div className="flex justify-between bg-slate-50 text-slate-950 p-6 m-auto rounded-lg shadow-md text-xl">
      <div>
        <header className="flex items-center gap-x-2">
          <VscGithub />
          <h2 className="font-semibold">Github</h2>
        </header>
        <GitHubCalendar
          username="ptzt"
          year={2025}
          colorScheme="light"
        />
      </div>

    </div>
  )
}