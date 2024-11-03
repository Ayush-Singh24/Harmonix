import { GenreType, VoiceType } from "@/types/types";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${import.meta.env.BEARER_KEY}`, // Replace with your actual API key if needed
};

const data = {
  artistName: "Jerry",
  backgroundImageRemotePath:
    "themes/Levitate/images/Song-Levitate-VideoImageBackground03.png",
  backgroundSounds: false,
  dspEffect: "",
  dspFileRemotePath: "themes/Levitate/dsp/XML/Levitate_DSP_ABC.xml",
  language: "en",
  lyrics: ["In harmony, my heart beats free, a symphony", "of you and me"],
  scoreDataFileRemotePath: "themes/Levitate/score/Levitate_Score_Data_ABC.json",
  scoreFileRemotePath: "themes/Levitate/score/Levitate_Melody_ABC.json",
  singerImageRemotePath: "singers/Singer-Jerry-VideoImageBackground.png",
  songName: "Levitate",
  voiceModel: "CFV_2",
  voiceModelStyle: "baritone",
};

const getSongId = async ({
  prompt,
  voiceType,
  genre,
}: {
  prompt: string;
  voiceType: VoiceType;
  genre: GenreType;
}) => {};
