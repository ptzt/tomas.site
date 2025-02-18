"use client"
import GitHubCalendar from "react-github-calendar";
import { VscGithub } from "react-icons/vsc";



export default function GithubCard() {
  return (
    <div className="flex  bg-slate-50 text-slate-950 p-6 m-auto rounded-lg shadow-md  max-w-full">
      <div className="w-full  ">
        <header>
          <a href="https://github.com/ptzt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 mb-2 hover:opacity-50">
            <VscGithub size={28} />
            <h2 className="font-semibold text-lg">Github</h2>
          </a>
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