/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;

export default function SpotifyCard() {
  const [song, setSong] = useState<any>(null);

  useEffect(() => {
    async function fetchSpotify() {
      try {
        const authResponse = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
          },
          body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN,
          }),
        });

        const { access_token } = await authResponse.json();

        const songResponse = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        if (songResponse.status === 204) {
          setSong(null);
          return;
        }

        const data = await songResponse.json();
        setSong({
          name: data.item.name,
          artist: data.item.artists.map((artist: any) => artist.name).join(", "),
          albumImage: data.item.album.images[0].url,
          spotifyUrl: data.item.external_urls.spotify,
        });
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    }

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-100 rounded-xl w-full h-full p-4 flex flex-col justify-center">
      {song ? (
        <>
          <h2 className="text-lg font-semibold text-black mb-3">🎶 Currently Playing</h2>
          <div className="flex items-center gap-4">
            <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src={song.albumImage}
                alt="Album Cover"
                width={150}
                height={150}
                className="rounded-lg shadow-md transition-transform transform hover:scale-105"
                priority
              />
            </a>
            <div>
              <a
                href={song.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lg text-black hover:underline"
              >
                {song.name}
              </a>
              <p className="text-sm text-gray-700">{song.artist}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center">🎵 Nada sonando</p>
      )}
    </div>
  );
}
