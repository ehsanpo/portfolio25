"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

export default function MusicPage() {
  const tracks = [
    {
      title: "Ambient Workspace",
      artist: "Ehsan Pourhadi",
      duration: "4:32",
      description: "A calming ambient track perfect for focused work sessions",
    },
    {
      title: "Creative Flow",
      artist: "Ehsan Pourhadi",
      duration: "3:45",
      description:
        "Energetic electronic composition to boost creative productivity",
    },
    {
      title: "Late Night Coding",
      artist: "Ehsan Pourhadi",
      duration: "6:18",
      description: "Lo-fi beats designed for late night programming sessions",
    },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Music & <span className="gradient-text">Audio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Original compositions and audio design work that complement my
            creative process
          </p>
        </div>

        <div className="space-y-6">
          {tracks.map((track) => (
            <Card key={track.title} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{track.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {track.artist} • {track.duration}
                  </p>
                </div>
                <AudioPlayer tracks={[]} />
              </div>
              <p className="text-muted-foreground">{track.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            More tracks available on{" "}
            <span className="text-primary cursor-pointer hover:underline">
              SoundCloud
            </span>{" "}
            and{" "}
            <span className="text-primary cursor-pointer hover:underline">
              Spotify
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
