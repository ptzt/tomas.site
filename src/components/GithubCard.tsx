"use client"
import GitHubCalendar from "react-github-calendar";
import { VscGithub } from "react-icons/vsc";
import { fetchLeetCodeStats } from "@/utils/leetcodeFetchData";
import { useState, useEffect } from "react";
import { Trophy, CircleDot, Circle, CircleOff } from "lucide-react"

export default function GithubCard() {
  const [leetCodeStats, setLeetCodeStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getStats() {
      try {
        const stats = await fetchLeetCodeStats("ptzt");
        setLeetCodeStats(stats);
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getStats();
  }, []);

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
      <div>
        <h2 className="font-semibold">Leetcode</h2>
        {isLoading ? (
          <div className="flex justify-center items-center py-4">
            <p className="text-xl text-slate-600">Loading LeetCode stats...</p>
          </div>
        ) : leetCodeStats ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold">Rank</span>
              </div>
              <span className="text-2xl font-bold">{leetCodeStats.ranking.toLocaleString()}</span>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Total Solved</span>
                <span className="text-sm font-medium">
                  {leetCodeStats.totalSolved} / {leetCodeStats.totalQuestions}
                </span>
              </div>
              {/* <Progress value={(leetCodeStats.totalSolved / leetCodeStats.totalQuestions) * 100} className="h-2" /> */}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center mb-1">
                  <CircleDot className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium">Easy</span>
                </div>
                <span className="text-lg font-bold">{leetCodeStats.easySolved}</span>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Circle className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <span className="text-lg font-bold">{leetCodeStats.mediumSolved}</span>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <CircleOff className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-sm font-medium">Hard</span>
                </div>
                <span className="text-lg font-bold">{leetCodeStats.hardSolved}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center py-4">
            <p className="text-xl text-red-600">Failed to load LeetCode stats. Please try again.</p>
          </div>
        )}

      </div>
    </div>
  )
}