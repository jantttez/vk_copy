import { Song } from "@shared/types";
import { create } from "zustand";
import { songs } from "@shared/constant";

interface SongStoreState {
  song: Song;
  volume: number;
}

interface SongStoreAction {
  addSong: (song: Song) => void;
  changeVolume: (volume: number) => void;
}

export const useSongStore = create<SongStoreState & SongStoreAction>((set) => ({
  song: songs[0],
  volume: 50,
  addSong: (song: Song) => set(() => ({ song: song })),
  changeVolume: (volume: number) => set(() => ({ volume: volume })),
}));
