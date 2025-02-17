import GitHubCalendar from "react-github-calendar";
import { VscGithub } from "react-icons/vsc";

export default function GithubCard() {
  return (
    <div className="bg-slate-50 text-slate-950 p-6 m-auto rounded-lg shadow-md">
      <header className="text-xl flex items-center gap-x-2">
        <VscGithub />
        <h2 className="font-semibold">Github</h2>
      </header>
      <GitHubCalendar username="ptzt" year={2025} colorScheme="light" />
    </div>
  )
}