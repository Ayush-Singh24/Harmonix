"use client";
import { useState } from "react";
import { GenreSelector } from "./components/GenreSelector";
import { Textarea } from "./components/ui/textarea";
import { VoiceSelector } from "./components/VoiceSelector";
import { GenreType, VoiceType } from "./types/types";
import { Button } from "./components/ui/button";

function App() {
  const [voiceType, setVoiceType] = useState<VoiceType>("male");
  const [genre, setGenre] = useState<GenreType>("pop");

  return (
    <main className="h-screen flex flex-col items-center p-10 gap-20">
      <h1 className="text-5xl justify-start">Harmonix</h1>
      <section className="w-[1024px] flex flex-col p-5 gap-10 ring ring-purple-600 rounded">
        <div className="flex flex-col gap-3">
          <h1>Enter Prompt</h1>
          <Textarea placeholder="Leave lyrics to us or enter your own lyrics" />
        </div>
        <section className="flex gap-20 w-full">
          <div className="flex gap-3 items-center">
            <h1>Choose voice</h1>
            <VoiceSelector voiceType={voiceType} setVoiceType={setVoiceType} />
          </div>
          <div className="flex gap-3 items-center">
            <h1>Select Genre</h1>
            <GenreSelector genre={genre} setGenre={setGenre} />
          </div>
          <div className="ml-auto flex gap-10">
            <Button variant={"default"}>Your lyrics</Button>
            <Button variant={"default"}>Our lyrics</Button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
