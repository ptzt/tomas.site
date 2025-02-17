/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Trophy, CircleDot, Circle, CircleOff } from "lucide-react"
import { useState, useEffect } from "react";
import { fetchLeetCodeStats } from "@/utils/leetcodeFetchData";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SiLeetcode } from "react-icons/si";

export default function LeetCodeCard() {
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
    <div className="text-black">
      <header >
        <a href="https://leetcode.com/u/ptzt/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 mb-2 hover:opacity-50">
          <SiLeetcode size={28} /><h2 className="font-semibold text-lg">Leetcode</h2>
        </a>
      </header>
      {isLoading ? (
        <div className="flex justify-center items-center py-4">
          <p className="text-xl text-slate-600">Loading LeetCode stats...</p>
        </div>
      ) : leetCodeStats ? (
        <div className="space-y-6">
          {/* Rank Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="text-lg font-semibold">Rank</span>
            </div>
            <span className="text-2xl font-bold">{leetCodeStats.ranking.toLocaleString()}</span>
          </div>

          {/* Total Solved Section */}
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center w-32 h-32">
              <CircularProgressbar
                value={leetCodeStats.totalSolved}
                maxValue={leetCodeStats.totalQuestions}
                text={`${leetCodeStats.totalSolved}/${leetCodeStats.totalQuestions}`}
                styles={buildStyles({
                  textSize: "16px",
                  textColor: "black",
                  pathColor: "#22c55e",
                  trailColor: "#374151",
                })}
              />
            </div>
            <div className="flex flex-col justify-center text-center space-y-4 w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <CircleDot className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Easy</span>
                </div>
                <span className="text-lg font-bold">{leetCodeStats.easySolved}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Circle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <span className="text-lg font-bold">{leetCodeStats.mediumSolved}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <CircleOff className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">Hard</span>
                </div>
                <span className="text-lg font-bold">{leetCodeStats.hardSolved}</span>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <div className="flex justify-center items-center py-4">
          <p className="text-xl text-red-600">Failed to load LeetCode stats. Please try again.</p>
        </div>
      )}

    </div>
  )
}