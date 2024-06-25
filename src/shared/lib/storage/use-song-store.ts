import { Song } from "@shared/types";
import { create } from "zustand";
interface SongStoreState {
  song: Song | null;
  volume: number;
}

interface SongStoreAction {
  addSong: (song: Song) => void;
  changeVolume: (volume: number) => void;
}

export const useSongStore = create<SongStoreState & SongStoreAction>((set) => ({
  song: null,
  volume: 50,
  addSong: (song: Song) => set(() => ({ song: song })),
  changeVolume: (volume: number) => set(() => ({ volume: volume })),
}));
