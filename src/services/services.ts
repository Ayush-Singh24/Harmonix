import {
  classicalSongParameters,
  edmSongParameters,
  femaleVoiceParameters,
  maleVoiceParameters,
  popSongParameters,
  urbanSongParameters,
} from "@/lib/constants";
import { GenreType, VoiceType } from "@/types/types";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_BEARER_KEY}`,
};

const url = "https://api.voicemod.net/v2/cloud/ttsing";

const data = {
  artistName: "Jerry",
  backgroundImageRemotePath:
    "themes/Levitate/images/Song-Levitate-VideoImageBackground03.png",
  backgroundSounds: false,
  dspEffect: "",
  language: "en",
  singerImageRemotePath: "singers/Singer-Jerry-VideoImageBackground.png",
  songName: "Levitate",
};

export const getSongId = async ({
  prompt,
  voiceType,
  genre,
}: {
  prompt: string;
  voiceType: VoiceType;
  genre: GenreType;
}) => {
  let payload = { ...data, lyrics: [prompt] };

  switch (voiceType) {
    case "male":
      payload = { ...payload, ...maleVoiceParameters };
      break;
    case "female":
      payload = { ...payload, ...femaleVoiceParameters };
      break;
  }

  switch (genre) {
    case "pop":
      payload = { ...payload, ...popSongParameters };
      break;
    case "edm":
      payload = { ...payload, ...edmSongParameters };
      break;
    case "classical":
      payload = { ...payload, ...classicalSongParameters };
      break;
    case "urban":
      payload = { ...payload, ...urbanSongParameters };
      break;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  });

  const json = await response.json();
  return json;
};

export const getSong = async (jobId: string) => {
  const response = await fetch(`${url}/${jobId}`, {
    headers: headers,
  });

  return response;
};
