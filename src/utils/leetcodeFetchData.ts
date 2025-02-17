export async function fetchLeetCodeStats(username: string) {
  const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
  const data = await res.json();
  return data;
}

